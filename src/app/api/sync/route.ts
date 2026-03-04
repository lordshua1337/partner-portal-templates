import { NextResponse } from 'next/server'
import { requireUser } from '@/lib/auth/server'
import { adminClient } from '@/lib/supabase/client'

export async function GET() {
  const user = await requireUser()

  const { data: templates } = await adminClient
    .from('saved_templates')
    .select('*')
    .eq('user_id', user.id)
    .order('updated_at', { ascending: false })

  return NextResponse.json({
    saved_templates: templates ?? [],
  })
}
