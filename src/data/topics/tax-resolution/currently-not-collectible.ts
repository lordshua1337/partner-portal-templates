import type { EducationalTopicConfig } from "@/data/educational-types"

const topic: EducationalTopicConfig = {
  slug: "currently-not-collectible",
  vertical: "tax-resolution",
  topic: "Currently Not Collectible Status",
  headline: "When You Cannot Pay the IRS Anything Right Now",
  subheadline: "Currently Not Collectible status pauses all IRS collection activity when you genuinely cannot afford to pay. It is a recognized IRS program, not a workaround.",
  heroDescription: "Currently Not Collectible (CNC) status is an official IRS designation that temporarily halts all collection action when you can demonstrate that paying your tax debt would prevent you from covering basic living expenses. The debt does not go away -- but the IRS stops pursuing it while you are in hardship. This guide explains how CNC works, what it means for your debt, and when it makes sense.",
  primaryCTA: "Find Out If You Qualify for CNC",
  secondaryCTA: "Understand How CNC Status Works",
  ctaMicrocopy: "Free. No obligation. Takes 2 minutes.",

  whatThisMeans: {
    title: "What Is Currently Not Collectible Status?",
    subtitle: "Understanding the IRS hardship pause and what it actually does",
    paragraphs: [
      "Currently Not Collectible status is an IRS determination that you cannot pay your tax debt without being unable to meet basic living expenses. When the IRS places an account in CNC status, they suspend all active collection actions: no levies on bank accounts, no wage garnishments, no seizure of assets. The IRS essentially agrees to leave you alone while you cannot afford to pay.",
      "CNC status is not debt forgiveness. The balance you owe remains on the books. Penalties and interest continue to accrue while you are in CNC status. The IRS will periodically review your income and financial situation -- typically by reviewing your tax returns each year -- and can reactivate collection if your financial situation improves.",
      "Despite its limitations, CNC can be genuinely valuable. It stops enforcement immediately, and for some taxpayers, the Collection Statute Expiration Date (CSED) -- the 10-year window the IRS has to collect -- may eventually expire while the account is in CNC. If the CSED passes, the IRS can no longer legally collect that debt.",
    ],
    bulletPoints: [
      "All IRS collection actions stop when CNC status is granted",
      "The underlying tax debt remains and continues to accrue interest and penalties",
      "The 10-year Collection Statute Expiration Date (CSED) continues to run during CNC",
      "The IRS reviews your income annually through your tax returns",
      "CNC can be reversed if your financial situation improves",
      "Existing liens filed before CNC status remain in place",
    ],
    callout: "CNC status stops the IRS from taking your money or property while you are in hardship. The debt does not disappear, but enforcement pauses -- giving you breathing room to stabilize your finances.",
  },

  whyItHappens: {
    title: "Who Ends Up in This Situation",
    paragraphs: [
      "CNC status is not something most taxpayers plan for. It typically comes into play when someone has accumulated a tax debt during a period of higher income and then experiences a significant financial reversal -- job loss, medical crisis, business failure, or family emergency -- that makes repayment genuinely impossible.",
      "The IRS recognizes that aggressive collection against someone with no ability to pay often produces nothing, while causing severe harm. Placing an account in CNC status is the IRS's practical acknowledgment that collection would be pointless and inequitable at this time.",
      "Some taxpayers are already dealing with IRS collection notices -- levy notices, bank account freezes, garnishment warnings -- before they realize CNC status is an option. You can request CNC status at any point, including after enforcement has begun.",
    ],
    bulletPoints: [
      "Monthly income barely covers or falls below IRS-allowed basic living expenses",
      "A medical condition, disability, or family crisis has severely reduced your income",
      "A business closed and left behind a tax debt that cannot be repaid",
      "Fixed income (Social Security, retirement) cannot support both living expenses and a tax payment",
      "Assets are limited, exempt, or have no equity to tap",
    ],
  },

  whatHappensNext: {
    title: "What CNC Status Means Day to Day",
    paragraphs: [
      "Once the IRS places your account in CNC status, you will receive a CP-71 notice annually showing your current balance (which continues to grow with interest and penalties). You are still required to file your tax returns on time each year -- failure to file can prompt the IRS to remove CNC status and resume collection.",
      "The IRS will review your situation periodically, most often by checking whether your income reported on subsequent tax returns has increased. If it has increased enough to suggest you could now afford a payment plan, the IRS may contact you to establish an installment agreement.",
      "While in CNC status, you should be evaluating your long-term options. If the CSED on your debt is approaching, CNC may be the most practical path forward. If your finances are unlikely to improve, an Offer in Compromise may eliminate the debt entirely. CNC status gives you time to make this determination without the pressure of enforcement.",
    ],
    callout: "File every required tax return on time while in CNC status. New tax debt or unfiled returns can cause the IRS to remove your CNC status and resume collection immediately.",
  },

  resolutionOptions: [
    {
      name: "CNC Hardship Status",
      description: "The primary program: the IRS formally places your account in uncollectible status after reviewing your income and allowable expenses using IRS Collection Financial Standards. All enforcement stops.",
      whoQualifies: "Taxpayers whose gross monthly income does not exceed IRS-allowed necessary living expenses (housing, utilities, food, medical, transportation) by enough to make any meaningful payment.",
      keyBenefit: "Immediate halt to all collection actions including levies, garnishments, and seizures",
    },
    {
      name: "Temporary CNC",
      description: "Short-term relief when a taxpayer's financial hardship is expected to be temporary. The IRS agrees to pause collection for a defined period and revisits the account after that time.",
      whoQualifies: "Taxpayers experiencing a temporary reduction in income due to job loss, medical recovery, or other short-term events with a clear expectation of income resuming.",
      keyBenefit: "Buys time to recover financially before establishing a long-term resolution",
    },
    {
      name: "Expiration of Collection Statute (CSED)",
      description: "For taxpayers whose debt is unlikely to be resolved through payment, waiting for the 10-year collection statute to expire while in CNC status eliminates the obligation entirely without payment or compromise.",
      whoQualifies: "Taxpayers on fixed income or with permanent disabilities whose financial situation is unlikely to change, and whose CSED has several years or fewer remaining.",
      keyBenefit: "The debt legally expires without compromise, bankruptcy, or payment",
    },
    {
      name: "Transition to Other Resolution",
      description: "CNC is often a bridge -- a way to stop enforcement while you pursue a longer-term resolution like an Offer in Compromise (if you qualify) or an installment agreement when finances stabilize.",
      whoQualifies: "Anyone currently in CNC who anticipates a change in financial situation or wants to pursue active resolution while protected from collection.",
      keyBenefit: "Preserves your options and prevents enforcement while you pursue the right permanent solution",
    },
  ],

  howTheProcessWorks: [
    { step: 1, title: "Request Financial Review", description: "Contact the IRS by phone or through a representative and explain that you are experiencing financial hardship and cannot make payments. The IRS will ask about your income, expenses, and assets to evaluate whether CNC is appropriate." },
    { step: 2, title: "Complete a Collection Information Statement", description: "The IRS will ask you to complete Form 433-A (individuals) or Form 433-F (simplified version) detailing your monthly income, expenses, bank accounts, and assets. This is the financial snapshot the IRS uses to make its determination." },
    { step: 3, title: "IRS Evaluates Your Financial Picture", description: "The IRS compares your income to IRS Collection Financial Standards -- national and local allowances for housing, food, transportation, and other expenses. If your allowable expenses consume all or most of your income, CNC is likely to be granted." },
    { step: 4, title: "CNC Status Granted", description: "If approved, the IRS updates your account to uncollectible status and suspends enforcement. You will receive written confirmation. Any active levies or garnishments should stop within a few business days of the determination." },
    { step: 5, title: "Annual Monitoring and Long-Term Planning", description: "File your tax returns every year on time. Evaluate your long-term options -- if the CSED is approaching, CNC may be your path to resolution. If an Offer in Compromise becomes viable as circumstances change, pursue it while still protected by CNC." },
  ],

  whenToSeekHelp: {
    title: "When to Involve a Tax Professional",
    paragraphs: [
      "Requesting CNC status on your own is possible. If your financial situation is straightforward and the numbers clearly show hardship, the IRS will often grant it after a phone call and financial review. But the process is more nuanced than it appears.",
      "The IRS uses specific allowable expense standards that may not reflect your actual costs. A tax professional who understands how the IRS calculates allowable expenses can help ensure your financial picture is presented accurately -- neither overstating nor understating your situation. They can also help you avoid the common mistake of volunteering information that could complicate your case.",
    ],
    bulletPoints: [
      "You have significant assets (home equity, retirement accounts, business assets) that the IRS may count against you",
      "You are already facing an active levy or garnishment",
      "The IRS has rejected a previous CNC request",
      "You owe more than $25,000",
      "You have unfiled tax returns that must be addressed before CNC can be granted",
      "You want to evaluate whether an Offer in Compromise is a better long-term option",
      "You are unsure how the IRS will treat specific expenses or income sources",
    ],
    callout: "The IRS will not grant CNC status if you have unfiled tax returns. Getting compliant on filing -- even without paying -- is a prerequisite. A tax professional can help you get compliant quickly.",
  },

  reassurance: {
    title: "Being Unable to Pay Is Not a Character Flaw",
    message: "The IRS collects from tens of millions of taxpayers, and not everyone can pay at the same time. Currently Not Collectible status exists because the IRS understands that aggressive enforcement against someone with nothing to give produces nothing -- and causes real harm. If you genuinely cannot pay, this program is there for you. Using it is legal, legitimate, and recognized by the IRS as the right outcome for your situation.",
    bulletPoints: [
      "CNC status is a formal IRS program used by hundreds of thousands of taxpayers",
      "Requesting CNC is not an admission of wrongdoing",
      "Enforcement stops immediately upon approval",
      "The 10-year collection clock continues to run, and some debts expire entirely",
    ],
  },

  commonQuestions: [
    { question: "Does Currently Not Collectible mean my debt is forgiven?", answer: "No. CNC status pauses collection but does not eliminate the debt. Interest and penalties continue to accrue on the balance during the entire time you are in CNC. The debt is only eliminated if the 10-year Collection Statute Expiration Date passes, if you reach a resolution through an Offer in Compromise, or in some cases through bankruptcy." },
    { question: "How long can I stay in Currently Not Collectible status?", answer: "There is no fixed limit. You remain in CNC as long as your financial situation demonstrates an inability to pay. The IRS reviews your income annually through your tax returns. If your income increases enough to support payments, the IRS may contact you to establish an installment agreement. Some taxpayers remain in CNC for years." },
    { question: "Will the IRS file a tax lien while my account is in CNC?", answer: "Possibly. The IRS may file a Notice of Federal Tax Lien if the balance exceeds $10,000, even when the account is in CNC. A lien does not seize any assets -- it establishes the IRS's legal claim against your property. The lien does not prevent you from maintaining CNC status." },
    { question: "Do I still have to file tax returns while in CNC?", answer: "Yes. Filing requirements do not change while you are in CNC status. You must file all required tax returns by their due dates. If you fail to file, the IRS may remove your CNC status and resume collection. Any new tax debt you incur after CNC is granted is a separate balance not covered by your CNC status." },
    { question: "What is the Collection Statute Expiration Date and why does it matter?", answer: "The CSED is the 10-year period the IRS has to collect a tax debt, starting from the date the tax was assessed. After the CSED passes, the IRS can no longer legally collect that debt. For taxpayers in permanent hardship situations, CNC can be a way to ride out the CSED -- but certain events (filing for bankruptcy, submitting an Offer in Compromise, signing certain agreements) can pause or extend the clock, so this strategy requires careful planning." },
  ],

  glossary: [
    { term: "Currently Not Collectible (CNC)", definition: "An IRS account status that suspends all collection actions when a taxpayer demonstrates they cannot pay their tax debt without being unable to meet basic living expenses." },
    { term: "Collection Statute Expiration Date (CSED)", definition: "The date 10 years after a tax is assessed, after which the IRS can no longer legally collect the debt. The CSED continues to run during CNC status." },
    { term: "Form 433-A", definition: "Collection Information Statement for Wage Earners and Self-Employed Individuals. Used by the IRS to evaluate your income, expenses, and assets when considering CNC or other collection alternatives." },
    { term: "Form 433-F", definition: "A simplified version of the Collection Information Statement used for accounts under certain thresholds. The IRS often accepts this form in place of the more detailed 433-A." },
    { term: "IRS Collection Financial Standards", definition: "Standardized tables the IRS uses to determine allowable living expenses. These national and local standards set limits on what the IRS recognizes for food, housing, utilities, transportation, and healthcare." },
    { term: "CP-71 Notice", definition: "An annual IRS notice sent to taxpayers in CNC status showing the current outstanding balance, including accrued interest and penalties." },
    { term: "Notice of Federal Tax Lien", definition: "A public document the IRS may file establishing its legal claim against your property. A lien can be filed even when your account is in CNC -- it is separate from active collection (levy or garnishment)." },
    { term: "Hardship Levy Release", definition: "The IRS can release a levy -- including during the process of requesting CNC -- if the levy is causing economic hardship that prevents you from meeting basic living expenses." },
  ],

  relatedTopics: [
    { title: "Offer in Compromise", slug: "offer-in-compromise", description: "If your financial situation qualifies, settling your tax debt for less than the full amount may eliminate it entirely rather than just pausing collection." },
    { title: "Installment Agreement", slug: "installment-agreement", description: "When your finances stabilize, a monthly payment plan may be the right transition out of CNC status." },
    { title: "IRS Wage Garnishment", slug: "irs-wage-garnishment", description: "If the IRS has already begun garnishing wages, CNC status can stop it -- understand how garnishments work and how to respond." },
  ],

  disclaimer: "This content is for educational purposes only and does not constitute legal or tax advice. Tax situations vary and outcomes depend on individual circumstances. Consult a qualified tax professional for advice specific to your situation.",
}

export default topic
