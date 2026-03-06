import type { EducationalTopicConfig } from "@/data/educational-types"

const topic: EducationalTopicConfig = {
  slug: "irs-audit-representation",
  vertical: "tax-resolution",
  topic: "IRS Audit Representation",
  headline: "What to Do When the IRS Selects Your Return for Audit",
  subheadline: "An IRS audit is stressful, but most audits are resolved without major consequences when handled properly.",
  heroDescription: "An IRS audit is the agency's way of verifying that information on your tax return is accurate and complete. Most audits are correspondence audits handled entirely by mail -- but all of them require a timely, organized response. This guide explains the types of audits, your rights, and how professional representation can protect you.",
  primaryCTA: "Understand Your Audit Options",
  secondaryCTA: "See How Representation Works",
  ctaMicrocopy: "Free. No obligation. Takes 2 minutes.",

  whatThisMeans: {
    title: "What Is an IRS Audit?",
    subtitle: "Understanding the different types of audits and what they mean for you",
    paragraphs: [
      "An IRS audit is a formal review of your tax return to verify that your reported income, deductions, and credits are accurate. The IRS selects returns for audit using a combination of computer screening (the Discriminant Function System), random selection, and related examinations -- where your return is connected to another taxpayer already under audit.",
      "Not every audit is serious. Many audits are simply requests to verify a single item -- like substantiating a charitable deduction or confirming a dependent's Social Security number. Others involve a more detailed review of your entire return. The type of audit you receive determines how it is conducted and how you should respond.",
      "Regardless of the audit type, you have rights throughout the process. The IRS is required to explain why your return was selected, give you time to gather documentation, and follow procedural rules. You also have the right to appeal any audit findings you disagree with.",
    ],
    bulletPoints: [
      "Correspondence audits are conducted entirely by mail and are the most common type",
      "Office audits require you to meet with an IRS examiner at a local IRS office",
      "Field audits occur at your home, business, or representative's office",
      "You have the right to professional representation at every stage of an audit",
      "The IRS generally has 3 years from the return's due date to initiate an audit",
      "Significant underreporting (25% or more of gross income) extends the window to 6 years",
    ],
    callout: "Receiving an audit notice does not mean the IRS believes you cheated. Most audits are routine verification processes. Responding promptly and accurately is the most important first step.",
  },

  whyItHappens: {
    title: "Why the IRS Selected Your Return",
    paragraphs: [
      "The IRS uses a scoring system called the Discriminant Function System (DIF) to flag returns that appear statistically unusual compared to similar returns. A high DIF score increases the likelihood of selection but does not mean anything improper occurred -- it simply means one or more items on your return appear different from statistical norms.",
      "Common audit triggers include unusually high deductions relative to income, business losses reported multiple years in a row, home office deductions, large charitable contributions, and cash-intensive businesses. Returns claiming the Earned Income Tax Credit are also audited at a higher rate.",
      "Your return may also be selected because it is connected to another taxpayer or transaction the IRS is already examining. This is called a related examination and does not necessarily mean your return has a problem.",
    ],
    bulletPoints: [
      "High deductions relative to income in your tax bracket",
      "Business losses reported in multiple consecutive years",
      "Claimed home office deductions, especially large ones",
      "Large cash transactions or unreported income",
      "Discrepancies between your return and third-party forms (W-2s, 1099s)",
      "Random selection through the IRS statistical sampling program",
    ],
  },

  whatHappensNext: {
    title: "What Happens After You Receive an Audit Notice",
    paragraphs: [
      "The first notice you receive will identify which tax year is under review and what information the IRS is requesting. For correspondence audits, you will receive a specific list of documents to submit by a deadline. For office or field audits, you will be given an appointment date.",
      "The deadline on the audit notice is real. If you need more time to gather documents, you can usually request an extension -- but do not ignore the notice or let the deadline pass without responding. Non-response typically results in the IRS assessing additional taxes automatically.",
      "After the IRS reviews your documentation, they will issue a report of findings. If you agree with the findings, you sign and pay any additional taxes owed. If you disagree, you have the right to appeal within the IRS and, ultimately, to tax court.",
    ],
    callout: "Do not send original documents to the IRS. Always send copies and keep originals in a safe place. For office or field audits, bringing a tax professional with you is strongly advisable.",
  },

  resolutionOptions: [
    {
      name: "Correspondence Audit Response",
      description: "Respond to IRS mail audits by submitting the requested documentation with a clear, organized cover letter. Proper documentation of the questioned item often closes the audit with no change.",
      whoQualifies: "Taxpayers who received a CP2000, Letter 566, or similar notice requesting verification of specific items on their return.",
      keyBenefit: "Resolved entirely by mail with no in-person meeting required",
    },
    {
      name: "Office Audit Representation",
      description: "A tax professional attends the audit meeting at the IRS office on your behalf or alongside you. They handle IRS questions directly and ensure only relevant information is disclosed.",
      whoQualifies: "Taxpayers who have received an appointment notice from a local IRS office and need help preparing or want professional representation present.",
      keyBenefit: "Protects you from inadvertently providing harmful information",
    },
    {
      name: "Field Audit Representation",
      description: "Field audits are the most comprehensive type and typically involve business returns. A representative can redirect the audit to their office, limiting the IRS examiner's access to your workplace.",
      whoQualifies: "Business owners and self-employed individuals facing a field audit, particularly those with complex finances or multiple years under review.",
      keyBenefit: "Controls the audit environment and scope of the examination",
    },
    {
      name: "Appeals Process",
      description: "If you disagree with the IRS examiner's findings, you can request an independent review by the IRS Office of Appeals. Appeals officers resolve disagreements without litigation in the majority of cases.",
      whoQualifies: "Taxpayers who received a 30-day letter (Notice of Proposed Adjustment) and disagree with the IRS's proposed changes.",
      keyBenefit: "Independent review with a fresh set of eyes on your case",
    },
  ],

  howTheProcessWorks: [
    { step: 1, title: "Review the Audit Notice", description: "Read the notice carefully to identify what tax year is under review, what documents the IRS is requesting, and the response deadline. Determine what type of audit it is: correspondence, office, or field." },
    { step: 2, title: "Gather Supporting Documentation", description: "Collect receipts, bank statements, cancelled checks, mileage logs, or other records that support the items being questioned. Organize documents clearly and make copies -- never send originals to the IRS." },
    { step: 3, title: "Prepare or Authorize a Representative", description: "If using a tax professional, sign Form 2848 (Power of Attorney) to authorize them to speak with the IRS on your behalf. This allows your representative to handle the audit directly without requiring your presence." },
    { step: 4, title: "Submit Documentation or Attend the Meeting", description: "For correspondence audits, mail or upload the requested documents with a cover letter. For office or field audits, attend the appointment (or have your representative attend) with organized documentation." },
    { step: 5, title: "Review Findings and Respond", description: "After the IRS issues its findings, you can agree, negotiate adjustments, or formally appeal. If additional tax is owed, review payment options. If you disagree, file a written protest within the time allowed." },
  ],

  whenToSeekHelp: {
    title: "When Professional Representation Matters Most",
    paragraphs: [
      "You have the legal right to handle an IRS audit yourself. For simple correspondence audits involving one clear issue with straightforward documentation, many people do this successfully. But the stakes rise considerably for office audits, field audits, and any situation involving complex issues or large amounts.",
      "A licensed representative -- enrolled agent, CPA, or tax attorney -- understands what the IRS examiner is actually looking for, can limit the scope of questions, and knows how to present documentation in the most favorable light. They also know what you do not have to provide and can prevent an audit from expanding beyond its original scope.",
    ],
    bulletPoints: [
      "The audit involves a business return or self-employment income",
      "Multiple tax years are under review",
      "The proposed additional tax is $5,000 or more",
      "You have unfiled returns from the years under audit",
      "The IRS is questioning complex deductions you are not sure how to document",
      "You feel uncertain about speaking directly with an IRS examiner",
      "The audit has already expanded beyond the original notice",
    ],
    callout: "You can authorize a tax professional to represent you at any point during the audit -- even after it has already begun. It is never too late to get help.",
  },

  reassurance: {
    title: "Most Audits Are Manageable",
    message: "Being audited is unsettling, but it does not mean you are in serious trouble. The majority of IRS audits result in no change or a modest adjustment. The IRS audits millions of returns each year as a routine verification process. With proper documentation and a clear response, most audits close without major consequences.",
    bulletPoints: [
      "Roughly 70% of correspondence audits result in no change when taxpayers respond with documentation",
      "You have the right to representation at every stage",
      "You can appeal IRS findings you disagree with",
      "The audit process has defined rules the IRS must follow",
    ],
  },

  commonQuestions: [
    { question: "How long does an IRS audit take?", answer: "Correspondence audits typically resolve within 3 to 6 months, depending on how quickly you respond and how backlogged the IRS is. Office and field audits can take 6 months to over a year, particularly if multiple issues are involved or the case goes to appeals." },
    { question: "Can the IRS audit me for more than one year at a time?", answer: "Yes. If the IRS finds significant issues in the year under audit, they may expand the examination to other years. This is one reason why having professional representation can be valuable -- a representative can work to keep the audit focused on its original scope." },
    { question: "What happens if I ignore an audit notice?", answer: "If you do not respond, the IRS will automatically assess additional taxes based on their proposed adjustments. You will receive a statutory notice of deficiency (a '90-day letter') giving you a final opportunity to dispute the amount in Tax Court before it becomes final. Ignoring an audit is almost never in your interest." },
    { question: "What is the statute of limitations for IRS audits?", answer: "The IRS generally has 3 years from the date a return was filed (or the due date, whichever is later) to initiate an audit. If you omitted more than 25% of your gross income, the window extends to 6 years. There is no time limit if the IRS suspects fraud or if you never filed a return." },
    { question: "Do I have to attend the audit in person?", answer: "For correspondence audits, no -- everything is handled by mail. For office and field audits, an authorized representative can attend in your place if you have signed Form 2848. You generally do not need to be present if you have a qualified representative handling the audit." },
  ],

  glossary: [
    { term: "Correspondence Audit", definition: "An IRS audit conducted entirely through the mail. The IRS requests specific documents and you respond in writing. The most common type of audit." },
    { term: "Office Audit", definition: "An audit that requires you to meet with an IRS examiner at a local IRS office. More involved than a correspondence audit but less comprehensive than a field audit." },
    { term: "Field Audit", definition: "The most thorough type of IRS audit. An examiner visits your home or business to review records firsthand. Most common for businesses with complex finances." },
    { term: "Form 2848", definition: "Power of Attorney form that authorizes a tax professional to represent you before the IRS. Once filed, the IRS communicates directly with your representative." },
    { term: "30-Day Letter", definition: "An IRS letter (Notice of Proposed Adjustment) that gives you 30 days to agree to proposed changes or request a conference with the IRS Office of Appeals." },
    { term: "90-Day Letter", definition: "A statutory notice of deficiency giving you 90 days to petition Tax Court before the proposed additional tax becomes final and collectible." },
    { term: "DIF Score", definition: "Discriminant Function System score -- the IRS's internal scoring system that flags returns as statistically unusual compared to similar returns, increasing audit likelihood." },
    { term: "IRS Office of Appeals", definition: "An independent function within the IRS that reviews disputes between taxpayers and IRS examiners. Appeals officers resolve most cases without litigation." },
  ],

  relatedTopics: [
    { title: "Penalty Abatement", slug: "penalty-abatement", description: "How to request removal of IRS penalties, including penalties that may result from an audit adjustment." },
    { title: "Unfiled Tax Returns", slug: "unfiled-tax-returns", description: "If you have missing returns, getting compliant before or during an audit is critical." },
    { title: "Offer in Compromise", slug: "offer-in-compromise", description: "If an audit results in a balance you cannot pay in full, settling for less than the full amount may be an option." },
  ],

  disclaimer: "This content is for educational purposes only and does not constitute legal or tax advice. Tax situations vary and outcomes depend on individual circumstances. Consult a qualified tax professional for advice specific to your situation.",
}

export default topic
