import type { Metadata } from "next";
import "./ui/custom.scss";
import { inter } from "./ui/fonts";
import { krona_one } from "./ui/fonts";
import Navbar from "./ui/navbar";
import Script from "next/script";
import Footer from "./ui/footer";
import QuickModal from "./ui/quick-modal";
import { GoogleAnalytics } from "@next/third-parties/google";

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

        <GoogleAnalytics gaId={process.env.GOOGLE_TAG_MANAGER_ID!} />
      </html>
    </>
  );
}
