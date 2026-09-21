import Link from "next/link";
import { Icon } from "./icons";

const questions = [
  [
    "Which programme is right for me?",
    "Your starting point depends on your qualifications, experience and goals. Foundation study can help you begin a business pathway; an HND builds higher-level knowledge; a top-up degree builds on appropriate prior study. Admissions can help you understand your options.",
  ],
  [
    "What are the entry requirements?",
    "Each programme has its own requirements. You’ll find entry guidance on every programme page. Share your current qualifications and any relevant work experience with Admissions for an individual eligibility assessment.",
  ],
  [
    "When can I start, and what are the fees?",
    "Intake dates, fees, availability and delivery arrangements vary by programme. Contact Admissions for the current information for your preferred course before making an application.",
  ],
  [
    "Can I progress from a foundation to a degree?",
    "The Qualifications Scotland route connects the UG Foundation in Business, UG HND in Business Administration and BA (Hons) Business Management Top-Up. Progression is subject to successful completion and the applicable entry requirements at each stage.",
  ],
];
export function FAQ() {
  return (
    <section className="section faq-section" id="faqs">
      <div className="container faq-grid">
        <div>
          <p className="eyebrow">A little clarity goes a long way</p>
          <h2 className="section-title">
            Good questions.
            <br />
            <em>Clear answers.</em>
          </h2>
          <p className="section-description">
            Choosing your next step is a big decision. We’re here to help you
            make it with confidence.
          </p>
          <Link href="/contact" className="text-link">
            Ask us a question <Icon name="arrow" />
          </Link>
        </div>
        <div className="faq-list">
          {questions.map(([question, answer]) => (
            <details key={question}>
              <summary>
                {question}
                <Icon name="plus" />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
