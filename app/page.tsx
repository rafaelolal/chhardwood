import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FACEBOOK, INSTAGRAM } from "./lib/constants";
import CheckIcon from "./ui/check-icon";
import FacebookIcon from "./ui/facebook-icon";
import { HomeReviewIcon } from "./ui/home-review-icon";
import InstagramIcon from "./ui/instagram-icon";
import PhoneIcon from "./ui/phone-icon";

export const metadata: Metadata = {
  title: "CH Floors",
  description:
    "CH Floors is a flooring company in the New Jersey and broader area.",
  keywords:
    "flooring, hardwood, wood, floors, installation, refinishing, sanding, repair, Tri-State Area, New York, Pennsylvania, South Jersey",
};

export default function Home() {
  return (
    <>
      <header
        className="wood-bg pt-2 border-bottom border-light border-5"
        style={{ height: "fit-content" }}
      >
        <div className="container py-5 text-center">
          <div className="mx-auto">
            <Image
              src="/images/logo.png"
              width={150}
              height={150}
              style={{ objectFit: "contain", filter: "saturate(60%)" }}
              alt="CH Floors Logo"
            />
          </div>

          <h3 className="text-quaternary fw-semibold fs-6 pt-4">
            TIMELESS ELEGANCE
          </h3>

          <h3 className="text-quaternary  fw-semibold fs-7">
            MEETS EXCEPTIONAL
          </h3>

          <h3 className="fw-semibold fs-3 pb-4">CRAFTSMANSHIP</h3>

          <Link href="/services" className="btn btn-tertiary m-2">
            Our Services
          </Link>

          <Link
            href="/contact"
            className="btn btn-danger m-2 fw-bold jumping text-black"
          >
            Get Free Quote
          </Link>

          <div className="py-4">
            <Link className="mx-2" href={INSTAGRAM}>
              <InstagramIcon className="fs-1" />
            </Link>

            <Link className="mx-2" href={FACEBOOK}>
              <FacebookIcon className="fs-1" />
            </Link>

            <Link className="mx-2" href="/contact">
              <PhoneIcon className="fs-1" />
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="container-fluid py-5 text-center">
          <div className="row">
            <div className="col-12 col-sm-6 d-none d-sm-block my-auto">
              <Image
                src="/images/test.jpg"
                height={400}
                width={400}
                alt="White walls dark shiny floor"
              />
            </div>

            <div className="col-12 col-sm-6">
              <h1 className="text-primary text-sm-left">
                About Us <span className="text-tertiary fw-bold">|</span>
              </h1>

              <p className="text-sm-left px-3">
                CH Floors has been transforming homes across the tri-state area
                for over 15 years. Born in New Jersey, we have expanded our
                services to include South Jersey, Pennsylvania, and New York.
                Our expert team specializes in installation, refinishing, and
                repair of hardwood, vinyl, laminate, carpet, and COREtec
                flooring. We have a solution for every style and budget. With a
                commitment to exceptional craftsmanship and customer service, CH
                Floors is dedicated to making your dream floors a reality.
              </p>

              <div className="d-sm-none my-5">
                <Image
                  src="/images/side-mobile-showroom.jpeg"
                  alt="Side view of the mobile showroom van."
                  width={300}
                  height={300}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="border border-4 border-secondary mx-3">
                <h2 className="py-3 fs-6 text-primary text-center">
                  Our Promise to You
                </h2>

                <div className="text-dark">
                  <p>
                    <CheckIcon className="fs-1" />
                    Satisfaction Guaranteed
                  </p>

                  <p>
                    <CheckIcon className="fs-1" />
                    Exceeding expectations
                  </p>

                  <p>
                    <CheckIcon className="fs-1" />
                    Commitment to quality
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid wood-bg-2 text-center py-5 border-top border-bottom border-5 border-light">
          <div className="row">
            <h3 className=" text-center px-3 fs-6 fw-medium">
              LET US TAKE CARE OF YOUR NEEDS, SO YOU CAN FOCUS ON WHAT IS
              IMPORTANT
            </h3>

            <div className="mx-auto mt-3">
              <HomeReviewIcon />

              <Link
                href="/contact"
                className="btn btn-danger fw-bold jumping text-black"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container text-center px-3">
            <h2 className="fs-1 text-primary p-3 p-sm-5 fs-4">
              Our Story <span className="text-tertiary fw-bold">|</span>
            </h2>

            <p>
              Fifteen years ago, in a small New Jersey town, Higor embarked on a
              journey driven by passion and sawdust. He founded CH Floors, a
              flooring company fueled by his dedication to quality craftsmanship
              and customer satisfaction. Starting with a modest workshop and a
              handful of clients, Higor poured his heart into every project,
              meticulously installing and refinishing floors, transforming
              houses into homes.
            </p>

            <p>
              CH Floors&rsquo;s reputation for excellence quickly spread
              throughout New Jersey. Higor&rsquo;s meticulous attention to
              detail and personalized approach earned him the trust and loyalty
              of his clients. As demand grew, so did his vision. He saw an
              opportunity to expand his services beyond his local community,
              bringing CH Floors&rsquo;s expertise to a wider audience.
            </p>

            <p>
              With unwavering determination, Higor extended CH Floors&rsquo;s
              reach to South Jersey, Pennsylvania, and New York. He carefully
              selected skilled craftsmen who shared his passion and commitment
              to quality. Today, CH Floors boasts a team of dedicated
              professionals, each contributing to the company&rsquo;s success.
              From the initial consultation to the final installation, CH Floors
              ensures a seamless and stress-free experience for every client.
            </p>

            <p>
              Higor&rsquo;s journey, fueled by passion and sawdust, has
              transformed CH Floors into a leading flooring company across the
              tri-state area. His dedication to quality and customer service
              remains the cornerstone of the company&rsquo;s success. As CH
              Floors continues to grow, Higor&rsquo;s vision remains clear - to
              create beautiful, lasting floors that enhance homes and inspire
              joy, one plank at a time.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
