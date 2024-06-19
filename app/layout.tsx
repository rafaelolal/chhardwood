import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import Script from "next/script";
import "./ui/custom.scss";
import { inter, krona_one } from "./ui/fonts";
import Footer from "./ui/footer";
import Navbar from "./ui/navbar";
import QuickModal from "./ui/quick-modal";

export const metadata: Metadata = {
  title: "CH Floors",
  description:
    "CH Floors is a flooring company in the New Jersey and broader area.",
  keywords:
    "flooring, hardwood, wood, floors, installation, refinishing, sanding, repair, Tri-State Area, New York, Pennsylvania, South Jersey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <head>
        <link rel="icon" href="/favicon.ico" key="favicon" />
      </head>

      <html lang="en">
        <body className={`${inter.variable} ${krona_one.variable}`}>
          <Navbar />

          <QuickModal />

          {children}

          <Footer />

          <Script src="/bootstrap.bundle.min.js" strategy="beforeInteractive" />
        </body>

        <GoogleTagManager
          gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID_2!}
        />
        <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID_2!}`}
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        {/* <GoogleAnalytics gaId={process.env.GOOGLE_TAG_MANAGER_ID!} /> */}
      </html>
    </>
  );
}
