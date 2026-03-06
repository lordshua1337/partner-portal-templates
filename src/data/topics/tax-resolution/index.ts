import type { EducationalTopicConfig } from "@/data/educational-types"
import wageGarnishment from "./irs-wage-garnishment"
import bankLevy from "./irs-bank-levy"
import taxLien from "./tax-lien"
import offerInCompromise from "./offer-in-compromise"
import installmentAgreement from "./installment-agreement"
import penaltyAbatement from "./penalty-abatement"
import unfiledTaxReturns from "./unfiled-tax-returns"
import irsAuditRepresentation from "./irs-audit-representation"
import innocentSpouseRelief from "./innocent-spouse-relief"
import currentlyNotCollectible from "./currently-not-collectible"

export const TAX_RESOLUTION_TOPICS: readonly EducationalTopicConfig[] = [
  wageGarnishment,
  bankLevy,
  taxLien,
  offerInCompromise,
  installmentAgreement,
  penaltyAbatement,
  unfiledTaxReturns,
  irsAuditRepresentation,
  innocentSpouseRelief,
  currentlyNotCollectible,
]

export function getTopicBySlug(slug: string): EducationalTopicConfig | undefined {
  return TAX_RESOLUTION_TOPICS.find((t) => t.slug === slug)
}
