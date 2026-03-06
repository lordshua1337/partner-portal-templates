import type { EducationalTopicConfig } from "@/data/educational-types"

const topic: EducationalTopicConfig = {
  slug: "irs-wage-garnishment",
  vertical: "tax-resolution",
  topic: "IRS Wage Garnishment",
  headline: "What to Do If the IRS Is Garnishing Your Wages",
  subheadline: "You have options. Here is how to understand what is happening and what you can do about it.",
  heroDescription: "An IRS wage garnishment can feel overwhelming, but it does not have to define your financial future. This guide explains exactly what is happening, why, and the legitimate options available to you.",
  primaryCTA: "Get Help Understanding Your Options",
  secondaryCTA: "See Resolution Options",
  ctaMicrocopy: "Free. No obligation. Takes 2 minutes.",

  whatThisMeans: {
    title: "What Is an IRS Wage Garnishment?",
    subtitle: "Understanding what is actually happening with your paycheck",
    paragraphs: [
      "An IRS wage garnishment -- officially called a wage levy -- is when the IRS instructs your employer to withhold a portion of your paycheck and send it directly to the IRS to pay your tax debt. Unlike most creditors, the IRS does not need a court order to garnish your wages.",
      "The amount taken depends on your filing status and the number of dependents you claim. The IRS uses Publication 1494 to calculate how much of your paycheck is exempt from levy. The exempt amount is based on the standard deduction plus allowable deductions divided by the number of pay periods.",
      "For many people, an IRS wage levy takes significantly more than a typical creditor garnishment. While most creditors are limited to 25% of disposable earnings, the IRS can take considerably more because their calculation method is different.",
    ],
    bulletPoints: [
      "The IRS can take a large percentage of each paycheck",
      "Your employer is legally required to comply",
      "The levy continues until your debt is paid, you reach an agreement, or the collection period expires",
      "Bonuses, commissions, and retirement income can also be levied",
    ],
    callout: "A wage levy is not permanent. There are several legitimate ways to reduce or stop it entirely. Understanding your options is the first step.",
  },

  whyItHappens: {
    title: "Why the IRS Is Garnishing Your Wages",
    paragraphs: [
      "The IRS does not garnish wages as a first step. Before a levy is issued, several things have already happened in a specific sequence.",
      "First, the IRS assessed your tax and sent you a bill (Notice CP14 or similar). When the bill went unpaid, they sent follow-up notices. Then they sent a Final Notice of Intent to Levy and Notice of Your Right to a Hearing (Letter LT11 or CP504). This final notice gave you 30 days to respond before enforcement action.",
      "If you did not respond to the final notice -- or if your response did not resolve the issue -- the IRS proceeded with the levy. This entire process typically takes several months from the first notice to actual wage garnishment.",
    ],
    bulletPoints: [
      "You have an assessed tax balance",
      "The IRS sent required notices (typically 3-4 letters)",
      "The 30-day window after the Final Notice passed without resolution",
      "The IRS issued a Form 668-W to your employer",
    ],
    callout: "If you never received these notices, you may have grounds to challenge the levy. The IRS is required to send notices to your last known address.",
  },

  whatHappensNext: {
    title: "What Happens If You Do Nothing",
    paragraphs: [
      "If you do not take action, the wage levy will continue with every paycheck until one of three things happens: your tax debt is fully paid, the statute of limitations on collection expires (generally 10 years from assessment), or you reach some form of agreement with the IRS.",
      "While the levy is active, penalties and interest continue to accrue on your remaining balance. The failure-to-pay penalty is 0.5% per month of the unpaid amount, and interest compounds daily at the federal short-term rate plus 3%.",
      "Beyond the financial impact, an active levy can affect your ability to get loans, rent apartments, or pass employment background checks in some industries.",
    ],
  },

  resolutionOptions: [
    {
      name: "Installment Agreement",
      description: "Set up a monthly payment plan with the IRS. Once an agreement is in place, the levy is typically released.",
      whoQualifies: "Generally available to anyone who owes less than $50,000 and can pay within 6 years. Higher amounts may require financial disclosure.",
      keyBenefit: "Stops the levy and gives you predictable monthly payments",
    },
    {
      name: "Offer in Compromise",
      description: "Settle your tax debt for less than the full amount owed. The IRS accepts these when they determine you cannot pay the full amount.",
      whoQualifies: "Must demonstrate inability to pay the full amount through income, expenses, assets, and future earning potential analysis.",
      keyBenefit: "Can significantly reduce your total tax debt",
    },
    {
      name: "Currently Not Collectible",
      description: "The IRS temporarily pauses all collection activity, including wage levies, when paying would create financial hardship.",
      whoQualifies: "Available when your monthly income barely covers basic living expenses and you have limited assets.",
      keyBenefit: "Immediately stops the levy with no required payments",
    },
    {
      name: "Collection Due Process Hearing",
      description: "Request a formal hearing to challenge the levy or propose alternative arrangements. Must be filed within 30 days of the Final Notice.",
      whoQualifies: "Anyone who received a Final Notice of Intent to Levy within the last 30 days.",
      keyBenefit: "Pauses enforcement while your case is reviewed by an independent officer",
    },
  ],

  howTheProcessWorks: [
    { step: 1, title: "Review Your Notices", description: "Gather all IRS correspondence. The notices contain your balance, the tax years involved, and important deadlines. This is your starting point." },
    { step: 2, title: "Understand Your Financial Picture", description: "Calculate your total income, essential expenses, and assets. The IRS will use this information to determine which resolution options you qualify for." },
    { step: 3, title: "Choose a Resolution Path", description: "Based on your financial situation, determine whether an installment agreement, offer in compromise, or hardship status is the best fit." },
    { step: 4, title: "Submit Your Request", description: "File the appropriate forms with the IRS. Once received, the IRS typically puts a hold on enforcement while they review your request." },
    { step: 5, title: "Levy Released", description: "Once your agreement is accepted, the IRS notifies your employer to stop the wage garnishment. This usually happens within 1-2 pay periods." },
  ],

  whenToSeekHelp: {
    title: "When Professional Help Makes a Difference",
    paragraphs: [
      "While you can negotiate with the IRS on your own, there are situations where working with a tax professional -- an enrolled agent, CPA, or tax attorney -- can significantly improve your outcome.",
      "A qualified professional understands the IRS collection process, knows which resolution options give you the best result, and can communicate with the IRS on your behalf. They can also identify issues you might miss, like incorrect penalty calculations or expired statutes of limitations.",
    ],
    bulletPoints: [
      "You owe more than $10,000 in combined tax, penalties, and interest",
      "You have unfiled returns for multiple years",
      "You are self-employed or have complex income sources",
      "You have received a Final Notice and the 30-day deadline is approaching",
      "You have been denied an installment agreement or offer in compromise before",
      "You are unsure which resolution option is right for your situation",
    ],
    callout: "The IRS offers a free Taxpayer Advocate Service for people who are experiencing significant financial hardship. You can reach them at 1-877-777-4778.",
  },

  reassurance: {
    title: "This Situation Is More Common Than You Think",
    message: "Millions of Americans deal with IRS tax debt every year. You are not alone, and you are not without options. The IRS has programs specifically designed to help people in your situation find a path forward. Taking the step to understand your options is already progress.",
    bulletPoints: [
      "Over 20 million taxpayers owe back taxes to the IRS",
      "The IRS accepted over 17,000 Offers in Compromise last year",
      "Payment plans are the most common resolution -- and they work",
      "Taking action now stops penalties and interest from growing further",
    ],
  },

  commonQuestions: [
    { question: "How much of my paycheck can the IRS take?", answer: "The amount depends on your filing status and number of dependents. For a single filer with no dependents, the IRS exempts roughly $1,050 per month (based on 2024 figures). Everything above that can be levied. The exact exempt amount changes annually." },
    { question: "Can the IRS garnish my wages without warning?", answer: "No. The IRS is legally required to send you a Final Notice of Intent to Levy at least 30 days before starting a wage garnishment. However, they send it to your last known address, so if you have moved, you may not have received it." },
    { question: "How do I stop an IRS wage garnishment?", answer: "The fastest way is to contact the IRS and set up a payment arrangement. Options include installment agreements, offers in compromise, or requesting currently not collectible status. Once an agreement is in place, the levy is typically released within 1-2 pay periods." },
    { question: "Will my employer know about my tax debt?", answer: "Your employer will know that the IRS has issued a levy on your wages, but they will not know the details of your tax situation -- only the amount to withhold. Employers are legally prohibited from firing you solely because of a wage garnishment." },
    { question: "Can I negotiate the amount being garnished?", answer: "Yes. If the garnishment creates a financial hardship, you can contact the IRS to request a modification. You may also qualify for Currently Not Collectible status, which pauses all collection activity." },
  ],

  glossary: [
    { term: "Wage Levy", definition: "An IRS enforcement action that requires your employer to withhold a portion of your paycheck and send it to the IRS to pay your tax debt." },
    { term: "Form 668-W", definition: "The official IRS form sent to your employer that initiates the wage garnishment. It includes the calculation for your exempt amount." },
    { term: "Installment Agreement", definition: "A formal payment plan with the IRS that allows you to pay your tax debt in monthly installments over time." },
    { term: "Offer in Compromise", definition: "A program that allows you to settle your tax debt for less than the full amount owed if the IRS determines you cannot pay in full." },
    { term: "Currently Not Collectible", definition: "A status the IRS assigns when they determine that paying your tax debt would create a financial hardship. All collection activity pauses." },
    { term: "Collection Statute Expiration Date (CSED)", definition: "The IRS generally has 10 years from the date of assessment to collect a tax debt. After this date, the debt expires." },
    { term: "Publication 1494", definition: "The IRS table used to calculate how much of your income is exempt from a wage levy, based on filing status and dependents." },
  ],

  relatedTopics: [
    { title: "IRS Bank Levy", slug: "irs-bank-levy", description: "What happens when the IRS freezes and seizes funds from your bank account." },
    { title: "Federal Tax Lien", slug: "tax-lien", description: "How the IRS places a legal claim on your property and what it means for your finances." },
    { title: "Offer in Compromise", slug: "offer-in-compromise", description: "A detailed guide to settling your tax debt for less than you owe." },
  ],

  disclaimer: "This content is for educational purposes only and does not constitute legal or tax advice. Tax situations vary and outcomes depend on individual circumstances. Consult a qualified tax professional for advice specific to your situation. This guide reflects general IRS procedures and programs available as of 2024.",
}

export default topic
