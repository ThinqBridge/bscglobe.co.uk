import type { Metadata } from "next";
import Link from "next/link";
import {
  EnquiryBanner,
  PageIntro,
  PageLayout,
} from "../../../components/site-chrome";
import { Icon } from "../../../components/icons";
import { programmes } from "../../../lib/programmes";

export const metadata: Metadata = {
  title: "Your undergraduate business pathway",
  description:
    "Explore the Qualifications Scotland pathway from foundation to HND and BA (Hons) Business Management Top-Up with the University of Suffolk.",
};
export default function PathwayPage() {
  return (
    <PageLayout>
      <PageIntro
        photo={{
          src: "/images/students-group.jpg",
          alt: "A graduate wearing a decorated mortarboard at a graduation ceremony",
          position: "center 40%",
        }}
        eyebrow="Your undergraduate pathway"
        title="One ambition. A step at a time."
        description="Build a route from your first business qualification towards a British honours degree through the Qualifications Scotland undergraduate pathway."
      />
      <section className="section">
        <div className="container">
          <div className="story-grid">
            <div>
              <p className="eyebrow">See the bigger picture</p>
              <h2 className="section-title">
                Start where you are.
                <br />
                <em>See where you can go.</em>
              </h2>
            </div>
            <div className="story-text">
              <p>
                The Qualifications Scotland programmes at BSC Colombo provide a
                structured route through business education. Begin with
                foundation study, build higher-level knowledge through an HND
                and explore progression to a University of Suffolk honours
                degree.
              </p>
              <p>
                Your entry point depends on your previous qualifications. Each
                stage has its own admissions and completion requirements;
                progression is subject to eligibility and successful completion.
              </p>
            </div>
          </div>
          <div className="admissions-steps">
            {programmes.slice(0, 3).map((programme, index) => (
              <article className="admissions-step" key={programme.slug}>
                <span>0{index + 1}</span>
                <p className="eyebrow">
                  {programme.duration} ·{" "}
                  {index < 2 ? programme.award : "Honours degree"}
                </p>
                <h3>{programme.title}</h3>
                <p>{programme.description}</p>
                <Link
                  className="text-link"
                  href={`/programmes/${programme.slug}`}
                >
                  Explore this stage <Icon name="arrow" />
                </Link>
              </article>
            ))}
          </div>
          <div className="programme-help">
            <div>
              <h2>Already have a qualification?</h2>
              <p>
                You may be able to join at a later stage. Share your previous
                study with Admissions for an individual assessment.
              </p>
            </div>
            <Link
              href="/contact?programme=qs-undergraduate-pathway#enquiry-form"
              className="button button-navy"
            >
              Find your starting point <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </section>
      <EnquiryBanner />
    </PageLayout>
  );
}
