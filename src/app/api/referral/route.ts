import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, message, ref } = body

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 })
    }

    const submission = {
      name,
      email,
      phone: phone || "",
      message: message || "",
      ref: ref || "direct",
      submittedAt: new Date().toISOString(),
    }

    // TODO: Wire to Supabase when env vars are set
    // For now, return success -- the client stores locally too
    console.log("Referral submission:", submission)

    return NextResponse.json({ success: true, submission })
  } catch {
    return NextResponse.json({ error: "Submission failed" }, { status: 500 })
  }
}
