import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CH Hardwood Floors",
  description:
    "CH Hardwood Floors is a flooring company in the Tri-State Area.",
  keywords:
    "flooring, hardwood, wood, floors, installation, refinishing, sanding, repair, Tri-State Area, New York, Pennsylvania, South Jersey",
};

export default function Home() {
  return (
    <>
      <section
        className="wood-bg-2 pt-2 border-bottom border-dark border-4"
        style={{ height: "fit-content" }}
      >
        <div className="container py-5 text-center">
          <div className="position-relative mx-auto d-block">
            <Image
              src="/chhardwood/images/logo.png"
              width={150}
              height={150}
              style={{ objectFit: "contain" }}
              alt="CH Hardwood Floors Logo"
            />
          </div>

          <h3 className="text-tertiary fw-semibold fs-6 pt-4">
            TIMELESS ELEGANCE
          </h3>

          <h3 className="text-tertiary fw-semibold fs-7">MEETS EXCEPTIONAL</h3>

          <h3 className="fw-semibold fs-3 pb-4">CRAFTSMANSHIP</h3>

          <Link href="/services" className="btn btn-tertiary m-2">
            Our Services
          </Link>

          <Link href="/contact" className="btn btn-tertiary m-2">
            Contact Us
          </Link>

          <div className="py-4">
            <Link
              className="mx-2"
              href="https://www.instagram.com/ch_hardwoodfloors/"
            >
              <Image
                src="/chhardwood/icons/instagram.png"
                width={35}
                height={35}
                alt="Instagram"
              />
            </Link>

            <Link
              className="mx-2"
              href="https://www.facebook.com/chhardwoodfloors"
            >
              <Image
                src="/chhardwood/icons/facebook.png"
                width={35}
                height={35}
                alt="Facebook"
              />
            </Link>

            <Link className="mx-2" href="/contact">
              <Image
                src="/chhardwood/icons/phone-call.png"
                width={35}
                height={35}
                alt="Phone Number"
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="container-fluid bg-light py-5 text-center">
        <div className="row">
          <div className="col d-none d-sm-block my-auto">
            <Image
              src="/chhardwood/images/test.jpg"
              height={400}
              width={400}
              alt="White walls dark shiny floor"
            />
          </div>
        </div>

        <div className="col">
          <h1 className="text-primary text-sm-left">
            About Us <span className=" fw-bold">|</span>
          </h1>

          <p className="text-sm-left px-3">
            CHhardwood has been transforming homes across the tri-state area for
            over 15 years. Born in New Jersey, we have expanded our services to
            include South Jersey, Pennsylvania, and New York. Our expert team
            specializes in installation, refinishing, and repair of hardwood,
            vinyl, laminate, carpet, and COREtec flooring. We have a solution
            for every style and budget. With a commitment to exceptional
            craftsmanship and customer service, CHhardwood is dedicated to
            making your dream floors a reality.
          </p>

          <div className="d-sm-none my-5">
            <Image
              src="/chhardwood/images/paint.jpg"
              alt="Paint Bucket"
              width={300}
              height={300}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="border border-4 border-dark mx-3">
            <h2 className="py-3 fs-6 text-primary text-center">
              Our Promise to You
            </h2>

            <div className="text-dark">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#46230D"
                  className="bi bi-check-lg me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                </svg>
                Satisfaction Guaranteed
              </p>

              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#46230D"
                  className="bi bi-check-lg me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                </svg>
                Exceeding expectations
              </p>

              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#46230D"
                  className="bi bi-check-lg me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                </svg>
                Commitment to quality
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid wood-bg text-center py-5">
        <div className="row">
          <h3 className="text-light text-center px-3 fs-6">
            LET US TAKE CARE OF YOUR NEEDS, SO YOU CAN FOCUS ON WHAT IS
            IMPORTANT
          </h3>

          <Link href="/gallery" className="btn btn-tertiary mx-auto my-3">
            View Our Work
          </Link>
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container text-center px-3">
          <h2 className="fs-1 text-primary p-3 p-sm-5 fs-4">
            Our Story <span className="text-secondary fw-bold">|</span>
          </h2>

          <p>
            Fifteen years ago, in a small New Jersey town, Higor embarked on a
            journey driven by passion and sawdust. He founded CHhardwood, a
            flooring company fueled by his dedication to quality craftsmanship
            and customer satisfaction. Starting with a modest workshop and a
            handful of clients, Higor poured his heart into every project,
            meticulously installing and refinishing floors, transforming houses
            into homes.
          </p>

          <p>
            CHhardwood&rsquo;s reputation for excellence quickly spread
            throughout New Jersey. Higor&rsquo;s meticulous attention to detail
            and personalized approach earned him the trust and loyalty of his
            clients. As demand grew, so did his vision. He saw an opportunity to
            expand his services beyond his local community, bringing
            CHhardwood&rsquo;s expertise to a wider audience.
          </p>

          <p>
            With unwavering determination, Higor extended CHhardwood&rsquo;s
            reach to South Jersey, Pennsylvania, and New York. He carefully
            selected skilled craftsmen who shared his passion and commitment to
            quality. Today, CHhardwood boasts a team of dedicated professionals,
            each contributing to the company&rsquo;s success. From the initial
            consultation to the final installation, CHhardwood ensures a
            seamless and stress-free experience for every client.
          </p>

          <p>
            Higor&rsquo;s journey, fueled by passion and sawdust, has
            transformed CHhardwood into a leading flooring company across the
            tri-state area. His dedication to quality and customer service
            remains the cornerstone of the company&rsquo;s success. As
            CHhardwood continues to grow, Higor&rsquo;s vision remains clear -
            to create beautiful, lasting floors that enhance homes and inspire
            joy, one plank at a time.
          </p>
        </div>
      </section>
    </>
  );
}
