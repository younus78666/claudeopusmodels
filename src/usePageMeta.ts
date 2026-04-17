import { useEffect } from "react";
import { siteUrl } from "./content";

export type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  schema?: Record<string, unknown> | Record<string, unknown>[];
};

function upsertMetaByName(name: string, content: string) {
  let element = document.head.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    element.name = name;
    document.head.append(element);
  }

  element.content = content;
}

function upsertMetaByProperty(property: string, content: string) {
  let element = document.head.querySelector(
    `meta[property="${property}"]`,
  ) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.append(element);
  }

  element.content = content;
}

function upsertCanonical(href: string) {
  let element = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";
    document.head.append(element);
  }

  element.href = href;
}

function upsertStructuredData(schema?: Record<string, unknown> | Record<string, unknown>[]) {
  const scriptId = "route-schema";
  const existing = document.getElementById(scriptId);

  if (!schema) {
    if (existing) {
      existing.remove();
    }

    return;
  }

  const script = existing ?? document.createElement("script");
  script.id = scriptId;
  script.setAttribute("type", "application/ld+json");
  script.textContent = JSON.stringify(schema);

  if (!existing) {
    document.head.append(script);
  }
}

export function usePageMeta(meta: PageMetaInput) {
  useEffect(() => {
    const canonicalUrl = meta.path === "/" ? siteUrl : `${siteUrl}${meta.path}`;

    document.title = meta.title;
    upsertMetaByName("description", meta.description);
    upsertMetaByName("twitter:title", meta.title);
    upsertMetaByName("twitter:description", meta.description);
    upsertMetaByProperty("og:title", meta.title);
    upsertMetaByProperty("og:description", meta.description);
    upsertMetaByProperty("og:url", canonicalUrl);
    upsertMetaByProperty("og:type", meta.type ?? "website");
    upsertCanonical(canonicalUrl);
    upsertStructuredData(meta.schema);
  }, [meta]);
}

