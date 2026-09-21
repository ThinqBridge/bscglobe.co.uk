import Link from "next/link";
import { PageLayout } from "../components/site-chrome";
import { Icon } from "../components/icons";
export default function NotFound() {
  return (
    <PageLayout>
      <section className="section">
        <div className="container empty-state">
          <p className="eyebrow">404 — Page not found</p>
          <h1 className="section-title">Let’s find your way.</h1>
          <p style={{ marginTop: 24 }}>
            This page may have moved. Your next step is still here.
          </p>
          <Link href="/programmes" className="button button-navy">
            Explore programmes <Icon name="arrow" />
          </Link>
          <Link href="/" className="text-link" style={{ marginLeft: 24 }}>
            Back to home
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
