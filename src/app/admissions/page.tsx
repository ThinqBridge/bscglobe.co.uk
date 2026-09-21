import type { Metadata } from "next";
import Link from "next/link";
import {
  EnquiryBanner,
  PageIntro,
  PageLayout,
} from "../../components/site-chrome";
import { Icon } from "../../components/icons";
import { FAQ } from "../../components/faq";

export const metadata: Metadata = {
  title: "Admissions & entry guidance",
  description:
    "Plan your next step with BSC Globe Education UK. Explore programme options, prepare your qualifications and speak to our Admissions team.",
  alternates: { canonical: "/admissions" },
};
export default function AdmissionsPage() {
  return (
    <PageLayout>
      <PageIntro
        photo={{
          src: "/images/lecture-hall.jpg",
          alt: "A student smiling outside a modern university building",
          position: "center 35%",
        }}
        eyebrow="Admissions"
        title="A big decision. A clear next step."
        description="You don’t need to have every answer before you get in touch. Start with your ambitions, and we’ll help you understand your options."
      />
      <section className="section">
        <div className="container">
          <p className="eyebrow">From an idea to a plan</p>
          <h2 className="section-title">
            Your journey starts
            <br />
            <em>with a conversation.</em>
          </h2>
          <div className="admissions-steps">
            <article className="admissions-step">
              <span>01</span>
              <h3>Explore your options</h3>
              <p>
                Compare the focus, duration and entry guidance for our
                programmes. Think about what you want to learn and where you’d
                like it to take you.
              </p>
              <Link className="text-link" href="/programmes">
                Find a programme <Icon name="arrow" />
              </Link>
            </article>
            <article className="admissions-step">
              <span>02</span>
              <h3>Tell us about yourself</h3>
              <p>
                Share your qualifications, relevant experience and study goals.
                Our team can help you understand which route may suit your
                starting point.
              </p>
              <Link className="text-link" href="/contact">
                Start an enquiry <Icon name="arrow" />
              </Link>
            </article>
            <article className="admissions-step">
              <span>03</span>
              <h3>Plan your next step</h3>
              <p>
                Confirm your eligibility, current fees, intake dates and
                delivery arrangements with Admissions before progressing with
                your application.
              </p>
              <Link className="text-link" href="/contact">
                Talk to our team <Icon name="arrow" />
              </Link>
            </article>
          </div>
          <div className="programme-help">
            <div>
              <h2>Useful to have to hand</h2>
              <p>
                Your highest qualification, relevant work experience, programme
                of interest and preferred intake. Admissions will confirm any
                documents needed.
              </p>
            </div>
            <Icon name="book" width={35} height={35} />
          </div>
        </div>
      </section>
      <FAQ />
      <EnquiryBanner />
    </PageLayout>
  );
}
