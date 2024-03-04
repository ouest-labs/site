import "@/styles/globals.css";

import { poppins, space_type, vcr } from "@/utils/fonts";

import { Analytics } from "@vercel/analytics/react";
import { ENV } from "@/utils/constants/env";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import clsx from "clsx";



export const metadata: Metadata = {
  metadataBase: new URL(ENV.NEXT_PUBLIC_WEBSITE_URL),
  title: {
    default: "Ouest Lab",
    template: "%s | Ouest Lab",
  },
  description: "Ouest Lab est un collectif de développeurs passionnés par la finance et la technologie.",
  category: "Technology, Finance, Web Development",
  icons: {
    icon: "/favicons/favicon.svg",
    shortcut: "/favicons/favicon.svg",
    },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Ouest Lab",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={clsx(
          poppins.className,
          space_type.variable,
          vcr.variable,
          "h-screen w-screen antialiased"
        )}
      >
         {children}
         <Footer />
        {process.env.NODE_ENV === "production" && <SpeedInsights /> && (
          <Analytics />
        )}
      </body>
    </html>
  );
}
