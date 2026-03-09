import React, { useEffect } from "react";

function upsertMeta(attr, key, value) {
  let tag = document.head.querySelector(`${attr}[${key}="${value}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(key, value);
    document.head.appendChild(tag);
  }
  return tag;
}

function upsertLink(rel, href) {
  let link = document.head.querySelector(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

export default function Seo({ title, description, canonicalPath, image, noindex }) {
  useEffect(() => {
    if (title) {
      document.title = title;
      const ogTitle = upsertMeta("meta", "property", "og:title");
      ogTitle.setAttribute("content", title);
      const twTitle = upsertMeta("meta", "name", "twitter:title");
      twTitle.setAttribute("content", title);
    }
    if (description) {
      const desc = upsertMeta("meta", "name", "description");
      desc.setAttribute("content", description);
      const ogDesc = upsertMeta("meta", "property", "og:description");
      ogDesc.setAttribute("content", description);
      const twDesc = upsertMeta("meta", "name", "twitter:description");
      twDesc.setAttribute("content", description);
    }
    const url = canonicalPath ? `${window.location.origin}${canonicalPath}` : window.location.href;
    const ogUrl = upsertMeta("meta", "property", "og:url");
    ogUrl.setAttribute("content", url);
    upsertLink("canonical", url);
    const ogType = upsertMeta("meta", "property", "og:type");
    ogType.setAttribute("content", "website");
    const twCard = upsertMeta("meta", "name", "twitter:card");
    twCard.setAttribute("content", "summary_large_image");
    if (image) {
      const ogImage = upsertMeta("meta", "property", "og:image");
      ogImage.setAttribute("content", image);
      const twImage = upsertMeta("meta", "name", "twitter:image");
      twImage.setAttribute("content", image);
    }
    if (noindex) {
      const robots = upsertMeta("meta", "name", "robots");
      robots.setAttribute("content", "noindex,nofollow");
    }
  }, [title, description, canonicalPath, image, noindex]);

  return null;
}
