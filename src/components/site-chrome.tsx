import Image from "next/image";
import Link from "next/link";
import logo from "../images/logo.png";
import { Header } from "./navigation";
import { Icon } from "./icons";
export { Header } from "./navigation";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Link href="/" className="brand">
            <Image
              src={logo}
              alt=""
              width={57}
              height={60}
              className="brand-logo"
            />
            <span>
              BSC GLOBE<small>EDUCATION UK</small>
            </span>
          </Link>
          <p>
            A British foundation.
            <br />
            An international future.
          </p>
          <span className="footer-location">
            <Icon name="globe" /> Connected by education.
          </span>
        </div>
        <div>
          <h2>Find your future</h2>
          <Link href="/programmes">Explore programmes</Link>
          <Link href="/programmes/qs-undergraduate-pathway">
            Undergraduate pathway
          </Link>
          <Link href="/programmes/mba">Postgraduate study</Link>
          <Link href="/programmes/cambridge-english">
            English & communication
          </Link>
        </div>
        <div>
          <h2>Get to know us</h2>
          <Link href="/about">About BSC Globe</Link>
          <Link href="/admissions">Admissions guidance</Link>
          <Link href="/admissions#faqs">Your questions answered</Link>
          <Link href="/contact">Contact us</Link>
        </div>
        <div>
          <h2>Start a conversation</h2>
          <a href="tel:+447903930607">+44 7903 930607</a>
          <a href="mailto:admissions@bscglobe.co.uk">
            admissions@bscglobe.co.uk
          </a>
          <address>
            1 Beauchamp Court, 10 Victors Way
            <br />
            Barnet, Hertfordshire, EN5 5TZ
            <br />
            United Kingdom
          </address>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} BSC Globe Education UK</span>
        <div>
          <Link href="/privacy">Privacy notice</Link>
          <Link href="/terms">Terms of use</Link>
          <a href="#main-content">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
  photo,
}: {
  eyebrow: string;
  title: string;
  description: string;
  photo?: { src: string; alt: string; position?: string };
}) {
  return (
    <section className={`page-intro${photo ? " page-intro-with-photo" : ""}`}>
      <div className="container">
        <Link href="/" className="breadcrumb">
          Home <Icon name="chevron" width={12} height={12} />{" "}
          <span>{eyebrow}</span>
        </Link>
        <div className={photo ? "intro-photo-layout" : undefined}>
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p className="intro-description">{description}</p>
          </div>
          {photo && (
            <div className="intro-photo">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                preload
                sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1440px) 43vw, 580px"
                style={{ objectPosition: photo.position }}
              />
            </div>
          )}
        </div>
      </div>
      <div className="intro-orbit" aria-hidden="true" />
    </section>
  );
}

export function EnquiryBanner() {
  return (
    <section className="enquiry-banner">
      <div className="container">
        <div>
          <p className="eyebrow">Your next chapter starts here</p>
          <h2>
            Big ambitions?
            <br />
            <span>Let’s make a plan.</span>
          </h2>
        </div>
        <div>
          <p>
            Tell us where you are now and where you want to go. We’ll help you
            explore the next step.
          </p>
          <Link href="/contact" className="button button-white">
            Talk to Admissions <Icon name="diagonal" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  );
}
