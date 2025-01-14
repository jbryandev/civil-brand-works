import type { Metadata } from "next";
import localFont from "next/font/local";
import { draftMode } from "next/headers";
import React from "react";

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { Footer } from "@/Footer/Component";
import { Header } from "@/Header/Component";
import { AdminBar } from "@/components/AdminBar";
import { TailwindIndicator } from "@/components/TailwindIndicator";
import { Providers } from "@/providers";
import { InitTheme } from "@/providers/Theme/InitTheme";
import { getServerSideURL } from "@/utilities/getURL";
import { mergeOpenGraph } from "@/utilities/mergeOpenGraph";
import { cn } from "@/utilities/ui";

import "./globals.css";

const fontHeading = localFont({
  src: "../../../public/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

const LayoutGuide = () => (
  <div className="absolute -top-[440px] left-0 h-[10000px] w-full bg-[url(/layout.png)] bg-center bg-no-repeat opacity-30" />
);

const GridLines = () => (
  <div className="z-1 pointer-events-none absolute top-0 h-[10000px] w-full">
    <div className="container flex h-full">
      <div className="h-full w-1/2 border-l border-r border-dotted border-slate-500" />
      <div className="h-full flex-grow border-r border-dotted border-slate-500" />
    </div>
  </div>
);

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled } = await draftMode();

  return (
    <html
      className={cn(
        GeistSans.variable,
        GeistMono.variable,
        fontHeading.variable
      )}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body className="bg-slate-50 text-slate-900">
        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />
          <LayoutGuide />
          <Header />
          {children}
          <Footer />
          <GridLines />
        </Providers>
        <TailwindIndicator />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: "summary_large_image",
    creator: "@payloadcms",
  },
};
