import type { MetadataRoute } from "next";
import { programmes } from "../lib/programmes";

const siteUrl = "https://bscglobe.co.uk";

const routes = [
  "",
  "/about",
  "/admissions",
  "/contact",
  "/programmes",
  "/programmes/qs-undergraduate-pathway",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...routes.map((route) => ({
      url: `${siteUrl}${route}`,
    })),
    ...programmes.map(({ slug }) => ({
      url: `${siteUrl}/programmes/${slug}`,
    })),
  ];
}
