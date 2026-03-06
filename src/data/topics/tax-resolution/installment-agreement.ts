import type { EducationalTopicConfig } from "@/data/educational-types"

const topic: EducationalTopicConfig = {
  slug: "installment-agreement",
  vertical: "tax-resolution",
  topic: "IRS Installment Agreement",
  headline: "How to Set Up a Monthly Payment Plan With the IRS",
  subheadline: "An IRS installment agreement lets you pay your tax debt over time instead of all at once. Here is what each type costs, who qualifies, and what to expect.",
  heroDescription: "A payment plan with the IRS is the most common way people resolve tax debt -- and for good reason. If you cannot pay your balance in full, an installment agreement stops enforcement actions and gives you a predictable monthly payment you can manage. This guide explains how it works.",
  primaryCTA: "See If a Payment Plan Is Right for You",
  secondaryCTA: "Compare Your Options",
  ctaMicrocopy: "Free. No obligation. Takes 2 minutes.",

  whatThisMeans: {
    title: "What Is an IRS Installment Agreement?",
    subtitle: "Understanding the IRS's structured payment plan program",
    paragraphs: [
      "An IRS installment agreement is a formal arrangement that allows you to pay your tax debt in monthly installments rather than in a single lump sum. Once an agreement is in place, the IRS generally will not levy your wages or bank accounts as long as you stay current on your payments.",
      "There are several types of installment agreements, each with different eligibility requirements, setup fees, and terms. The right type depends on how much you owe, how quickly you can pay it off, and whether you can provide financial documentation.",
      "Setup fees range from $31 to $225 depending on how you apply and which type of agreement you use. Low-income taxpayers may qualify for reduced fees. Even while on an installment agreement, interest and the failure-to-pay penalty continue to accrue on the remaining balance -- though the penalty rate is reduced from 0.5% to 0.25% per month once an agreement is in effect.",
    ],
    bulletPoints: [
      "Stops most IRS enforcement actions, including wage levies",
      "Gives you a fixed monthly payment you can plan around",
      "Can be set up online for balances under $50,000",
      "Direct Debit agreements have lower setup fees and reduce the risk of missing a payment",
      "You must stay current on all future tax filings and payments to keep the agreement in force",
    ],
    callout: "Setting up an installment agreement does not eliminate your debt or stop interest from accruing. It is a payment structure, not a settlement. If reducing the total amount you owe is your goal, an Offer in Compromise may be worth exploring.",
  },

  whyItHappens: {
    title: "Why People Need IRS Payment Plans",
    paragraphs: [
      "Tax debt builds up for many reasons: a year of unexpected income without withholding, a business that had a difficult stretch, payroll tax obligations that fell behind, or simply a period where paying the IRS had to wait while other obligations came first.",
      "Whatever the reason, the IRS expects payment and will pursue collection -- including wage garnishments and bank levies -- if the debt goes unaddressed. An installment agreement is the most straightforward way to get into compliance and stop enforcement.",
      "For many taxpayers, the installment agreement is not the end goal -- it is a bridge while they work toward a more comprehensive resolution, like an Offer in Compromise or penalty abatement. Getting into an agreement first stops the bleeding while you figure out next steps.",
    ],
    bulletPoints: [
      "Unexpected tax liability from self-employment, investments, or other income without withholding",
      "Payroll tax obligations from running a business",
      "Prior tax years that were filed but not paid",
      "Penalties and interest that compounded a manageable balance into an unmanageable one",
    ],
    callout: "If you have unfiled tax returns, you generally cannot get an installment agreement until all required returns are filed. Filing -- even if you cannot pay -- is always the right first step.",
  },

  whatHappensNext: {
    title: "What Happens If You Do Not Set Up a Payment Plan",
    paragraphs: [
      "Without an agreement in place, the IRS will escalate collection. This typically means wage garnishments, bank levies, and federal tax liens. These enforcement actions can happen without warning once the IRS has sent the required notices and the 30-day response window has passed.",
      "Penalties and interest continue to compound on the unpaid balance. The failure-to-pay penalty is 0.5% per month on the outstanding amount, up to a maximum of 25%. Interest accrues daily at the federal short-term rate plus 3%, which in recent years has been in the 7-8% annual range.",
      "An unresolved IRS debt can also result in a Notice of Federal Tax Lien, which is a public record that affects your credit and your ability to sell or refinance property. Establishing an installment agreement does not automatically remove a lien, but it is a prerequisite for requesting lien withdrawal in certain cases.",
    ],
  },

  resolutionOptions: [
    {
      name: "Guaranteed Installment Agreement",
      description: "The simplest type of installment agreement, available for balances of $10,000 or less (excluding penalties and interest) owed for any one tax year. The IRS must accept this agreement if you meet the basic requirements.",
      whoQualifies: "Individual taxpayers who owe $10,000 or less, have filed all required returns, have not had an installment agreement in the past 5 years, and can pay the full balance within 3 years.",
      keyBenefit: "The IRS cannot reject you if you meet the criteria -- acceptance is guaranteed by statute",
    },
    {
      name: "Streamlined Installment Agreement",
      description: "Covers balances up to $50,000 (combined tax, penalties, and interest). No Collection Information Statement is required, meaning you do not need to disclose detailed financial information. Must be paid within 72 months (6 years).",
      whoQualifies: "Individual taxpayers and out-of-business sole proprietors with a total assessed balance of $50,000 or less who can pay within 72 months. Most people in this range qualify without a full financial review.",
      keyBenefit: "No financial disclosure required -- just prove you owe under $50,000 and can make monthly payments",
    },
    {
      name: "Non-Streamlined Installment Agreement",
      description: "For balances over $50,000 or situations where you cannot pay within 72 months. Requires a Collection Information Statement (Form 433-A or 433-F) documenting your income, expenses, and assets. The IRS has more discretion in setting payment terms.",
      whoQualifies: "Taxpayers with balances over $50,000 or those who need more than 6 years to pay. Financial disclosure is required and the IRS will set a payment amount based on your ability to pay.",
      keyBenefit: "Makes payment arrangements possible even for large balances where streamlined options are not available",
    },
    {
      name: "Partial Pay Installment Agreement (PPIA)",
      description: "A payment plan where your monthly payment is based on what you can actually afford -- which may be less than what is needed to pay the full debt before the collection statute expires. The remaining balance may expire uncollected at the end of the 10-year collection window.",
      whoQualifies: "Taxpayers who cannot afford to pay the full balance within the collection period but have enough income to make some monthly payment. Requires full financial disclosure and periodic review.",
      keyBenefit: "Monthly payment based on what you can actually afford, with the potential for remaining debt to expire before it is fully paid",
    },
  ],

  howTheProcessWorks: [
    { step: 1, title: "File All Missing Returns", description: "You must be current on all required tax filings before the IRS will approve an installment agreement. File any missing returns first, even if you cannot pay the balance due. Filing without paying is always better than not filing at all." },
    { step: 2, title: "Determine Which Agreement Type Fits", description: "If you owe $50,000 or less, you likely qualify for a Streamlined Installment Agreement with no financial disclosure. If you owe more, or if a Partial Pay IA might better fit your situation, gather your income, expense, and asset information." },
    { step: 3, title: "Apply Online or by Mail", description: "For balances under $50,000, you can apply through the IRS Online Payment Agreement tool at irs.gov -- the fastest and cheapest option ($31 setup fee for direct debit). For higher balances or complex situations, submit Form 9465 with a Form 433-A." },
    { step: 4, title: "Pay the Setup Fee", description: "Setup fees range from $31 (online direct debit) to $107 (online non-direct debit) to $225 (by phone or mail). Low-income taxpayers may qualify for a reduced $43 fee. The fee is added to your balance." },
    { step: 5, title: "Make Payments and Stay Current", description: "Once your agreement is active, make every payment on time and file all future tax returns when due. Missing a payment or failing to file can default your agreement, which restores the IRS's ability to levy. If you hit a difficult month, contact the IRS proactively before missing a payment." },
  ],

  whenToSeekHelp: {
    title: "When to Consider Working With a Tax Professional",
    paragraphs: [
      "For straightforward situations -- you owe under $50,000, all your returns are filed, and you can afford a monthly payment -- you can likely set up an installment agreement on your own through irs.gov. The online system is designed for this.",
      "For more complex situations, a qualified enrolled agent, CPA, or tax attorney can evaluate whether an installment agreement is actually your best option or whether an Offer in Compromise, penalty abatement, or currently not collectible status would serve you better. They can also negotiate with the IRS on your behalf and handle the financial disclosure process if required.",
    ],
    bulletPoints: [
      "You owe more than $50,000 and need to negotiate terms",
      "You have unfiled returns for multiple years",
      "You are self-employed or have business tax debt",
      "You want to pursue penalty abatement alongside an installment agreement",
      "You have been denied an installment agreement or had a previous one default",
      "You are unsure whether an installment agreement or an Offer in Compromise is the better path",
    ],
    callout: "The IRS Taxpayer Advocate Service can help if you are experiencing economic hardship or the IRS is not responding to your requests. Call 1-877-777-4778 for free assistance.",
  },

  reassurance: {
    title: "Payment Plans Are the Most Common IRS Resolution -- and They Work",
    message: "Millions of taxpayers have installment agreements with the IRS right now. It is not a sign of failure -- it is the system working as intended. The IRS designed these agreements because they know that collecting something over time is better than pushing people into a corner. If you owe taxes you cannot pay today, a payment plan is a reasonable, common, and effective solution.",
    bulletPoints: [
      "The IRS processes millions of installment agreements every year",
      "Setting up an agreement stops wage garnishments and bank levies",
      "The failure-to-pay penalty rate drops by half once an agreement is active",
      "Online setup takes about 15 minutes for most people",
    ],
  },

  commonQuestions: [
    { question: "Will an installment agreement stop a wage garnishment?", answer: "Yes, in most cases. Once the IRS approves an installment agreement, they release any active wage levies within 1-2 pay periods. The agreement signals that you are addressing the debt, so the IRS no longer needs enforcement to compel payment." },
    { question: "How much will my monthly payment be?", answer: "For Streamlined Installment Agreements, your payment is calculated by dividing your total balance by the number of months remaining in the 72-month term. For example, a $30,000 balance would require roughly $417 per month. For Non-Streamlined agreements, the IRS bases payments on your documented ability to pay." },
    { question: "What happens if I miss a payment?", answer: "Missing a payment can default your installment agreement, which allows the IRS to resume collection activity. If you know you will miss a payment, contact the IRS before the due date to request a modification. The IRS generally allows one missed or late payment before defaulting an agreement." },
    { question: "Does an installment agreement affect my credit?", answer: "The installment agreement itself does not appear on your credit report. However, if the IRS filed a Notice of Federal Tax Lien before your agreement was established, that lien is a public record. In some cases, you can request lien withdrawal after entering a Direct Debit Installment Agreement." },
    { question: "Can I set up a payment plan online?", answer: "Yes. The IRS Online Payment Agreement tool at irs.gov lets you set up most installment agreements in about 15 minutes if you owe $50,000 or less and all your returns are filed. It also has the lowest setup fees -- $31 for direct debit, $107 for non-direct-debit agreements." },
  ],

  glossary: [
    { term: "Installment Agreement", definition: "A formal arrangement with the IRS that allows you to pay your tax debt in monthly installments over time instead of in a single lump sum." },
    { term: "Streamlined Installment Agreement", definition: "An installment agreement available for balances of $50,000 or less that does not require financial disclosure. Must be paid within 72 months." },
    { term: "Partial Pay Installment Agreement (PPIA)", definition: "A payment plan where monthly payments are based on your actual ability to pay, which may be less than what is needed to fully pay the debt before the collection statute expires." },
    { term: "Form 9465", definition: "The IRS form used to request an installment agreement by mail or phone." },
    { term: "Form 433-A", definition: "The Collection Information Statement for individuals. Required for non-streamlined installment agreements and documents your income, expenses, and assets." },
    { term: "Direct Debit Installment Agreement (DDIA)", definition: "An installment agreement where monthly payments are automatically withdrawn from your bank account. Has the lowest setup fee ($31) and reduces the risk of a missed payment defaulting your agreement." },
    { term: "Federal Tax Lien", definition: "A public notice the IRS files to claim a legal right to your property when you owe tax debt. An installment agreement does not automatically remove a lien." },
    { term: "Failure-to-Pay Penalty", definition: "An IRS penalty of 0.5% per month on the unpaid balance, up to 25%. Reduced to 0.25% per month while an installment agreement is active." },
  ],

  relatedTopics: [
    { title: "Offer in Compromise", slug: "offer-in-compromise", description: "How to settle your tax debt for less than the full amount owed if you qualify." },
    { title: "IRS Penalty Abatement", slug: "penalty-abatement", description: "How to request removal of IRS penalties that have built up on top of your tax debt." },
    { title: "Federal Tax Lien", slug: "tax-lien", description: "How the IRS places a legal claim on your property and what it means for your finances." },
  ],

  disclaimer: "This content is for educational purposes only and does not constitute legal or tax advice. Tax situations vary and outcomes depend on individual circumstances. Consult a qualified tax professional for advice specific to your situation. This guide reflects general IRS procedures and programs available as of 2024.",
}

export default topic
