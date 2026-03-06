import type { EducationalTopicConfig } from "@/data/educational-types"
import wageGarnishment from "./irs-wage-garnishment"
import bankLevy from "./irs-bank-levy"
import taxLien from "./tax-lien"

export const TAX_RESOLUTION_TOPICS: readonly EducationalTopicConfig[] = [
  wageGarnishment,
  bankLevy,
  taxLien,
]

export function getTopicBySlug(slug: string): EducationalTopicConfig | undefined {
  return TAX_RESOLUTION_TOPICS.find((t) => t.slug === slug)
}
