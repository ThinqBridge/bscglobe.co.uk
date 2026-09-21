import type { Metadata } from "next";
import Image from "next/image";
import {
  EnquiryBanner,
  PageIntro,
  PageLayout,
} from "../../components/site-chrome";
import { academicProfiles } from "../../lib/academic-profiles";

export const metadata: Metadata = {
  title: "Academic Profiles",
  description:
    "Meet the academics, researchers and business experts supporting learning at BSC Globe Education UK.",
  alternates: { canonical: "/academic-profiles" },
};

export default function AcademicProfilesPage() {
  return (
    <PageLayout>
      <PageIntro
        photo={{
          src: "/images/lecture-discussion.jpg",
          alt: "Students and an academic discussing ideas together",
          position: "center 45%",
        }}
        eyebrow="Our academic community"
        title="Experience that brings learning to life."
        description="Meet the academics, researchers and business leaders who bring international perspective, practical experience and fresh thinking to our programmes."
      />
      <section className="section academic-section">
        <div className="container">
          <div className="section-heading academic-heading">
            <div>
              <p className="eyebrow">Meet the people behind the learning</p>
              <h2 className="section-title">
                Academic
                <br />
                <em>profiles.</em>
              </h2>
            </div>
            <p className="section-description">
              Our academic community brings together research, professional
              experience and an international perspective on business education.
            </p>
          </div>
          <div className="academic-grid">
            {academicProfiles.map((profile) => (
              <article className="academic-card" key={profile.name}>
                <div className="academic-portrait">
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    fill
                    sizes="(max-width: 760px) calc(100vw - 104px), (max-width: 1100px) 42vw, 590px"
                  />
                </div>
                <header>
                  <h3>{profile.name}</h3>
                  {profile.qualifications && (
                    <p className="academic-qualifications">
                      {profile.qualifications}
                    </p>
                  )}
                </header>
                <p className="academic-bio">{profile.bio}</p>
                <div className="academic-specialisms">
                  <p className="academic-label">
                    Subject / research specialisms
                  </p>
                  <ul>
                    {profile.specialisms.map((specialism) => (
                      <li key={specialism}>{specialism}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <EnquiryBanner />
    </PageLayout>
  );
}
