import type { Metadata } from "next";
import { PageIntro, PageLayout } from "../../components/site-chrome";

export const metadata: Metadata = { title: "Privacy notice" };

export default function PrivacyPage() {
  return (
    <PageLayout>
      <PageIntro
        eyebrow="Legal information"
        title="Privacy notice"
        description="How BSC Globe Education UK should handle personal information submitted through this website."
      />
      <LegalContent title="Privacy notice">
        <p>
          This page is a clear starting point for the approved privacy notice.
          Before launch, the final text should be reviewed and approved by BSC
          Globe Education UK and its appointed data protection adviser.
        </p>
        <h2>Information we may collect</h2>
        <p>
          When you make an enquiry, we may collect your name, contact details,
          country of residence, programme interest, qualifications and the
          information you choose to include in your message.
        </p>
        <h2>How information is used</h2>
        <p>
          Information may be used to respond to enquiries, assess programme
          suitability, provide admissions guidance and communicate requested
          updates.
        </p>
        <h2>Your choices</h2>
        <p>
          You should be able to request access to, correction of or deletion of
          personal information, subject to applicable law. Contact Admissions
          using the details on the Contact page.
        </p>
        <h2>Before publication</h2>
        <p>
          Confirm the data controller, retention periods, lawful bases,
          processors, international transfers, cookie use and complaint route in
          the approved legal version.
        </p>
      </LegalContent>
    </PageLayout>
  );
}

function LegalContent({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="legal-content mx-auto max-w-3xl px-6 py-16 lg:px-10 lg:py-24">
      <div className="border-l-4 border-[#e8b94f] pl-6 text-sm leading-7 text-[#102d4d]/70 sm:pl-9">
        <p className="mb-10 text-xs font-bold uppercase tracking-[0.18em] text-[#cb0f1a]">
          {title}
        </p>
        {children}
      </div>
    </section>
  );
}
