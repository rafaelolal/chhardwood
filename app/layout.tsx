import type { Metadata } from "next";
import "./ui/custom.scss";
import { inter } from "./ui/fonts";
import Navbar from "./ui/navbar";
import Script from "next/script";
import Footer from "./ui/footer";
import QuickModal from "./ui/quick-modal";
import Head from "next/head";

export const metadata: Metadata = {
  title: "CH Hardwood Floors",
  description:
    "CH Hardwood Floors is a flooring company in the Tri-State Area.",
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
      <Script src="/chhardwood/bootstrap.bundle.min.js" />

      <Head>
        <link rel="icon" href="/chhardwood/favicon.ico" key="favicon" />
      </Head>

      <html lang="en">
        <body className={inter.className}>
          <Navbar />

          <main>{children}</main>

          <QuickModal />

          <Footer />
        </body>
      </html>
    </>
  );
}
