import type { Metadata } from "next";
import "./ui/globals.css";
import "./ui/custom.scss";
import { inter } from "./ui/fonts";
import Navbar from "./ui/navbar";
import Script from "next/script";
import Footer from "./ui/footer";

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
      <head>
        <link rel="icon" href="/chhardwood/images/favicon.ico" />
      </head>

      <Script src="/chhardwood/bootstrap.bundle.min.js" />
      <Script src="https://www.instagram.com/embed.js" />

      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          <div className="container-fluid p-0 m-0">{children}</div>
          <Footer />
        </body>
      </html>
    </>
  );
}
