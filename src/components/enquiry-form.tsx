"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { programmes } from "../lib/programmes";
import { Icon } from "./icons";

const recipient = "admissions@bscglobe.co.uk";
export function EnquiryForm({
  initialProgramme = "",
}: {
  initialProgramme?: string;
}) {
  const [draft, setDraft] = useState<{ subject: string; body: string } | null>(
    null,
  );
  const [reviewing, setReviewing] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");
  const reviewHeading = useRef<HTMLHeadingElement>(null);
  const formHeading = useRef<HTMLHeadingElement>(null);
  const allowedProgramme =
    programmes.some((p) => p.slug === initialProgramme) ||
    initialProgramme === "qs-undergraduate-pathway"
      ? initialProgramme
      : "";
  function prepare(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const selected = String(data.get("programme"));
    const programme =
      selected === "qs-undergraduate-pathway"
        ? "Undergraduate pathway"
        : (programmes.find((p) => p.slug === selected)?.title ??
          "I’d like help choosing a programme");
    const field = (name: string) => String(data.get(name) ?? "").trim();
    setDraft({
      subject: `Programme enquiry: ${programme}`,
      body: `Hello BSC Globe Admissions,\n\nI’d like to discuss my study options.\n\nName: ${field("name")}\nEmail: ${field("email")}\nPhone: ${field("phone") || "Not provided"}\nCountry: ${field("country") || "Not provided"}\nProgramme: ${programme}\nHighest qualification: ${field("qualification") || "To discuss"}\n\n${field("message")}\n\nKind regards,\n${field("name")}`,
    });
    setReviewing(true);
    setCopyStatus("");
    requestAnimationFrame(() => reviewHeading.current?.focus());
  }
  async function copyDraft() {
    if (!draft) return;
    try {
      await navigator.clipboard.writeText(
        `To: ${recipient}\nSubject: ${draft.subject}\n\n${draft.body}`,
      );
      setCopyStatus("Copied. Paste the enquiry into an email to Admissions.");
    } catch {
      setCopyStatus(
        "Copy isn’t available in this browser. You can select and copy the message above instead.",
      );
    }
  }
  return (
    <div id="enquiry-form">
      <noscript>
        <p className="contact-note">
          Enable JavaScript to prepare an enquiry here, or email{" "}
          <a href="mailto:admissions@bscglobe.co.uk">
            admissions@bscglobe.co.uk
          </a>{" "}
          directly.
        </p>
        <style>{`.enquiry-form { display: none; }`}</style>
      </noscript>
      <form
        method="post"
        className="enquiry-form"
        hidden={reviewing}
        onSubmit={prepare}
      >
        <div className="form-heading">
          <h2 ref={formHeading} tabIndex={-1}>
            Let’s find your next step.
          </h2>
          <p>
            Prepare an enquiry to send from your email app. * Required fields.
          </p>
        </div>
        <div className="form-fields">
          <label>
            Full name *
            <input
              name="name"
              autoComplete="name"
              required
              maxLength={100}
              placeholder="Your full name"
            />
          </label>
          <label>
            Email address *
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={160}
              placeholder="you@example.com"
            />
          </label>
          <label>
            Telephone / WhatsApp
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              maxLength={40}
              placeholder="Include country code"
            />
          </label>
          <label>
            Country of residence
            <input
              name="country"
              autoComplete="country-name"
              maxLength={80}
              placeholder="Where you live"
            />
          </label>
          <label className="full-field">
            I’m interested in
            <select name="programme" defaultValue={allowedProgramme}>
              <option value="">I’d like help choosing a programme</option>
              <option value="qs-undergraduate-pathway">
                Undergraduate pathway
              </option>
              {programmes.map((programme) => (
                <option key={programme.slug} value={programme.slug}>
                  {programme.title}
                </option>
              ))}
            </select>
          </label>
          <label className="full-field">
            Highest qualification
            <input
              name="qualification"
              maxLength={180}
              placeholder="For example, A levels, a diploma or a degree"
            />
          </label>
          <label className="full-field">
            What would you like to know? *
            <textarea
              name="message"
              required
              rows={4}
              maxLength={1500}
              placeholder="Tell us about your goals and any questions. You can include your preferred intake or relevant experience."
            />
          </label>
        </div>
        <p className="form-notice">
          You’ll review your message before opening your email app. Your details
          are not submitted by this form. Please don’t include sensitive
          documents. <Link href="/privacy">Privacy notice</Link>
        </p>
        <button type="submit" className="button button-red">
          Review your enquiry <Icon name="arrow" />
        </button>
      </form>
      {reviewing && draft && (
        <section className="enquiry-review">
          <p className="eyebrow">One more step</p>
          <h2 ref={reviewHeading} tabIndex={-1}>
            Your enquiry is ready to review.
          </h2>
          <p>
            Nothing has been sent yet. Check your details, then open your email
            app and send the message to <strong>{recipient}</strong>.
          </p>
          <pre>{draft.body}</pre>
          <div className="review-actions">
            <a
              className="button button-red"
              href={`mailto:${recipient}?subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(draft.body)}`}
            >
              Open email app <Icon name="mail" />
            </a>
            <button className="button button-outline" onClick={copyDraft}>
              Copy enquiry
            </button>
          </div>
          <p>
            No email app configured? Copy the enquiry and paste it into your
            preferred email service.
          </p>
          <p className="review-status" role="status">
            {copyStatus}
          </p>
          <button
            className="text-link"
            onClick={() => {
              setReviewing(false);
              requestAnimationFrame(() => formHeading.current?.focus());
            }}
          >
            ← Edit your details
          </button>
        </section>
      )}
    </div>
  );
}
