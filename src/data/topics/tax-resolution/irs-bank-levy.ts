import type { EducationalTopicConfig } from "@/data/educational-types"

const topic: EducationalTopicConfig = {
  slug: "irs-bank-levy",
  vertical: "tax-resolution",
  topic: "IRS Bank Levy",
  headline: "What to Do When the IRS Freezes Your Bank Account",
  subheadline: "A bank levy is alarming, but you have a 21-day window to act. Here is what you need to know.",
  heroDescription: "When the IRS issues a bank levy, your bank freezes the funds in your account for 21 days before sending them to the IRS. This guide explains the process and the steps you can take during that critical window.",
  primaryCTA: "Understand Your Options Now",
  secondaryCTA: "See How to Stop a Bank Levy",
  ctaMicrocopy: "Free. No obligation. Takes 2 minutes.",

  whatThisMeans: {
    title: "What Is an IRS Bank Levy?",
    subtitle: "Understanding what happened to your bank account",
    paragraphs: [
      "An IRS bank levy is a legal seizure of funds in your bank account to satisfy unpaid tax debt. Unlike a wage garnishment that takes money from each paycheck over time, a bank levy seizes the funds that are in your account at the moment the levy is issued.",
      "When the IRS sends a levy notice to your bank, the bank is required by law to freeze the funds up to the amount you owe. There is then a 21-day holding period before the bank sends the money to the IRS. This 21-day window is critical -- it is your opportunity to take action.",
      "A bank levy is a one-time seizure of what is in the account at that moment. However, the IRS can issue additional levies on future deposits if the debt remains unresolved.",
    ],
    bulletPoints: [
      "Your bank freezes funds immediately upon receiving the levy notice",
      "You have 21 days before the bank sends the money to the IRS",
      "The levy applies to all accounts at that bank -- checking, savings, CDs",
      "Joint accounts can be levied if your name is on the account",
      "The IRS can issue additional levies if the first one does not cover the full debt",
    ],
    callout: "The 21-day holding period exists specifically to give you time to resolve the situation. Do not wait -- contact the IRS or a tax professional immediately.",
  },

  whyItHappens: {
    title: "Why the IRS Issued a Bank Levy",
    paragraphs: [
      "Like all IRS enforcement actions, a bank levy follows a specific sequence of notices. The IRS is legally required to send you a Final Notice of Intent to Levy (CP504 or LT11) at least 30 days before seizing your assets.",
      "The IRS typically escalates to a bank levy when other collection efforts have not worked. This usually means you have unpaid taxes, the required notices were sent, and no arrangement was made to address the debt.",
      "The IRS may also issue a bank levy if you had a previous agreement (like an installment plan) that defaulted, or if they believe you are moving assets to avoid collection.",
    ],
    bulletPoints: [
      "You have an assessed tax balance that remains unpaid",
      "The IRS sent the required notices, including a Final Notice",
      "No payment arrangement or resolution was established",
      "The 30-day response period after the Final Notice passed",
    ],
  },

  whatHappensNext: {
    title: "What Happens During the 21-Day Window",
    paragraphs: [
      "Once the bank receives the levy notice, it freezes your funds immediately. Your bank will typically send you a notice explaining that a levy has been placed on your account. During the 21-day holding period, you cannot access the frozen funds.",
      "Direct deposits, incoming transfers, and checks deposited after the levy date are generally not affected by that particular levy -- but the IRS can issue a new levy on future deposits.",
      "If you take no action during the 21-day period, the bank sends the frozen funds to the IRS. After that, getting the money back is significantly more difficult. This is why acting quickly during this window is essential.",
    ],
    callout: "Day 1 matters. If you just discovered your account is frozen, your priority is to contact the IRS or a qualified representative today -- not next week.",
  },

  resolutionOptions: [
    {
      name: "Installment Agreement",
      description: "Setting up a monthly payment plan often results in the IRS releasing the bank levy. The IRS prefers consistent payments over one-time seizures.",
      whoQualifies: "Most taxpayers who can demonstrate ability to make regular monthly payments toward their tax debt.",
      keyBenefit: "Levy released and future bank accounts protected",
    },
    {
      name: "Financial Hardship Release",
      description: "If the levy causes significant financial hardship -- you cannot pay basic living expenses -- the IRS may release it.",
      whoQualifies: "Taxpayers who can demonstrate the levy prevents them from meeting necessary living expenses (food, housing, medical, transportation).",
      keyBenefit: "Immediate release of frozen funds",
    },
    {
      name: "Offer in Compromise",
      description: "Settle the underlying tax debt for less than the full amount. If accepted, all levies are released.",
      whoQualifies: "Taxpayers who demonstrate inability to pay the full amount through a detailed financial analysis.",
      keyBenefit: "Reduces total debt and releases the levy",
    },
    {
      name: "Collection Due Process Hearing",
      description: "Request a hearing to challenge the levy or propose alternatives. Filing within the 21-day window can prevent the bank from sending funds.",
      whoQualifies: "Anyone who received a Final Notice within the last 30 days and has not previously filed for a CDP hearing on the same tax period.",
      keyBenefit: "Pauses enforcement while your case is independently reviewed",
    },
  ],

  howTheProcessWorks: [
    { step: 1, title: "Act Immediately", description: "Contact the IRS at 1-800-829-7650 or reach out to a tax professional. Explain your situation and intent to resolve the debt. Time is critical during the 21-day window." },
    { step: 2, title: "Gather Financial Documents", description: "Prepare documentation of your income, expenses, and assets. You will need pay stubs, bank statements, and proof of essential expenses to support a hardship claim or payment plan request." },
    { step: 3, title: "Request Levy Release", description: "Based on your financial situation, request the appropriate resolution -- hardship release, installment agreement, or other option. The IRS can issue a levy release to your bank." },
    { step: 4, title: "Bank Releases Funds", description: "Once the IRS faxes or mails a levy release to your bank, the frozen funds become available again. This typically happens within a few business days." },
    { step: 5, title: "Establish Long-Term Resolution", description: "Set up a formal agreement with the IRS to address the underlying tax debt and prevent future levies. This gives you protection going forward." },
  ],

  whenToSeekHelp: {
    title: "When You Need Professional Help",
    paragraphs: [
      "A bank levy is one of the most aggressive collection tools the IRS has. While you can contact the IRS directly, the stakes and time pressure make professional representation particularly valuable in these situations.",
      "An enrolled agent, CPA, or tax attorney can contact the IRS on your behalf, often expediting the process. They understand which arguments and documentation are most likely to result in a levy release.",
    ],
    bulletPoints: [
      "Your account was frozen and you need the levy released quickly",
      "The frozen funds are needed for essential living expenses",
      "You owe more than $10,000 to the IRS",
      "You have unfiled tax returns that complicate your situation",
      "You already tried contacting the IRS and were unable to resolve it",
      "The 21-day deadline is approaching and you have not made progress",
    ],
    callout: "The IRS Taxpayer Advocate Service can help with urgent levy situations. Call 1-877-777-4778 if the levy is causing immediate financial hardship.",
  },

  reassurance: {
    title: "You Can Get Through This",
    message: "Finding your bank account frozen is one of the most stressful financial experiences a person can have. But a bank levy does not mean you have lost your money permanently. The 21-day holding period exists specifically to give you time to work things out. People resolve bank levies every day.",
    bulletPoints: [
      "The IRS releases tens of thousands of levies every year when taxpayers respond",
      "Financial hardship is a legitimate and frequently used reason for levy release",
      "Setting up a payment plan almost always results in levy release",
      "Acting quickly gives you the best chance of recovering your funds",
    ],
  },

  commonQuestions: [
    { question: "Can the IRS take all the money in my bank account?", answer: "The IRS can seize funds up to the amount you owe in taxes, penalties, and interest. If your account balance is less than what you owe, they can take the entire balance. Joint account holders may need to prove their share of the funds to recover them." },
    { question: "Will the IRS levy my bank account again?", answer: "Yes, the IRS can issue additional levies on future deposits if your tax debt is not resolved. Each levy is a separate action that seizes what is in the account at that moment. This is why establishing a resolution agreement is important." },
    { question: "Can I still use my bank account during a levy?", answer: "Deposits made after the levy date are generally available, but the frozen funds cannot be accessed during the 21-day period. Some banks may restrict overall account access, so check with your bank." },
    { question: "How do I get the IRS to release a bank levy?", answer: "The most common paths are: demonstrating financial hardship, setting up a payment plan, submitting an offer in compromise, or requesting a Collection Due Process hearing. Contact the IRS or a tax professional immediately." },
    { question: "What if the IRS levied the wrong person's account?", answer: "If the levy was issued in error -- for example, wrong taxpayer or already paid debt -- contact the IRS immediately with documentation. Wrongful levies can be released and funds returned." },
  ],

  glossary: [
    { term: "Bank Levy", definition: "A legal seizure of funds held in a bank account to satisfy an unpaid tax debt. The bank freezes the funds for 21 days before sending them to the IRS." },
    { term: "21-Day Holding Period", definition: "The legally required waiting period between when a bank freezes your funds and when it sends the money to the IRS. This is your window to take action." },
    { term: "Levy Release", definition: "An IRS action that instructs your bank to unfreeze and return the levied funds. Can be obtained through hardship claims, payment agreements, or other resolutions." },
    { term: "Form 668-A", definition: "The official IRS notice sent to your bank to initiate a levy on your accounts. Different from Form 668-W, which is used for wage garnishments." },
    { term: "Financial Hardship", definition: "A condition where paying the tax debt (or having funds seized) would prevent you from meeting basic necessary living expenses." },
    { term: "CP504 Notice", definition: "The IRS Final Notice of Intent to Levy. This is the last notice before the IRS can legally seize your bank account or other assets." },
  ],

  relatedTopics: [
    { title: "IRS Wage Garnishment", slug: "irs-wage-garnishment", description: "When the IRS takes money directly from your paycheck -- how it works and how to stop it." },
    { title: "Federal Tax Lien", slug: "tax-lien", description: "How the IRS places a legal claim on your property and what it means for your financial life." },
    { title: "Offer in Compromise", slug: "offer-in-compromise", description: "How to potentially settle your tax debt for less than the full amount owed." },
  ],

  disclaimer: "This content is for educational purposes only and does not constitute legal or tax advice. Tax situations vary and outcomes depend on individual circumstances. Consult a qualified tax professional for advice specific to your situation.",
}

export default topic
