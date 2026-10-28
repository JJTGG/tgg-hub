import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL
} from "@/lib/site";
import "./globals.css";

const themeInitialization = `(() => {
  const root = document.documentElement;
  let preference = "system";

  try {
    const saved = window.localStorage.getItem("tgg-hub-theme");

    if (saved === "light" || saved === "dark") {
      preference = saved;
    }
  } catch {}

  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const theme =
    preference === "system"
      ? systemPrefersDark ? "dark" : "light"
      : preference;

  root.dataset.themePreference = preference;
  root.dataset.theme = theme;

  const themeColor = document.getElementById(
    "tgg-hub-theme-color"
  );

  if (themeColor) {
    themeColor.setAttribute(
      "content",
      theme === "dark" ? "#12161C" : "#F7F6F2"
    );
  }
})();`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: "TGG HUB — Different projects. Shared direction.",
    template: "%s — TGG HUB"
  },
  description: SITE_DESCRIPTION,
  robots:
    process.env.TGG_HUB_NOINDEX === "true"
      ? {
          index: false,
          follow: false
        }
      : undefined,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "TGG HUB — Different projects. Shared direction.",
    description: SITE_DESCRIPTION
  },
  twitter: {
    card: "summary",
    title: "TGG HUB — Different projects. Shared direction.",
    description: SITE_DESCRIPTION
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          id="tgg-hub-theme-color"
          name="theme-color"
          content="#F7F6F2"
        />
        <Script
          id="tgg-hub-theme-initializer"
          strategy="beforeInteractive"
        >
          {themeInitialization}
        </Script>
      </head>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}