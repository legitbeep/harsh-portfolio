import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "harsh-portfolio-b7zxzkqk2-legitbeeps-projects.vercel.app",
  };
}
