import type { EducationalTopicConfig } from "@/data/educational-types"

const topic: EducationalTopicConfig = {
  slug: "innocent-spouse-relief",
  vertical: "tax-resolution",
  topic: "Innocent Spouse Relief",
  headline: "You Should Not Have to Pay for a Tax Problem That Was Not Your Fault",
  subheadline: "If your spouse or ex-spouse created a tax debt you did not know about, the IRS has programs designed specifically to protect you.",
  heroDescription: "When married couples file jointly, both spouses become legally responsible for the entire tax bill -- even if only one spouse earned the income or made the errors that caused the problem. Innocent spouse relief is the IRS's way of correcting that outcome when holding one spouse liable would be unfair. This guide explains who qualifies and how the process works.",
  primaryCTA: "See If You Qualify for Relief",
  secondaryCTA: "Understand Your Relief Options",
  ctaMicrocopy: "Free. No obligation. Takes 2 minutes.",

  whatThisMeans: {
    title: "What Is Innocent Spouse Relief?",
    subtitle: "Understanding joint and several liability -- and how relief can undo it",
    paragraphs: [
      "When you file a joint tax return with your spouse, both of you become jointly and severally liable for the tax debt on that return. This means the IRS can collect the full amount from either spouse, regardless of who earned the income or who made the errors. This rule can create serious problems when one spouse is unaware of what the other reported -- or failed to report.",
      "Innocent spouse relief is a set of IRS provisions under IRC Section 6015 that allow a spouse (or former spouse) to be relieved of responsibility for a joint tax debt when it would be inequitable to hold them liable. Relief does not require you to be divorced -- married couples can also qualify in certain circumstances.",
      "There are three main types of relief, each with different eligibility requirements. Which type applies to your situation depends on the nature of the tax problem, your knowledge of the error, and your current relationship with your spouse.",
    ],
    bulletPoints: [
      "Joint and several liability means either spouse can be held responsible for the full debt",
      "Relief is available even if you are still married, separated, or divorced",
      "Relief can apply to underreported income, improper deductions, or credits claimed by your spouse",
      "The IRS notifies your current or former spouse when you apply for relief",
      "Community property states have additional rules that affect eligibility",
    ],
    callout: "Innocent spouse relief is not just for people who are divorced. If you filed jointly and had no knowledge of errors your spouse made, you may qualify even if you are still married.",
  },

  whyItHappens: {
    title: "How Joint Tax Debts Create This Problem",
    paragraphs: [
      "Most married couples file jointly because it typically results in lower taxes. When both spouses sign a joint return, both take on legal responsibility for everything on it. This works fine when both spouses are fully informed -- but creates serious problems when one spouse hides income, inflates deductions, or fails to report a side business without the other's knowledge.",
      "The problem can surface years after the return was filed, when the IRS audits it or matches third-party records to your return. By then, you may be separated, divorced, or living on a single income -- making it even harder to pay a debt that was never really yours.",
      "In community property states (Arizona, California, Idaho, Louisiana, Nevada, New Mexico, Texas, Washington, Wisconsin), special rules may attribute your spouse's income to you even on separate returns. The IRS has specific relief provisions for community property situations as well.",
    ],
    bulletPoints: [
      "One spouse underreported income from self-employment or investments",
      "One spouse claimed deductions or credits that were not legitimate",
      "The other spouse signed the return without full knowledge of what was on it",
      "The IRS audited the return and assessed additional taxes and penalties",
      "The debt has grown with penalties and interest to an amount neither spouse anticipated",
    ],
  },

  whatHappensNext: {
    title: "What Happens After You Apply for Relief",
    paragraphs: [
      "You request innocent spouse relief by filing Form 8857 (Request for Innocent Spouse Relief) with the IRS. There is no filing fee. The IRS will notify your current or former spouse that you have filed for relief and give them the opportunity to participate in the process -- they cannot block your application, but they can provide information to the IRS.",
      "The IRS reviews your application based on your specific situation and the type of relief you are requesting. This process typically takes several months. During the review, the IRS generally pauses collection against you for the debt you are seeking relief from.",
      "If the IRS approves your request, you are relieved of liability for that portion of the tax debt. If denied, you have the right to appeal the decision within the IRS and, ultimately, to petition the Tax Court.",
    ],
    callout: "There is generally a two-year deadline to apply for Innocent Spouse Relief (IRC 6015(b)) and Separation of Liability (IRC 6015(c)) -- measured from when the IRS first tried to collect the debt from you. Equitable relief under 6015(f) has a more flexible deadline. Do not delay.",
  },

  resolutionOptions: [
    {
      name: "Innocent Spouse Relief (IRC 6015(b))",
      description: "Full relief from joint tax liability when your spouse (or ex-spouse) understated taxes on a joint return due to erroneous items, you did not know or have reason to know about the understatement, and it would be inequitable to hold you liable.",
      whoQualifies: "Spouses who had no actual or constructive knowledge of the error at the time they signed the return. You must have received no significant benefit from the understated tax.",
      keyBenefit: "Complete relief from the portion of debt attributable to your spouse's errors",
    },
    {
      name: "Separation of Liability (IRC 6015(c))",
      description: "Divides the understated tax between you and your spouse based on each person's share of responsibility. You are only liable for your portion. Available only for divorced, legally separated, widowed, or those who have not lived together in the past 12 months.",
      whoQualifies: "Former spouses or those who no longer cohabit, where the tax liability can be meaningfully divided between the two parties.",
      keyBenefit: "Limits your liability to only your share of the joint debt",
    },
    {
      name: "Equitable Relief (IRC 6015(f))",
      description: "A catch-all provision for situations where Innocent Spouse Relief and Separation of Liability do not apply, but it would still be unfair to hold you liable. Covers both understatements and underpayments -- situations where the tax was reported correctly but not paid.",
      whoQualifies: "Taxpayers who do not qualify under 6015(b) or 6015(c) but can demonstrate that considering all facts and circumstances, it would be inequitable to hold them liable.",
      keyBenefit: "Provides relief even when you knew about the tax but could not pay it due to abuse or economic hardship",
    },
    {
      name: "Injured Spouse Allocation",
      description: "Distinct from innocent spouse relief. An injured spouse claim (Form 8379) protects your share of a joint refund when the IRS offsets it to pay your spouse's separate debt -- such as child support, student loans, or their prior tax liability.",
      whoQualifies: "Spouses whose portion of a joint refund was or will be applied to the other spouse's separate pre-existing debt.",
      keyBenefit: "Recovers your portion of a refund that was taken to pay your spouse's separate obligations",
    },
  ],

  howTheProcessWorks: [
    { step: 1, title: "Determine Which Relief Type Applies", description: "Review which form of relief best fits your situation. Are you divorced or separated (Separation of Liability)? Did you have no knowledge of the error (Innocent Spouse)? Or did you know but could not pay due to hardship or abuse (Equitable Relief)? The right category affects how you document your case." },
    { step: 2, title: "Complete Form 8857", description: "File Form 8857, Request for Innocent Spouse Relief, with the IRS. The form asks detailed questions about your knowledge of the tax error, your current relationship with your spouse, and your financial situation. Be thorough and honest -- vague answers slow the process." },
    { step: 3, title: "Gather Supporting Documentation", description: "Collect evidence that supports your claim: divorce decrees, separation agreements, documentation of abuse (if applicable), financial records showing you did not benefit from the understatement, and any correspondence that shows you were unaware of the issue." },
    { step: 4, title: "IRS Reviews Your Application", description: "The IRS notifies your spouse or ex-spouse, who may submit information to the IRS. A caseworker reviews all information and makes a determination. This process typically takes 6 months or more. Respond promptly to any IRS requests for additional information." },
    { step: 5, title: "Respond to the Decision", description: "If approved, the IRS will send a Notice of Determination granting relief. If denied or partially denied, you have 90 days to petition the U.S. Tax Court for an independent review. Many relief cases are won at the appeals or Tax Court level." },
  ],

  whenToSeekHelp: {
    title: "When You Need Professional Guidance",
    paragraphs: [
      "Innocent spouse cases involve detailed factual analysis that the IRS weighs against specific legal standards. The strength of your application depends heavily on how your facts are presented -- what you include, how you frame it, and what supporting documentation you provide.",
      "Cases involving domestic abuse, community property issues, or large dollar amounts are particularly complex. A tax professional with innocent spouse experience understands which facts are most persuasive to IRS reviewers and what documentation to gather before applying.",
    ],
    bulletPoints: [
      "The debt is large (over $10,000)",
      "Your case involves domestic abuse, which is a significant factor under equitable relief",
      "You live in a community property state",
      "Your spouse or ex-spouse is contesting your relief request",
      "The IRS has already denied your request and you are considering Tax Court",
      "You are uncertain which type of relief applies to your situation",
      "You need IRS collection activity paused while your application is reviewed",
    ],
    callout: "Victims of domestic abuse receive special consideration under the equitable relief rules. Financial abuse -- where one spouse controls all financial decisions -- is also recognized by the IRS as a relevant factor.",
  },

  reassurance: {
    title: "You Have Legal Rights in This Situation",
    message: "Being pursued for a tax debt caused by someone else's actions -- especially an ex-spouse -- can feel deeply unfair. The IRS recognizes this. The innocent spouse provisions exist specifically because Congress understood that joint liability can produce unjust outcomes. You have legal avenues to address this, and many people successfully obtain relief.",
    bulletPoints: [
      "The IRS grants innocent spouse relief in thousands of cases each year",
      "You can apply regardless of whether you are still married, separated, or divorced",
      "IRS collection is generally paused while your application is under review",
      "A denial is not final -- you can appeal to Tax Court",
    ],
  },

  commonQuestions: [
    { question: "Can I apply for innocent spouse relief if I am still married?", answer: "Yes. You do not need to be divorced or separated to apply for Innocent Spouse Relief under IRC 6015(b) or Equitable Relief under 6015(f). However, Separation of Liability under 6015(c) is only available if you are divorced, legally separated, or have not lived with your spouse in the past 12 months." },
    { question: "Will my spouse find out I applied for relief?", answer: "Yes. The IRS is required by law to notify your current or former spouse when you file Form 8857. They have the right to provide information to the IRS, but they cannot prevent you from applying. The IRS will share limited information with your spouse only as necessary for their participation in the process." },
    { question: "How long do I have to apply?", answer: "For Innocent Spouse Relief (6015(b)) and Separation of Liability (6015(c)), you generally must apply within two years of the IRS's first collection action against you for the debt. Equitable relief (6015(f)) has a more flexible deadline -- generally the period of limitations for collection. Because deadlines vary by situation, applying as soon as possible is always advisable." },
    { question: "What is the difference between innocent spouse relief and injured spouse relief?", answer: "These are separate programs. Innocent spouse relief addresses liability for a joint tax debt caused by errors on the return. Injured spouse relief (Form 8379) addresses a different problem: your share of a joint refund being offset to pay your spouse's separate debt, such as past-due child support or student loans." },
    { question: "What if the IRS denies my application?", answer: "A denial is not final. You can request reconsideration, appeal within the IRS, or petition the U.S. Tax Court for an independent review. You must petition Tax Court within 90 days of the IRS Notice of Determination. Many cases that were initially denied have been granted relief after an appeal or Tax Court review." },
  ],

  glossary: [
    { term: "Joint and Several Liability", definition: "The legal rule that makes both spouses on a joint return fully responsible for the entire tax debt. The IRS can collect from either spouse, regardless of who caused the liability." },
    { term: "Form 8857", definition: "Request for Innocent Spouse Relief -- the form you file with the IRS to apply for any type of innocent spouse relief." },
    { term: "IRC Section 6015", definition: "The section of the Internal Revenue Code that establishes innocent spouse relief, separation of liability, and equitable relief." },
    { term: "Separation of Liability", definition: "A form of relief under IRC 6015(c) that divides the joint tax liability between spouses based on each person's contribution to the understatement. Available only to those who are no longer living with their spouse." },
    { term: "Equitable Relief", definition: "A catch-all form of relief under IRC 6015(f) for situations where the other two forms do not apply but it would still be unfair to hold the requesting spouse liable." },
    { term: "Injured Spouse Allocation", definition: "A separate program (Form 8379) that protects your share of a joint refund when it would otherwise be applied to your spouse's pre-existing separate debt." },
    { term: "Community Property", definition: "A marital property system used in nine states where most income and assets acquired during marriage are owned equally by both spouses. This affects how the IRS attributes income and liability." },
    { term: "Notice of Determination", definition: "The IRS's written decision on your innocent spouse relief application. You have 90 days from this notice to petition Tax Court if you disagree." },
  ],

  relatedTopics: [
    { title: "IRS Audit Representation", slug: "irs-audit-representation", description: "If the joint tax debt arose from an audit, understanding audit representation can help you protect your rights." },
    { title: "Offer in Compromise", slug: "offer-in-compromise", description: "If relief is partial and you still owe more than you can pay, an offer in compromise may reduce what remains." },
    { title: "Penalty Abatement", slug: "penalty-abatement", description: "Even if the underlying tax stands, penalties may be removable if you were unaware of the situation." },
  ],

  disclaimer: "This content is for educational purposes only and does not constitute legal or tax advice. Tax situations vary and outcomes depend on individual circumstances. Consult a qualified tax professional for advice specific to your situation.",
}

export default topic
