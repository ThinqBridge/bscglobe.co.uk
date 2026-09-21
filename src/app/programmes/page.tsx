import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, PageLayout } from "../../components/site-chrome";
import { ProgrammeFinder } from "../../components/programme-finder";
import { Icon } from "../../components/icons";

export const metadata: Metadata = {
  title: "Explore our programmes",
  description:
    "Find your route in business, undergraduate and postgraduate study, English language and professional development at BSC Globe Education UK.",
  alternates: { canonical: "/programmes" },
};
export default function ProgrammesPage() {
  return (
    <PageLayout>
      <PageIntro
        photo={{
          src: "/images/student-outdoors.jpg",
          alt: "Students taking part in a classroom session",
          position: "center",
        }}
        eyebrow="Our programmes"
        title="Your ambition. Your next step."
        description="Find a programme that fits where you are now and where you want to go. Explore business qualifications, degree pathways, English and professional skills."
      />
      <section className="section">
        <div className="container">
          <ProgrammeFinder />
          <div className="programme-help">
            <div>
              <h2>A little guidance can make all the difference.</h2>
              <p>
                Not sure which programme fits? Tell us about your qualifications
                and goals.
              </p>
            </div>
            <Link href="/contact" className="button button-navy">
              Let’s find your route <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
