import type { EducationalTopicConfig } from "@/data/educational-types"

const topic: EducationalTopicConfig = {
  slug: "unfiled-tax-returns",
  vertical: "tax-resolution",
  topic: "Unfiled Tax Returns",
  headline: "What Happens When You Have Unfiled Tax Returns -- and How to Fix It",
  subheadline: "Years of unfiled returns can feel impossible to face, but the longer you wait, the worse the consequences become. Here is what the IRS does about unfiled returns and what your options are.",
  heroDescription: "Having unfiled tax returns is more common than most people realize -- and the situation is not hopeless. Whether you are one year behind or ten, there are formal paths to get back into compliance. Understanding what the IRS does when returns go unfiled is the first step toward resolving it.",
  primaryCTA: "Get Help With Unfiled Returns",
  secondaryCTA: "See Your Resolution Options",
  ctaMicrocopy: "Free. No obligation. Takes 2 minutes.",

  whatThisMeans: {
    title: "What It Means to Have Unfiled Tax Returns",
    subtitle: "Understanding the difference between not filing and not paying",
    paragraphs: [
      "An unfiled tax return is any required federal or state tax return that was not filed by its due date and has not been filed since. This is different from filing a return and not paying the balance due -- that is a separate issue with its own consequences.",
      "Not filing is generally treated more seriously than not paying. The failure-to-file penalty is 5% of the unpaid tax per month, up to 25% of the balance -- ten times larger than the failure-to-pay penalty. If you had a refund coming, you generally have three years from the original due date to file and claim it. After that window closes, the refund is forfeited to the government.",
      "The IRS generally requires that the last six years of returns be filed to consider you in current compliance. This is sometimes called the six-year rule, and it is the standard the IRS uses when evaluating installment agreements, Offers in Compromise, and other resolution programs. Returns older than six years may still be required in some situations.",
    ],
    bulletPoints: [
      "The IRS has no statute of limitations on assessing tax for years where no return was filed",
      "Failure-to-file penalties accrue immediately and top out at 25% of the unpaid balance",
      "Refunds for years more than 3 years past due are permanently forfeited",
      "You cannot enter most IRS resolution programs until you are current on required filings",
      "The IRS can file a return on your behalf -- and it will not favor you",
    ],
    callout: "If you had withholding or estimated payments for years you did not file, those payments are sitting in the IRS's system waiting to be applied. Filing those returns may reveal you are owed money rather than owing it.",
  },

  whyItHappens: {
    title: "Why People Fall Behind on Filing",
    paragraphs: [
      "People stop filing for many reasons, and few of them are about avoidance. More often, it starts with one difficult year -- a year with complex income, a financial crisis, a divorce, the death of a family member, or a period of mental health struggles. That year gets pushed off, and then the next year feels impossible to file without also filing the previous one. The backlog grows, and the problem feels increasingly insurmountable.",
      "For self-employed people, a year of unexpectedly high income without adequate withholding can result in a tax bill that feels impossible to face. Avoidance feels easier in the moment -- until the IRS starts sending notices.",
      "Whatever the reason, the path back to compliance exists. The IRS deals with unfiled returns regularly, and there are established programs and processes for getting back into the system. The first step is almost always just deciding to address it.",
    ],
    bulletPoints: [
      "A difficult financial year created a balance that felt impossible to pay",
      "Complex self-employment income made filing feel overwhelming",
      "Life circumstances -- illness, loss, divorce -- interrupted normal routines",
      "One missed year made subsequent years feel impossible to file without addressing the prior year",
      "Fear of what the IRS might do kept the problem from being addressed",
    ],
    callout: "The IRS is more focused on getting people back into compliance than on punishing them for past failures. Voluntary filing is almost always treated more favorably than waiting for the IRS to act first.",
  },

  whatHappensNext: {
    title: "What the IRS Does When You Do Not File",
    paragraphs: [
      "The IRS receives information returns from employers, banks, and other payers -- W-2s, 1099s, and similar documents -- and cross-references them against filed returns. When no return appears for a year with income records, the IRS may file a Substitute for Return (SFR) on your behalf.",
      "A Substitute for Return is calculated using only the information the IRS has -- which typically means it includes all income reported to the IRS but none of the deductions, credits, exemptions, or adjustments you would have claimed yourself. The result is almost always a higher tax liability than you would have owed with your own accurately filed return.",
      "Once the IRS issues an SFR and sends you a notice (typically a CP2000 or a Notice of Deficiency), you have limited time to respond. If you do not, the IRS will assess the SFR amount as your tax liability and begin collection -- wage garnishments, bank levies, and federal tax liens -- even though the amount is likely overstated.",
    ],
  },

  resolutionOptions: [
    {
      name: "Voluntary Filing",
      description: "File all required returns on your own or with a tax professional before the IRS takes formal action. This is the cleanest path: you control the numbers, you claim all deductions and credits you are entitled to, and you demonstrate willingness to comply voluntarily. The IRS treats voluntary filers more favorably than those who wait for enforcement.",
      whoQualifies: "Any taxpayer with unfiled returns. You need records (income statements, receipts, prior returns) for each year. A tax professional can help reconstruct records when originals are unavailable.",
      keyBenefit: "You control the return and can claim all deductions, credits, and exemptions -- resulting in a significantly lower liability than an IRS-filed Substitute for Return",
    },
    {
      name: "IRS Substitute for Return (SFR)",
      description: "If you do not file, the IRS may file a return on your behalf using only the third-party income information they have -- W-2s, 1099s, etc. No deductions or credits are included. You can file your own return to replace an SFR, and the IRS will recalculate the liability based on your actual return.",
      whoQualifies: "This is not something you choose -- it happens when the IRS acts. However, once an SFR is filed, you have the right to file your own return to replace it and reduce the assessed balance.",
      keyBenefit: "Filing your own return after an SFR often dramatically reduces the assessed liability, since the SFR includes no deductions",
    },
    {
      name: "Streamlined Filing Compliance Procedures",
      description: "An IRS program for taxpayers who have unreported foreign income or foreign accounts. Allows qualifying taxpayers to file amended or delinquent returns and pay a reduced miscellaneous offshore penalty rather than the full FBAR penalties, which can be severe.",
      whoQualifies: "U.S. citizens and permanent residents with unreported foreign financial assets or income who can certify their noncompliance was non-willful. There are domestic and foreign versions of the streamlined procedure.",
      keyBenefit: "Significantly reduced penalties for offshore reporting failures compared to standard enforcement paths",
    },
    {
      name: "Voluntary Disclosure Program",
      description: "A formal IRS program allowing taxpayers to come forward and disclose willful tax noncompliance before the IRS discovers it. Protects qualifying taxpayers from criminal prosecution in exchange for full cooperation and payment of tax, interest, and reduced penalties.",
      whoQualifies: "Taxpayers with willful noncompliance -- intentional failure to report income or file returns -- who have not yet been contacted by the IRS regarding the relevant years. Requires legal counsel due to the complexity and potential criminal exposure.",
      keyBenefit: "Protection from criminal prosecution for taxpayers who have knowingly failed to comply and want to come into the system before being discovered",
    },
  ],

  howTheProcessWorks: [
    { step: 1, title: "Gather Your Records", description: "Pull together income records for each unfiled year: W-2s, 1099s, bank statements, and any business records. If you cannot find originals, you can request IRS wage and income transcripts for free at irs.gov/individuals/get-transcript -- these show what the IRS already has on file for each year." },
    { step: 2, title: "Prepare Returns Oldest to Newest", description: "Work chronologically, starting with the earliest unfiled year. Information from one year often carries forward to the next (carryover losses, depreciation, etc.), so the order matters. The IRS generally requires the last six years, but go back further if the IRS has already contacted you about specific years." },
    { step: 3, title: "File All Required Returns", description: "Submit the returns by mail to the IRS service center. Do not e-file delinquent returns -- the IRS's e-file system generally does not accept prior-year returns. Include payment for any balances due, or file without payment if you cannot pay in full (filing without paying is much better than not filing at all)." },
    { step: 4, title: "Wait for IRS Processing", description: "Paper returns for prior years can take 6 to 12 months to process, sometimes longer. The IRS will send notices once each return is processed showing the assessed balance, any penalties and interest, and what you owe." },
    { step: 5, title: "Address the Resulting Balance", description: "Once all returns are filed and processed, your total balance will be clearer. At that point, you can pursue the appropriate resolution path: an installment agreement, an Offer in Compromise, penalty abatement, or currently not collectible status." },
  ],

  whenToSeekHelp: {
    title: "When to Work With a Tax Professional on Unfiled Returns",
    paragraphs: [
      "If you are only one or two years behind, have straightforward W-2 income, and have your records, you may be able to file on your own. For most people with multiple years of unfiled returns, a qualified enrolled agent, CPA, or tax attorney makes a meaningful difference.",
      "A professional can reconstruct missing records, navigate complex income situations, identify deductions and credits across multiple years, and coordinate the filing with the IRS to minimize penalties and prevent enforcement action. They can also communicate directly with the IRS on your behalf and handle the resolution plan once all returns are filed.",
    ],
    bulletPoints: [
      "You have three or more years of unfiled returns",
      "You have self-employment income, business expenses, or complex financial situations",
      "The IRS has already contacted you about specific unfiled years or filed an SFR",
      "You are missing records and need help reconstructing them",
      "You have foreign income or foreign financial accounts",
      "You are worried about potential criminal exposure for willful noncompliance",
    ],
    callout: "The IRS Criminal Investigation division focuses on willful noncompliance and fraud. For most people who simply fell behind due to circumstances, voluntary filing carries no criminal risk. A tax professional can assess your specific situation.",
  },

  reassurance: {
    title: "Getting Back Into Compliance Is Possible -- No Matter How Long It Has Been",
    message: "The IRS processes unfiled returns and delinquent filers every day. You are not an outlier, and the IRS is not waiting to make an example of you. The system is built to bring people back into compliance, not to permanently punish them for falling behind. Taking action -- any action -- is better than waiting. Even filing without being able to pay stops penalties from accruing and opens the door to a resolution you can live with.",
    bulletPoints: [
      "Filing voluntarily is always treated more favorably than waiting for IRS enforcement",
      "IRS wage and income transcripts are free and show what records they already have",
      "Filing for older years may reveal refunds you are still entitled to claim",
      "Once returns are filed, standard resolution options -- payment plans, Offers in Compromise -- become available",
    ],
  },

  commonQuestions: [
    { question: "How many years of unfiled returns does the IRS require?", answer: "The IRS generally requires the last six years of unfiled returns to consider you in current compliance. This is an administrative policy, not a statutory requirement, and is the standard applied when evaluating installment agreements, Offers in Compromise, and other resolution options. Returns older than six years may also be required if the IRS has specifically requested them or has already assessed tax for those years." },
    { question: "What is a Substitute for Return and how does it affect me?", answer: "A Substitute for Return (SFR) is a return the IRS files on your behalf when you do not file your own. It uses only the income information the IRS received from third parties -- your W-2s and 1099s -- but includes none of your deductions, credits, filing status adjustments, or exemptions. This almost always results in a higher assessed tax than you would owe if you filed your own return. You can file your own return to replace an SFR and significantly reduce the assessed balance." },
    { question: "What if I cannot pay the taxes I owe for the years I did not file?", answer: "File the returns anyway. Filing without paying is always better than not filing at all. The failure-to-file penalty (5% per month, up to 25%) is ten times more costly per month than the failure-to-pay penalty (0.5% per month). Once your returns are filed, you can pursue an installment agreement, Offer in Compromise, or other resolution for the balance. The IRS requires current filing status before any resolution option is available." },
    { question: "Can I still get a refund for years I did not file?", answer: "You can claim a refund for a prior year only if you file within three years of the original due date of that return. After three years, the refund is permanently forfeited -- the IRS keeps it. For example, to claim a refund on your 2021 return (due April 2022), you would need to file by April 2025. If you had withholding you never claimed, filing quickly is important." },
    { question: "Will the IRS come after me if I have not filed in many years?", answer: "The IRS prioritizes enforcement based on the amount of potential tax owed and the available income information. If you had significant income reported to the IRS via W-2s and 1099s, the IRS is more likely to contact you. If they have already sent notices about unfiled years, the timeline for enforcement shortens. Regardless, voluntary filing before IRS contact always results in more favorable treatment than waiting." },
  ],

  glossary: [
    { term: "Unfiled Tax Return", definition: "A required federal or state tax return that was not filed by its due date and has not been filed since. Different from filing a return and not paying the balance due." },
    { term: "Substitute for Return (SFR)", definition: "A return the IRS files on a taxpayer's behalf when no return has been received. Calculated using only third-party income data -- no deductions or credits are included." },
    { term: "Six-Year Rule", definition: "The IRS's administrative policy requiring that the last six years of unfiled tax returns be filed before a taxpayer is considered in current compliance for purposes of installment agreements and other resolution programs." },
    { term: "IRS Wage and Income Transcript", definition: "A free IRS record showing all income reported to the IRS for a given tax year -- W-2s, 1099s, and other third-party information statements. Available at irs.gov and useful for reconstructing records for unfiled years." },
    { term: "Failure-to-File Penalty", definition: "An IRS penalty of 5% of unpaid tax per month (or part of a month) that a return is late, up to 25% of the unpaid tax. The largest common IRS penalty." },
    { term: "Streamlined Filing Compliance Procedures", definition: "An IRS program for taxpayers with unreported foreign income or financial accounts who can certify their noncompliance was non-willful. Allows filing with reduced penalties compared to standard enforcement." },
    { term: "Voluntary Disclosure Program", definition: "A formal IRS program allowing taxpayers who willfully failed to comply to come forward before IRS discovery, in exchange for cooperation, payment, and protection from criminal prosecution." },
    { term: "Notice of Deficiency", definition: "An official IRS notice, sometimes called a 90-day letter, informing you that the IRS intends to assess additional tax. Provides 90 days to petition the Tax Court before the assessment becomes final." },
  ],

  relatedTopics: [
    { title: "IRS Penalty Abatement", slug: "penalty-abatement", description: "How to request removal of penalties that have built up from late filing and late payment." },
    { title: "IRS Wage Garnishment", slug: "irs-wage-garnishment", description: "What happens when the IRS begins taking money directly from your paycheck." },
    { title: "Offer in Compromise", slug: "offer-in-compromise", description: "How to settle your total tax debt for less than the full amount once your returns are filed." },
  ],

  disclaimer: "This content is for educational purposes only and does not constitute legal or tax advice. Tax situations vary and outcomes depend on individual circumstances. Consult a qualified tax professional for advice specific to your situation. This guide reflects general IRS procedures and programs available as of 2024.",
}

export default topic
