import Image from "next/image";
import type { Metadata } from "next";
import { PageIntro, PageLayout } from "../../components/site-chrome";
import { EnquiryForm } from "../../components/enquiry-form";
import { Icon } from "../../components/icons";

export const metadata: Metadata = {
  title: "Talk to Admissions",
  description:
    "Contact BSC Globe Education UK to discuss programmes, entry requirements and your next step in education.",
  alternates: { canonical: "/contact" },
};
export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ programme?: string | string[] }>;
}) {
  const { programme } = await searchParams;
  return (
    <PageLayout>
      <PageIntro
        eyebrow="Start a conversation"
        title="Big ambitions start with a hello."
        description="Tell us where you are now and where you want to go. Our Admissions team can help you explore your options and take the next step with confidence."
      />
      <section className="section">
        <div className="container contact-layout">
          <div className="contact-copy">
            <p className="eyebrow">We’re here to help</p>
            <h2>
              A person to talk to.
              <br />A path to explore.
            </h2>
            <p>
              Ask us about your programme options, entry requirements, current
              fees or the next available intake.
            </p>
            <div className="contact-methods">
              <div className="contact-method">
                <Icon name="phone" />
                <div>
                  <strong>Give us a call</strong>
                  <a href="tel:+447903930607">+44 7903 930607</a>
                </div>
              </div>
              <div className="contact-method">
                <Icon name="mail" />
                <div>
                  <strong>Send us an email</strong>
                  <a href="mailto:admissions@bscglobe.co.uk">
                    admissions@bscglobe.co.uk
                  </a>
                </div>
              </div>
              <div className="contact-method">
                <Icon name="pin" />
                <div>
                  <strong>UK address</strong>
                  <address>
                    1 Beauchamp Court, 10 Victors Way
                    <br />
                    Barnet, Hertfordshire
                    <br />
                    EN5 5TZ, United Kingdom
                  </address>
                </div>
              </div>
            </div>
            <div className="contact-photo">
              <Image
                src="/images/graduates-campus.jpg"
                alt="Two students discussing their work together at a laptop"
                fill
                sizes="(max-width: 900px) calc(100vw - 40px), 38vw"
              />
            </div>
            <div className="contact-note">
              Not sure where to start? That’s what we’re here for. Select “I’d
              like help choosing a programme” and tell us a little about your
              goals.
            </div>
          </div>
          <EnquiryForm
            initialProgramme={typeof programme === "string" ? programme : ""}
          />
        </div>
      </section>
    </PageLayout>
  );
}
