import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bscglobe.co.uk"),
  title: {
    default: "BSC Globe Education UK | A world of possibility",
    template: "%s | BSC Globe Education UK",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "BSC Globe Education UK",
    images: [
      {
        url: "/images/student-study.jpg",
        width: 3800,
        height: 2138,
        alt: "Students collaborating and learning together",
      },
    ],
  },
  description:
    "Explore British education pathways, business programmes, Cambridge English preparation and professional development with BSC Globe Education UK.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "BSC Globe Education UK | A world of possibility",
    description:
      "Explore British education pathways, business programmes, Cambridge English preparation and professional development with BSC Globe Education UK.",
    images: ["/images/student-study.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "BSC Globe Education UK",
    url: "https://bscglobe.co.uk",
    logo: "https://bscglobe.co.uk/images/logo.png",
    email: "admissions@bscglobe.co.uk",
    telephone: "+44 7903 930607",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1 Beauchamp Court, 10 Victors Way",
      addressLocality: "Barnet",
      addressRegion: "Hertfordshire",
      postalCode: "EN5 5TZ",
      addressCountry: "GB",
    },
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${outfit.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
