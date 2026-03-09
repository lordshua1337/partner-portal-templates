import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getTopicBySlug, TAX_RESOLUTION_TOPICS } from "@/data/topics/tax-resolution"
import TopicPageClient from "./TopicPageClient"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return TAX_RESOLUTION_TOPICS.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const topic = getTopicBySlug(slug)
  if (!topic) return { title: "Topic Not Found" }

  return {
    title: `${topic.topic} -- What You Need to Know | Partner Portal`,
    description: topic.subheadline,
    openGraph: {
      title: topic.headline,
      description: topic.heroDescription,
      type: "article",
      url: `/tax-resolution/${topic.slug}`,
    },
    keywords: [
      topic.topic,
      topic.vertical.replace(/-/g, " "),
      ...topic.glossary.map((g) => g.term),
    ],
  }
}

export default async function TaxResolutionTopicPage({ params }: PageProps) {
  const { slug } = await params
  const topic = getTopicBySlug(slug)
  if (!topic) notFound()

  return <TopicPageClient topic={topic} />
}
