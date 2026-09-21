import type { Metadata } from "next";
import Image from "next/image";
import {
  EnquiryBanner,
  PageIntro,
  PageLayout,
} from "../../components/site-chrome";

export const metadata: Metadata = {
  title: "Why BSC Globe",
  description:
    "Discover our British educational heritage and international approach to business education, practical learning and academic progression.",
  alternates: { canonical: "/about" },
};
const values = [
  [
    "01",
    "Academic integrity",
    "Honest work, sound reasoning and respect for evidence underpin meaningful learning.",
  ],
  [
    "02",
    "Practical relevance",
    "Learning should help you understand problems and make better decisions in real situations.",
  ],
  [
    "03",
    "Respect for difference",
    "An international perspective begins with listening to people whose experiences differ from our own.",
  ],
  [
    "04",
    "Personal responsibility",
    "Progress grows from preparation, participation and a willingness to act on feedback.",
  ],
];
export default function AboutPage() {
  return (
    <PageLayout>
      <PageIntro
        photo={{
          src: "/images/graduation-sky.jpg",
          alt: "A graduate walking through a sunlit university archway",
          position: "center 45%",
        }}
        eyebrow="Get to know BSC Globe"
        title="A British foundation. An international outlook."
        description="We believe education can change your perspective — and your possibilities. Our purpose is to help you build the knowledge, skills and confidence to move forward."
      />
      <section className="section">
        <div className="container">
          <div className="story-grid">
            <div>
              <p className="eyebrow">Our story</p>
              <h2 className="section-title">
                Education that
                <br />
                <em>opens doors.</em>
              </h2>
            </div>
            <div className="story-text">
              <p>
                The British School of Commerce (BSC), established in 2010, is an
                Associate College of the University of Suffolk, UK. Our academic
                heritage connects British education with an international
                community of learners.
              </p>
              <p>
                Previously owned and operated by the London School of Commerce,
                BSC now operates as an independent institution. That history has
                helped shape our commitment to making British qualifications
                accessible internationally.
              </p>
              <p>
                Today, our approach brings together academic knowledge,
                practical learning and an international perspective. From your
                first business qualification to postgraduate study, we help you
                understand your options and prepare for what comes next.
              </p>
            </div>
          </div>
          <div className="about-photo-mosaic">
            <figure className="about-photo-wide">
              <div className="editorial-photo">
                <Image
                  src="/images/student-study.jpg"
                  alt="A group of students collaborating on a project"
                  fill
                  sizes="(max-width: 640px) calc(100vw - 40px), 60vw"
                />
              </div>
              <figcaption>New ideas start with shared perspectives.</figcaption>
            </figure>
            <figure>
              <div className="editorial-photo">
                <Image
                  src="/images/student-campus.jpg"
                  alt="A smiling graduate wearing a cap and gown"
                  fill
                  sizes="(max-width: 640px) calc(100vw - 40px), 30vw"
                  style={{ objectPosition: "center 35%" }}
                />
              </div>
              <figcaption>
                Every next chapter starts with a first step.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: "#edf0ee" }}>
        <div className="container">
          <p className="eyebrow">The principles behind our teaching</p>
          <h2 className="section-title">
            What we believe.
            <br />
            <em>How we learn.</em>
          </h2>
          <div className="values-grid">
            {values.map(([number, title, description]) => (
              <article className="value-card" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <EnquiryBanner />
    </PageLayout>
  );
}
