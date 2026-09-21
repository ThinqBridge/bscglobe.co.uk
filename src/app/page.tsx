import Image from "next/image";
import Link from "next/link";
import { EnquiryBanner, PageLayout } from "../components/site-chrome";
import { Icon } from "../components/icons";
import { ProgrammeFinder } from "../components/programme-finder";
import { FAQ } from "../components/faq";

export default function Home() {
  return (
    <PageLayout>
      <section className="home-hero">
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-line" /> British education. Global
              ambition.
            </p>
            <h1>
              Your next chapter.
              <br />A world of
              <br />
              <em>possibility.</em>
            </h1>
            <p className="hero-description">
              Build your knowledge. Find your direction.
              <br className="desktop-break" /> Take your next step with British
              education
              <br className="desktop-break" /> and an international outlook.
            </p>
            <div className="hero-actions">
              <Link href="#programmes" className="button button-red">
                Find your programme <Icon name="arrow" />
              </Link>
              <Link href="/about" className="text-link">
                Get to know us <Icon name="diagonal" />
              </Link>
            </div>
            <div className="hero-footnote">
              <span className="hero-footnote-icon">
                <Icon name="globe" />
              </span>
              <span>
                Different ambitions. Shared possibilities.
                <br />
                <strong>Your future starts with the right support.</strong>
              </span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image">
              <Image
                src="/images/student-study.jpg"
                alt="Students sharing ideas and learning together around a laptop"
                fill
                preload
                sizes="(max-width: 760px) 100vw, 50vw"
                className="hero-main-image"
              />
              <div className="hero-image-shade" />
              <span className="image-caption">
                <span /> A wider world of learning
              </span>
            </div>
            <div className="hero-stamp" aria-hidden="true">
              <Icon name="globe" width={32} height={32} />
              <span>
                LEARN. GROW.
                <br />
                GO FURTHER.
              </span>
            </div>
            <Link
              href="/programmes/qs-undergraduate-pathway"
              className="hero-pathway-card"
            >
              <span className="pathway-card-icon">
                <Icon name="cap" width={27} height={27} />
              </span>
              <div>
                <span>Your ambition. A clear pathway.</span>
                <strong>
                  From your first step
                  <br />
                  to your next degree.
                </strong>
              </div>
              <span className="pathway-card-arrow">
                <Icon name="diagonal" />
              </span>
            </Link>
            <span className="hero-side-label" aria-hidden="true">
              BSC GLOBE EDUCATION UK — EXPLORE YOUR POTENTIAL
            </span>
          </div>
        </div>
      </section>
      <section className="academic-strip" aria-label="Academic routes">
        <div className="container">
          <p>
            British education.
            <br />
            <strong>International perspective.</strong>
          </p>
          <div className="academic-name">
            <Icon name="cap" width={30} height={30} />
            <span>
              University of
              <br />
              <strong>SUFFOLK</strong>
            </span>
          </div>
          <div className="academic-name">
            <span className="qs-mark">QS</span>
            <span>
              Qualifications
              <br />
              <strong>Scotland</strong>
            </span>
          </div>
          <div className="academic-name">
            <Icon name="book" width={28} height={28} />
            <span>
              <strong>Cambridge English</strong>
              <small>Examination preparation</small>
            </span>
          </div>
        </div>
      </section>
      <section className="section programmes-section" id="programmes">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Find your direction</p>
              <h2 className="section-title">
                Your ambition.
                <br />
                <em>Your programme.</em>
              </h2>
            </div>
            <p className="section-description">
              Starting out, stepping up or changing direction.
              <br />
              Explore a route that meets you where you are
              <br className="desktop-break" /> and helps you go further.
            </p>
          </div>
          <ProgrammeFinder compact />
        </div>
      </section>
      <section className="why-section">
        <div className="container why-layout">
          <div className="why-photo">
            <Image
              src="/images/campus-walk.jpg"
              alt="Two students walking together on a leafy university campus"
              fill
              sizes="(max-width: 760px) 100vw, 45vw"
            />
            <div className="photo-note">
              <span>More than a qualification.</span>
              <strong>A new perspective.</strong>
            </div>
          </div>
          <div className="why-copy">
            <p className="eyebrow">The BSC Globe approach</p>
            <h2 className="section-title">
              Rooted in Britain.
              <br />
              <em>Looking to the world.</em>
            </h2>
            <p className="section-description">
              Education should open doors. We connect academic learning with
              practical skills, helping you build the confidence to take your
              place in a connected world.
            </p>
            <div className="benefit-list">
              {[
                [
                  "book",
                  "Learning with purpose",
                  "Connect ideas in the classroom with challenges in the real world.",
                ],
                [
                  "globe",
                  "An international outlook",
                  "Explore different perspectives, cultures and ways of thinking.",
                ],
                [
                  "cap",
                  "Progression at every stage",
                  "Find a clear route from your starting point to your next ambition.",
                ],
              ].map(([icon, title, body]) => (
                <div key={title}>
                  <span className="benefit-icon">
                    <Icon name={icon as "book" | "globe" | "cap"} />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/about" className="text-link">
              Discover the BSC Globe difference <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </section>
      <section className="section pathway-section" id="pathway">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">One ambition. A step at a time.</p>
              <h2 className="section-title">
                A clear path.
                <br />
                <em>A bigger future.</em>
              </h2>
            </div>
            <div>
              <p className="section-description">
                From your first business qualification to
                <br className="desktop-break" /> a British honours degree. See
                how your
                <br className="desktop-break" /> journey could take shape.
              </p>
              <Link
                href="/programmes/qs-undergraduate-pathway"
                className="text-link"
              >
                Explore the undergraduate pathway <Icon name="arrow" />
              </Link>
            </div>
          </div>
          <div className="pathway-steps">
            {[
              [
                "01",
                "Lay your foundation",
                "UG Foundation in Business",
                "6 months",
                "SCQF Level 6",
                "ug-foundation-business",
              ],
              [
                "02",
                "Build your expertise",
                "HND in Business Administration",
                "24 months",
                "SCQF Level 8",
                "ug-hnd-business-administration",
              ],
              [
                "03",
                "Take the next step",
                "BA (Hons) Business Management Top-Up",
                "12 months",
                "University of Suffolk",
                "ba-business-management-top-up",
              ],
            ].map(([number, label, title, duration, award, slug]) => (
              <Link
                href={`/programmes/${slug}`}
                className="pathway-step"
                key={number}
              >
                <div className="step-top">
                  <span>{number}</span>
                  <Icon name="arrow" />
                </div>
                <p>{label}</p>
                <h3>{title}</h3>
                <div className="step-meta">
                  <span>{duration}</span>
                  <span>{award}</span>
                </div>
              </Link>
            ))}
          </div>
          <p className="pathway-note">
            Progression is subject to successful completion, eligibility and the
            applicable academic requirements.
          </p>
        </div>
      </section>
      <section className="possibility-section">
        <Image
          src="/images/graduation-hall.jpg"
          alt="Graduates celebrating together outside a university building"
          fill
          sizes="100vw"
        />
        <div className="possibility-overlay" />
        <div className="container">
          <p className="eyebrow">Where could your education take you?</p>
          <h2>
            Start with curiosity.
            <br />
            Go with <em>confidence.</em>
          </h2>
          <p>
            A new skill. A next qualification. A different perspective.
            <br />
            Your next chapter is yours to write.
          </p>
          <Link href="/programmes" className="button button-white">
            Explore your possibilities <Icon name="diagonal" />
          </Link>
        </div>
      </section>
      <section className="section learning-gallery-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">There’s more to moving forward</p>
              <h2 className="section-title">
                Room to learn.
                <br />
                <em>Space to grow.</em>
              </h2>
            </div>
            <div>
              <p className="section-description">
                Fresh perspectives, focused study and moments worth celebrating.
                Make space for what comes next.
              </p>
              <Link href="/about" className="text-link">
                Explore our approach <Icon name="arrow" />
              </Link>
            </div>
          </div>
          <div className="learning-gallery">
            <figure>
              <div className="editorial-photo">
                <Image
                  src="/images/graduates-campus.jpg"
                  alt="Two students sharing ideas over a laptop"
                  fill
                  sizes="(max-width: 640px) calc(100vw - 40px), 35vw"
                />
              </div>
              <figcaption>
                <span>01 / Shared perspectives</span>
                <h3>Learn from each other.</h3>
              </figcaption>
            </figure>
            <figure>
              <div className="editorial-photo">
                <Image
                  src="/images/student-tablet.jpg"
                  alt="A student concentrating on her laptop beside a sunny window"
                  fill
                  sizes="(max-width: 640px) 45vw, 28vw"
                  style={{ objectPosition: "45% center" }}
                />
              </div>
              <figcaption>
                <span>02 / Personal progress</span>
                <h3>Find your focus.</h3>
              </figcaption>
            </figure>
            <figure>
              <div className="editorial-photo">
                <Image
                  src="/images/students-laptop.jpg"
                  alt="A graduate tossing her mortarboard into the sky"
                  fill
                  sizes="(max-width: 640px) 45vw, 35vw"
                />
              </div>
              <figcaption>
                <span>03 / New beginnings</span>
                <h3>Celebrate your next chapter.</h3>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      <FAQ />
      <EnquiryBanner />
    </PageLayout>
  );
}
