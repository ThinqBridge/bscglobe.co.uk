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
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${outfit.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
