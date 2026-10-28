export const SITE_NAME = "TGG HUB";

export const SITE_URL = (
  process.env.TGG_HUB_SITE_URL ?? "https://tgg-hub.vercel.app"
).replace(/\/$/, "");

export const SITE_DESCRIPTION =
  "TGG HUB connects independent products, tools and experiments across Web3 and wider technology, without forcing them into one product.";