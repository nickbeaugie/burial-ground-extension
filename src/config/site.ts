import ogImage from "@/assets/og-image.png";

export const withBase = (path: string) => {
  if (!path.startsWith("/") || path.startsWith("//")) {
    return path;
  }

  const baseUrl = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  if (path.startsWith(baseUrl)) {
    return path;
  }

  return `${baseUrl}${path.replace(/^\/+/, "")}`;
};

export const siteConfig = {
  name: "Tintern Burial Extension",
  description:
    "A new facility for the village - an extension to the burial ground at St Michael's Church, Tintern, Monmouthshire, Wales.",
  url: "https://nickbeaugie.github.io/burial-ground-extension/",
  lang: "en",
  locale: "en_GB",
  ogImage: ogImage,
  navLinks: [
    { text: "Home", href: withBase("/") },
    { text: "The idea", href: withBase("/idea/") },
    { text: "More Details", href: withBase("/more-details/") },
    // { text: "Pricing", href: withBase("/pricing/") },
    { text: "Blog", href: withBase("/blog/") },
    { text: "Contact", href: withBase("/contact/") },
    // { text: "Widgets", href: withBase("/widgets/") },
    // {
    //   text: "Templates",
    //   href: withBase("/templates/"),
    //   links: [
    //     { text: "Personal Portfolio", href: withBase("/templates/portfolio/") },
    //     { text: "SaaS Landing", href: withBase("/templates/saas/") },
    //   ],
    // },
  ],
};
