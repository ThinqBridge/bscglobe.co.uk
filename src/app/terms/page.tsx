import type { Metadata } from "next";
import { PageIntro, PageLayout } from "../../components/site-chrome";

export const metadata: Metadata = {
  title: "Terms of use",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <PageLayout>
      <PageIntro
        eyebrow="Legal information"
        title="Terms and conditions"
        description="The terms that should govern use of the BSC Globe Education UK website and enquiry process."
      />
      <section className="legal-content mx-auto max-w-3xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="border-l-4 border-[#e8b94f] pl-6 text-sm leading-7 text-[#102d4d]/70 sm:pl-9">
          <p className="mb-10 text-xs font-bold uppercase tracking-[0.18em] text-[#cb0f1a]">
            Website terms
          </p>
          <p>
            This page is a clear starting point for the approved website terms.
            The final text should be reviewed and approved before launch.
          </p>
          <h2>Information on this website</h2>
          <p>
            Programme availability, delivery arrangements, intake dates, fees,
            entry requirements and progression routes may change. Contact
            Admissions for current information before applying or enrolling.
          </p>
          <h2>Admissions and eligibility</h2>
          <p>
            Submitting an enquiry does not guarantee admission, a place,
            progression, an award or a particular delivery arrangement.
            Individual eligibility is assessed against the applicable
            requirements.
          </p>
          <h2>Third-party organisations</h2>
          <p>
            References to University of Suffolk, Qualifications Scotland and
            Cambridge English should be read with the relevant programme and
            awarding requirements.
          </p>
          <h2>Approved legal text</h2>
          <p>
            Before publication, confirm the governing law, intellectual
            property, accessibility, liability, external links, acceptable use
            and contact details in the approved final version.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
