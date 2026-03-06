import type { EducationalTopicConfig } from "@/data/educational-types"

const topic: EducationalTopicConfig = {
  slug: "tax-lien",
  vertical: "tax-resolution",
  topic: "Federal Tax Lien",
  headline: "Understanding Federal Tax Liens and What They Mean for You",
  subheadline: "A tax lien affects your credit and property. Here is what it is, how it works, and what you can do about it.",
  heroDescription: "A federal tax lien is the IRS placing a legal claim on your property as security for your tax debt. Unlike a levy (which seizes your property), a lien protects the government's interest while you work toward resolution.",
  primaryCTA: "Learn How to Address Your Tax Lien",
  secondaryCTA: "See Lien Release Options",
  ctaMicrocopy: "Free. No obligation. Takes 2 minutes.",

  whatThisMeans: {
    title: "What Is a Federal Tax Lien?",
    subtitle: "The difference between a lien and a levy",
    paragraphs: [
      "A federal tax lien is a legal claim the IRS places on all of your property -- real estate, vehicles, financial accounts, and even future assets -- when you have unpaid tax debt. Think of it as the IRS saying, 'We have a claim on your stuff until this debt is resolved.'",
      "A lien is different from a levy. A lien is a claim -- it does not take your property. A levy is a seizure -- it actually takes your money or assets. You can still use and sell your property with a lien in place, though the lien may complicate those transactions.",
      "The IRS files a public document called a Notice of Federal Tax Lien to alert creditors that the government has a legal right to your property. This public filing is what impacts your credit score and your ability to obtain financing.",
    ],
    bulletPoints: [
      "A lien attaches to all property you currently own",
      "It also attaches to property you acquire after the lien is filed",
      "The lien is a public record that appears on credit reports",
      "You can still sell property, but the lien must be satisfied or subordinated",
      "A lien is different from a levy -- a lien claims, a levy takes",
    ],
    callout: "A federal tax lien does not mean the IRS is seizing your property. It means they have secured their position as a creditor. You still have options to address this.",
  },

  whyItHappens: {
    title: "Why the IRS Filed a Tax Lien",
    paragraphs: [
      "The IRS files a lien when three conditions are met: they assessed your tax liability, they sent you a notice demanding payment (typically a CP14 or similar), and you did not pay the full amount within the timeframe specified.",
      "A statutory lien actually arises automatically when you have assessed tax debt and have been sent a demand for payment. The IRS then decides whether to file a public Notice of Federal Tax Lien, which is the step that affects your credit and alerts other creditors.",
      "The IRS generally files a public lien notice when the unpaid balance exceeds $10,000, though they have discretion to file at any amount. For taxpayers who owe less than $25,000 and enter a Direct Debit Installment Agreement, the IRS may withdraw the lien.",
    ],
  },

  whatHappensNext: {
    title: "How a Tax Lien Affects Your Life",
    paragraphs: [
      "The most immediate impact is on your credit. A federal tax lien is a significant negative mark that can lower your credit score and remain visible to anyone who pulls your credit report. This can affect your ability to get a mortgage, car loan, business loan, or credit card.",
      "If you try to sell real property (house, land), the lien must be addressed. The IRS lien must either be paid off from the sale proceeds, or the IRS must agree to discharge the specific property from the lien to allow the sale to go through.",
      "A tax lien can also affect business operations. It can attach to business property and accounts receivable, and it may appear when business partners or clients run background checks.",
    ],
    bulletPoints: [
      "Significantly impacts credit score and creditworthiness",
      "Complicates real estate sales and refinancing",
      "May affect business operations and relationships",
      "Attaches to all current and future property",
    ],
    callout: "The IRS has a Fresh Start program that makes it easier to get lien withdrawals and releases. Ask about Fresh Start eligibility when you contact them.",
  },

  resolutionOptions: [
    {
      name: "Lien Release",
      description: "The IRS releases the lien within 30 days of the tax debt being fully paid, or when the debt becomes legally unenforceable (statute of limitations expires).",
      whoQualifies: "Taxpayers who have paid their tax debt in full, including penalties and interest, or whose collection statute has expired.",
      keyBenefit: "Complete removal of the lien from your property",
    },
    {
      name: "Lien Withdrawal",
      description: "The IRS withdraws the public Notice of Federal Tax Lien as if it was never filed. This is different from a release -- withdrawal removes the public record entirely.",
      whoQualifies: "Available under the Fresh Start program for taxpayers who owe $25,000 or less and set up a Direct Debit Installment Agreement. Also available if the lien was filed prematurely or not in accordance with IRS procedures.",
      keyBenefit: "Removes the lien from public records and credit reports",
    },
    {
      name: "Lien Subordination",
      description: "The IRS agrees to make their lien secondary to another creditor. This allows you to obtain financing (like a mortgage refinance) even with the lien in place.",
      whoQualifies: "Taxpayers who can demonstrate that subordination will make it easier to pay the tax debt -- for example, by refinancing at a lower rate.",
      keyBenefit: "Enables financing and refinancing while the lien exists",
    },
    {
      name: "Lien Discharge",
      description: "The IRS removes the lien from a specific piece of property, allowing you to sell it. The lien remains on your other property.",
      whoQualifies: "Typically granted when the sale proceeds will be used to pay part or all of the tax debt, or when the property has no equity above other liens.",
      keyBenefit: "Allows you to sell specific property even with an active lien",
    },
  ],

  howTheProcessWorks: [
    { step: 1, title: "Verify the Lien", description: "Obtain a copy of the Notice of Federal Tax Lien filing from your county recorder's office or the IRS. Verify the tax years, amounts, and that the lien was properly filed." },
    { step: 2, title: "Assess Your Options", description: "Based on what you owe, your assets, and your goals (sell property, improve credit, resolve debt), determine which approach makes the most sense -- withdrawal, subordination, discharge, or full resolution." },
    { step: 3, title: "Contact the IRS or a Professional", description: "Call the IRS at the number on your notice, or work with a tax professional. Explain your situation and the specific action you are requesting." },
    { step: 4, title: "Submit Required Documentation", description: "Depending on the action requested, you may need to submit financial statements, property appraisals, or proof of payment plan setup. The IRS has specific forms for each type of request." },
    { step: 5, title: "Lien Action Processed", description: "The IRS processes the release, withdrawal, subordination, or discharge and files the appropriate public notice. This updates your public record and credit reports." },
  ],

  whenToSeekHelp: {
    title: "When to Get Professional Guidance",
    paragraphs: [
      "Tax liens involve complex interactions between tax law, property law, and credit reporting. While some situations are straightforward (pay the debt, get a release), others benefit significantly from professional guidance.",
      "A tax professional can help you navigate the specific form requirements, ensure you are pursuing the right type of lien action, and communicate effectively with the IRS on your behalf.",
    ],
    bulletPoints: [
      "You need to sell or refinance property with a lien attached",
      "You want a lien withdrawal under the Fresh Start program",
      "Your lien involves business assets or accounts receivable",
      "You believe the lien was filed incorrectly or prematurely",
      "The amount owed is substantial and you need a comprehensive resolution plan",
      "You need to coordinate lien resolution with other tax issues (unfiled returns, other debts)",
    ],
  },

  reassurance: {
    title: "A Lien Is Not the End of the Road",
    message: "A federal tax lien feels like a heavy cloud over your financial life, but it is a manageable situation. Unlike a levy, the IRS is not taking your assets -- they are establishing a legal position. The IRS has programs specifically designed to help resolve liens, and millions of taxpayers have successfully addressed tax liens and moved forward.",
    bulletPoints: [
      "The Fresh Start program made lien resolution significantly easier",
      "Liens can be withdrawn entirely, not just released",
      "Paying through an installment plan can lead to lien withdrawal",
      "Liens expire when the underlying tax debt expires (generally 10 years)",
    ],
  },

  commonQuestions: [
    { question: "How does a tax lien affect my credit score?", answer: "While federal tax liens are no longer reported by the three major credit bureaus (as of 2018), they are still public records that lenders, landlords, and employers can find. The IRS can also report your tax debt directly to credit bureaus if you have a seriously delinquent tax debt (over $59,000 as of 2024)." },
    { question: "Can I sell my house with a federal tax lien?", answer: "Yes, but the lien must be addressed. Typically, the IRS lien is paid from the sale proceeds at closing. Alternatively, you can apply for a lien discharge for the specific property. Consult with a real estate attorney or tax professional before listing the property." },
    { question: "How long does a federal tax lien last?", answer: "A federal tax lien lasts until the underlying tax debt is paid in full, the statute of limitations on collection expires (generally 10 years from assessment), or the IRS accepts an offer in compromise. The IRS must release the lien within 30 days of full payment." },
    { question: "What is the difference between a lien release and a lien withdrawal?", answer: "A release removes the lien because the debt is satisfied. A withdrawal removes the public Notice of Federal Tax Lien as if it was never filed. A withdrawal is better for your credit because it erases the record entirely, but it is harder to obtain." },
    { question: "Can I get a mortgage with a federal tax lien?", answer: "It is difficult but not impossible. FHA loans may be available if you have a payment plan in place and IRS approval. You can also apply for lien subordination, which allows a mortgage lender to take priority over the IRS lien." },
  ],

  glossary: [
    { term: "Federal Tax Lien", definition: "A legal claim by the U.S. government on all of a taxpayer's property (current and future) as security for unpaid tax debt." },
    { term: "Notice of Federal Tax Lien (NFTL)", definition: "The public document the IRS files with the county recorder or secretary of state to put other creditors on notice of the government's lien." },
    { term: "Lien Release", definition: "The removal of a federal tax lien after the underlying tax debt is fully satisfied or becomes legally unenforceable." },
    { term: "Lien Withdrawal", definition: "The removal of the public Notice of Federal Tax Lien as if it was never filed. Available under certain conditions through the Fresh Start program." },
    { term: "Lien Subordination", definition: "An agreement where the IRS allows another creditor's interest to take priority over the federal tax lien, typically to allow refinancing." },
    { term: "Lien Discharge", definition: "The release of a federal tax lien from a specific piece of property, allowing it to be sold free of the lien." },
    { term: "Fresh Start Program", definition: "An IRS initiative that expanded access to installment agreements and made it easier to obtain lien withdrawals for taxpayers who owe $25,000 or less." },
  ],

  relatedTopics: [
    { title: "IRS Wage Garnishment", slug: "irs-wage-garnishment", description: "When the IRS takes money directly from your paycheck and how to stop it." },
    { title: "IRS Bank Levy", slug: "irs-bank-levy", description: "What happens when the IRS freezes and seizes funds from your bank account." },
    { title: "Offer in Compromise", slug: "offer-in-compromise", description: "How to potentially settle your entire tax debt for less than you owe." },
  ],

  disclaimer: "This content is for educational purposes only and does not constitute legal or tax advice. Tax situations vary and outcomes depend on individual circumstances. Consult a qualified tax professional for advice specific to your situation.",
}

export default topic
