import { NextResponse } from "next/server"
import { z } from "zod/v4"
import { EducationalTopicConfigSchema } from "@/data/educational-types"

const RequestSchema = z.object({
  topic: z.string().min(3).max(200),
  vertical: z.string().min(2).max(100),
})

const GENERATION_PROMPT = `You are an expert content writer for educational landing pages about professional services.

Generate a complete educational topic config for the given topic and vertical. The content must be:

VOICE:
- Clear, calm, authoritative, trustworthy
- No hype, no scare tactics, no aggressive sales language
- Speak to someone who is stressed, confused, and possibly embarrassed
- Explain like a knowledgeable professional talking to a friend
- Short paragraphs, plain English, no jargon unless defined in glossary

CONTENT STANDARDS:
- Every section provides real value -- no filler
- Factual accuracy -- reference real procedures, programs, timelines
- No promises about outcomes -- "eligibility varies", "may qualify"
- Position professional help as guidance, not rescue
- Answer the questions the visitor is actually asking in their head

EMOTIONAL AWARENESS:
- Visitor is likely experiencing: panic, confusion, fear, embarrassment, financial stress
- Reduce fear through understanding -- once people know what's happening, they calm down
- Reassurance is earned through information, not platitudes
- Never minimize the situation, never catastrophize it

Return ONLY valid JSON matching this exact structure (no markdown, no code fences):

{
  "slug": "kebab-case-topic-name",
  "vertical": "the-vertical",
  "topic": "Human Readable Topic Name",
  "headline": "What to Do About [Topic] -- A Clear Guide",
  "subheadline": "One sentence summary of the page purpose",
  "heroDescription": "2-3 sentences of supporting hero copy",
  "whatThisMeans": { "title": "...", "paragraphs": ["...", "..."], "bulletPoints": ["...", "..."], "callout": "..." },
  "whyItHappens": { "title": "...", "paragraphs": ["...", "..."], "bulletPoints": ["...", "..."] },
  "whatHappensNext": { "title": "...", "paragraphs": ["...", "..."], "bulletPoints": ["...", "..."], "callout": "..." },
  "commonQuestions": [{ "question": "...", "answer": "..." }],
  "resolutionOptions": [{ "name": "...", "description": "...", "whoQualifies": "...", "keyBenefit": "..." }],
  "whenToSeekHelp": { "title": "...", "paragraphs": ["...", "..."], "bulletPoints": ["...", "..."] },
  "howTheProcessWorks": [{ "step": 1, "title": "...", "description": "..." }],
  "reassurance": { "title": "...", "message": "...", "bulletPoints": ["...", "..."] },
  "glossary": [{ "term": "...", "definition": "..." }],
  "relatedTopics": [{ "title": "...", "slug": "...", "description": "..." }],
  "disclaimer": "This content is for educational purposes only...",
  "primaryCTA": "Get Help Understanding Your Options",
  "secondaryCTA": "See What Options May Be Available",
  "ctaMicrocopy": "Free. No obligation. Takes 2 minutes."
}

Include at least:
- 3 paragraphs in whatThisMeans, whyItHappens, whatHappensNext
- 5+ FAQ items
- 3+ resolution options
- 5+ process steps
- 8+ glossary terms
- 3+ related topics
- 3+ bullet points in reassurance`

export async function POST(request: Request) {
  try {
    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        {
          error: "ANTHROPIC_API_KEY not configured",
          setup: "Add ANTHROPIC_API_KEY to your environment variables to enable AI topic generation.",
        },
        { status: 503 }
      )
    }

    const body = await request.json()
    const parsed = RequestSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request", details: parsed.error.issues },
        { status: 400 }
      )
    }

    const { topic, vertical } = parsed.data

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 8000,
        messages: [
          {
            role: "user",
            content: `${GENERATION_PROMPT}\n\nGenerate a complete educational landing page config for:\nTopic: ${topic}\nVertical: ${vertical}`,
          },
        ],
      }),
    })

    if (!response.ok) {
      const errText = await response.text()
      console.error("Anthropic API error:", errText)
      return NextResponse.json(
        { error: "AI generation failed", details: response.status },
        { status: 502 }
      )
    }

    const aiResponse = await response.json()
    const content = aiResponse.content?.[0]?.text
    if (!content) {
      return NextResponse.json(
        { error: "Empty AI response" },
        { status: 502 }
      )
    }

    // Parse the JSON from AI response
    let topicConfig: unknown
    try {
      // Strip any markdown code fences if present
      const cleaned = content.replace(/^```(?:json)?\n?/m, "").replace(/\n?```$/m, "").trim()
      topicConfig = JSON.parse(cleaned)
    } catch {
      return NextResponse.json(
        { error: "AI returned invalid JSON", raw: content.slice(0, 500) },
        { status: 502 }
      )
    }

    // Validate with Zod
    const validated = EducationalTopicConfigSchema.safeParse(topicConfig)
    if (!validated.success) {
      return NextResponse.json(
        {
          error: "Generated content failed validation",
          details: validated.error.issues,
          raw: topicConfig,
        },
        { status: 422 }
      )
    }

    return NextResponse.json({
      topic: validated.data,
      generated: true,
      model: "claude-sonnet-4-20250514",
    })
  } catch (err) {
    console.error("Generate topic error:", err)
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Generation failed" },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    endpoint: "POST /api/generate-topic",
    description: "Generate an educational landing page topic config using AI",
    body: {
      topic: "string (required) -- the topic name, e.g. 'IRS Wage Garnishment'",
      vertical: "string (required) -- the vertical, e.g. 'tax-resolution'",
    },
    requires: "ANTHROPIC_API_KEY environment variable",
  })
}
