import type { EducationalTopicConfig } from "@/data/educational-types"

const topic: EducationalTopicConfig = {
  slug: "offer-in-compromise",
  vertical: "tax-resolution",
  topic: "Offer in Compromise",
  headline: "Can You Settle Your Tax Debt for Less Than You Owe?",
  subheadline: "The IRS Offer in Compromise program lets qualifying taxpayers resolve their debt for a reduced amount. Here is how it works and whether you may qualify.",
  heroDescription: "An Offer in Compromise is one of the most powerful tools in the IRS resolution system -- but it is also one of the most misunderstood. This guide explains what it actually is, who qualifies, and what the process looks like from start to finish.",
  primaryCTA: "Find Out If You Qualify",
  secondaryCTA: "See How the Process Works",
  ctaMicrocopy: "Free. No obligation. Takes 2 minutes.",

  whatThisMeans: {
    title: "What Is an Offer in Compromise?",
    subtitle: "Understanding the IRS program that allows you to settle tax debt for less than the full amount",
    paragraphs: [
      "An Offer in Compromise (OIC) is a formal agreement between you and the IRS that settles your tax liability for less than the full amount you owe. It is a legitimate IRS program governed by Internal Revenue Code Section 7122 -- not a loophole or a trick.",
      "The IRS accepts an OIC when they determine that accepting less is in the government's best interest because it is unlikely they could collect the full amount within the remaining collection window. The IRS evaluates your ability to pay based on your income, expenses, asset equity, and future earning potential.",
      "There is a $205 non-refundable application fee to submit an OIC. The IRS also requires an initial payment with your application: 20% of the offered amount if you propose a lump sum, or the first installment if you propose periodic payments. These amounts are applied to your debt regardless of whether the IRS accepts your offer.",
    ],
    bulletPoints: [
      "Legally settle your tax debt for less than you owe",
      "Available for income taxes, payroll taxes, and certain other IRS assessments",
      "The $205 application fee is waived for low-income taxpayers",
      "Collection activity is generally suspended while your offer is under review",
      "You can use the IRS OIC Pre-Qualifier tool at irs.gov to check eligibility before applying",
    ],
    callout: "The IRS is not required to accept an OIC. Acceptance rates are typically around 30-40%. Understanding the criteria before applying significantly improves your chances.",
  },

  whyItHappens: {
    title: "Why People Pursue an Offer in Compromise",
    paragraphs: [
      "Most people who pursue an OIC have fallen behind on taxes due to circumstances outside their control -- job loss, medical emergencies, business failure, divorce, or a period of financial hardship that created debt they could not catch up with.",
      "Over time, penalties and interest compound the original balance significantly. Someone who originally owed $20,000 may find themselves facing $40,000 or more after a few years of accruals. An OIC gives people a path to resolve that reality rather than struggle indefinitely.",
      "The IRS also recognizes that collecting an uncollectible debt is not a productive use of resources. When the IRS determines your reasonable collection potential is less than what you owe, settling for that amount is a rational outcome for both parties.",
    ],
    bulletPoints: [
      "Tax debt has grown significantly due to penalties and interest",
      "Your income and assets cannot support full repayment within the collection window",
      "You have doubt about whether the tax assessment itself is correct (Doubt as to Liability)",
      "Full collection would create economic hardship that leaves you unable to meet basic living expenses",
    ],
    callout: "If you believe the IRS assessed the wrong amount -- not just that you cannot pay it -- you may qualify under Doubt as to Liability, which has different criteria than the standard financial hardship OIC.",
  },

  whatHappensNext: {
    title: "What Happens If You Do Not Resolve Your Tax Debt",
    paragraphs: [
      "If you do not take action, the IRS will continue to pursue collection through wage garnishments, bank levies, and federal tax liens. Penalties and interest continue to accrue daily on the unpaid balance, meaning the amount you owe grows every month you wait.",
      "The IRS has 10 years from the date of assessment to collect a tax debt -- the Collection Statute Expiration Date (CSED). However, certain actions like submitting an OIC, filing for bankruptcy, or requesting a hearing can pause or extend this clock.",
      "A federal tax lien may already be on record in your county if your balance exceeds $10,000. This affects your ability to sell property, get loans, or refinance. Resolving your tax debt -- through an OIC or another method -- releases the lien.",
    ],
  },

  resolutionOptions: [
    {
      name: "Lump Sum Offer (Cash Offer)",
      description: "Pay 20% of your offered amount when you apply, with the remaining balance due within 5 months of acceptance. This is the most common OIC type and generally receives faster processing.",
      whoQualifies: "Anyone who can demonstrate their reasonable collection potential is less than the full amount owed and can make the 20% initial payment with the application.",
      keyBenefit: "Fastest resolution path and typically requires the lowest overall offer amount",
    },
    {
      name: "Periodic Payment Offer",
      description: "Pay the offered amount in monthly installments over 6 to 24 months. The first installment is due with the application and must continue during IRS review.",
      whoQualifies: "Taxpayers who cannot make a lump sum payment but can sustain consistent monthly payments. Higher offer amounts are generally required compared to a lump sum.",
      keyBenefit: "Spreads payments over time, making the offer more accessible if a lump sum is not feasible",
    },
    {
      name: "Doubt as to Collectibility",
      description: "The most common basis for an OIC. The IRS accepts the reduced amount because they determine it is unlikely they could collect the full balance within the collection window.",
      whoQualifies: "Taxpayers whose income, assets, and future earning potential add up to less than the full tax debt. Requires completing Form 433-A or 433-B (Collection Information Statement).",
      keyBenefit: "Directly addresses the reality of your financial situation with a structured, documented analysis",
    },
    {
      name: "Doubt as to Liability",
      description: "An OIC based on a genuine dispute about whether you owe the tax at all or whether the assessed amount is correct. No financial analysis is required for this type.",
      whoQualifies: "Taxpayers who have legitimate grounds to dispute the underlying tax assessment -- for example, because of missing documentation, errors in the IRS's calculation, or changed circumstances.",
      keyBenefit: "Can resolve incorrectly assessed tax without requiring proof of financial hardship",
    },
  ],

  howTheProcessWorks: [
    { step: 1, title: "Check Your Eligibility", description: "Use the IRS OIC Pre-Qualifier tool at irs.gov to get a rough sense of whether you may qualify. You must be current on all required tax filings and estimated tax payments to apply. Bankruptcy disqualifies you during active proceedings." },
    { step: 2, title: "Calculate Your Reasonable Collection Potential", description: "The IRS will evaluate your assets (equity in property, vehicles, bank accounts, retirement funds) plus your future income potential. Your offer must equal or exceed this calculated amount, known as your Reasonable Collection Potential (RCP)." },
    { step: 3, title: "Prepare and Submit Your Application", description: "Complete Form 656 (Offer in Compromise) and either Form 433-A (for individuals) or Form 433-B (for businesses). Include your $205 application fee and initial payment. Submit everything together to the IRS." },
    { step: 4, title: "IRS Review Period", description: "The IRS typically takes 6 to 12 months to evaluate an OIC. During this time, collection activity is generally suspended and the CSED clock is paused. You must stay current on all tax obligations during review." },
    { step: 5, title: "Acceptance or Negotiation", description: "The IRS may accept your offer, reject it, or make a counteroffer. If rejected, you have 30 days to appeal to the IRS Office of Appeals. If accepted, you must complete payments within the agreed terms and stay compliant with taxes for the next 5 years." },
  ],

  whenToSeekHelp: {
    title: "When a Tax Professional Can Make the Difference",
    paragraphs: [
      "The OIC application process is detailed and unforgiving. Errors, missing documentation, or an offer amount that does not match the IRS's calculation methodology often result in rejection. A qualified enrolled agent, CPA, or tax attorney who specializes in IRS collections can calculate your Reasonable Collection Potential accurately and structure an offer that has the best chance of acceptance.",
      "A professional can also identify whether you are better served by a different resolution path -- such as an installment agreement, currently not collectible status, or penalty abatement -- rather than an OIC that is unlikely to be approved.",
    ],
    bulletPoints: [
      "You owe more than $25,000 and believe your situation qualifies",
      "You have self-employment income, business assets, or complex financials",
      "You have been rejected for an OIC before",
      "You are unsure how to value your assets or calculate your future income potential",
      "You have unfiled tax returns (these must be filed before applying)",
      "You want to understand all available resolution options before committing to one",
    ],
    callout: "Be cautious of any company that guarantees OIC acceptance or promises to settle for pennies on the dollar. No one can guarantee acceptance -- only the IRS makes that decision.",
  },

  reassurance: {
    title: "Settling Tax Debt Is a Real, Legal Option for Many People",
    message: "The Offer in Compromise is not a gray area or a workaround -- it is a program Congress created and the IRS administers every day. Thousands of people resolve their tax debt through this program annually. If your financial situation genuinely cannot support full repayment, the IRS has a process designed for exactly that reality.",
    bulletPoints: [
      "The IRS accepted over 17,000 Offers in Compromise in a recent year, totaling more than $300 million in resolved debt",
      "The average accepted OIC settles debt for significantly less than the original balance",
      "Low-income taxpayers may qualify for fee waivers and different payment terms",
      "Even if you do not qualify for an OIC, other resolution options exist -- this is not your only path forward",
    ],
  },

  commonQuestions: [
    { question: "How much will the IRS settle for?", answer: "There is no fixed percentage. The IRS requires your offer to equal or exceed your Reasonable Collection Potential -- the sum of your asset equity plus your future disposable income over a set period. For a lump sum offer, that is 12 months of future income; for periodic payments, it is 24 months. Your specific number depends entirely on your financial situation." },
    { question: "What is the $205 application fee and is it refundable?", answer: "The $205 application fee is required with every OIC submission unless you qualify for the low-income fee waiver. It is non-refundable -- meaning the IRS keeps it even if they reject your offer. The initial payment (20% for lump sum offers) is also non-refundable and is applied to your debt regardless of the outcome." },
    { question: "How long does the OIC process take?", answer: "Most OIC cases take 6 to 12 months to process. Complex cases or those requiring additional documentation can take longer. During this time, collection activity is generally paused and you must stay current on all tax filings and payments." },
    { question: "What happens if the IRS rejects my offer?", answer: "If the IRS rejects your OIC, they will send you a rejection letter explaining the reason. You have 30 days to appeal to the IRS Office of Appeals, which will conduct an independent review. If the appeal is also denied, you can pursue other resolution options like an installment agreement or currently not collectible status." },
    { question: "Do I have to be behind on taxes to apply?", answer: "No -- you can apply while current on taxes, but you must be current. All required tax returns must be filed, and if you make estimated tax payments, those must be up to date. You also cannot be in an active bankruptcy case when you apply." },
  ],

  glossary: [
    { term: "Offer in Compromise (OIC)", definition: "A formal IRS program that allows qualifying taxpayers to settle their tax debt for less than the full amount owed, based on their ability to pay." },
    { term: "Reasonable Collection Potential (RCP)", definition: "The IRS's calculation of the maximum amount they could realistically collect from you, based on your asset equity plus future disposable income. Your offer must equal or exceed this amount." },
    { term: "Form 656", definition: "The official IRS form used to submit an Offer in Compromise. It includes the offer amount, payment terms, and the legal basis for the offer." },
    { term: "Form 433-A", definition: "The Collection Information Statement for individuals. It documents your income, expenses, assets, and liabilities -- the financial data the IRS uses to evaluate your OIC." },
    { term: "Doubt as to Collectibility", definition: "The most common basis for an OIC. The IRS accepts a reduced amount because your financial situation makes full collection unlikely within the remaining collection window." },
    { term: "Doubt as to Liability", definition: "An OIC basis used when you genuinely dispute whether the assessed tax amount is correct, not just that you cannot pay it." },
    { term: "Collection Statute Expiration Date (CSED)", definition: "The IRS generally has 10 years from assessment to collect a tax debt. Submitting an OIC pauses this clock during the review period." },
    { term: "OIC Pre-Qualifier Tool", definition: "A free online tool at irs.gov that helps taxpayers estimate whether they may qualify for an Offer in Compromise before submitting a formal application." },
  ],

  relatedTopics: [
    { title: "IRS Wage Garnishment", slug: "irs-wage-garnishment", description: "What to do when the IRS is taking money directly from your paycheck." },
    { title: "IRS Bank Levy", slug: "irs-bank-levy", description: "What happens when the IRS freezes and seizes funds from your bank account." },
    { title: "Currently Not Collectible", slug: "currently-not-collectible", description: "How to pause IRS collection activity when paying would create genuine financial hardship." },
  ],

  disclaimer: "This content is for educational purposes only and does not constitute legal or tax advice. Tax situations vary and outcomes depend on individual circumstances. Consult a qualified tax professional for advice specific to your situation. This guide reflects general IRS procedures and programs available as of 2024.",
}

export default topic
