import type { Metadata } from "next"
import AuthorityHomeClient from "./AuthorityHomeClient"

export const metadata: Metadata = {
  title: "Tax Resolution Services | Partner Authority Page",
  description:
    "Get expert help resolving IRS tax issues. Free consultation with certified tax professionals.",
}

export default function AuthorityHomePage() {
  return <AuthorityHomeClient />
}
