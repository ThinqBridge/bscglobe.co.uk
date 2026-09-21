import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  EnquiryBanner,
  PageIntro,
  PageLayout,
} from "../../../components/site-chrome";
import { programmeImages } from "../../../lib/programme-images";
import { Icon } from "../../../components/icons";
import { getProgramme, programmes } from "../../../lib/programmes";

export function generateStaticParams() {
  return programmes.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const programme = getProgramme((await params).slug);
  return {
    title: programme?.title ?? "Programme not found",
    description: programme?.description,
    alternates: {
      canonical: programme ? `/programmes/${programme.slug}` : "/programmes",
    },
  };
}
export default async function ProgrammePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const programme = getProgramme((await params).slug);
  if (!programme) notFound();
  return (
    <PageLayout>
      <PageIntro
        photo={programmeImages[programme.slug]}
        eyebrow={programme.category}
        title={programme.title}
        description={programme.description}
      />
      <section className="section">
        <div className="container">
          <div className="detail-layout">
            <div className="detail-content">
              <nav
                className="course-jump-links"
                aria-label="Programme sections"
              >
                <a href="#overview">Overview</a>
                {programme.modules && <a href="#modules">What you’ll learn</a>}
                <a href="#entry">Entry requirements</a>
                <a href="#progression">Progression</a>
              </nav>
              <section id="overview">
                <h2>Study with purpose.</h2>
                <p>{programme.overview}</p>
              </section>
              <section>
                <h2>What makes this programme?</h2>
                <div className="feature-grid">
                  {programme.features.map((feature) => (
                    <div key={feature} className="feature-item">
                      <Icon name="check" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
              {programme.modules && (
                <section id="modules">
                  <h2>What you’ll learn</h2>
                  <ol className="module-list">
                    {programme.modules.map((module, index) => (
                      <li key={module}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        {module}
                      </li>
                    ))}
                  </ol>
                </section>
              )}
              <section id="entry">
                <h2>Your starting point</h2>
                <ul className="entry-list">
                  {programme.entry.map((item) => (
                    <li key={item}>
                      <Icon name="check" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
              <section id="progression">
                <h2>Where could this take you?</h2>
                <p>{programme.progression}</p>
                <Link href="/contact" className="text-link">
                  Discuss your options <Icon name="arrow" />
                </Link>
              </section>
            </div>
            <aside className="course-sidebar">
              <p className="eyebrow">At a glance</p>
              <h2>Your programme</h2>
              <dl>
                <div>
                  <dt>Duration</dt>
                  <dd>{programme.duration}</dd>
                </div>
                <div>
                  <dt>Award / level</dt>
                  <dd>{programme.award}</dd>
                </div>
                <div>
                  <dt>Intakes, fees & delivery</dt>
                  <dd>Speak to Admissions</dd>
                </div>
              </dl>
              <Link
                href={`/contact?programme=${programme.slug}#enquiry-form`}
                className="button button-red"
              >
                Enquire about this course <Icon name="diagonal" />
              </Link>
              <p>
                We’ll help you confirm eligibility, current availability, fees
                and delivery arrangements before you apply.
              </p>
            </aside>
          </div>
          <div className="next-programmes">
            <h2>Still exploring your options?</h2>
            <Link href="/programmes" className="text-link">
              Compare all programmes <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </section>
      <EnquiryBanner />
    </PageLayout>
  );
}
