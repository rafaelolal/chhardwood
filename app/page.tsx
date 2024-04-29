import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-0">
      <div
        className="wood-bg pt-5 border-bottom border-top border-light border-3"
        style={{ height: "fit-content" }}
      >
        <div className="container py-5 text-center">
          <div className="position-relative logo mx-auto d-block">
            <Image
              src="/chhardwood/images/logo.png"
              fill
              style={{ objectFit: "contain" }}
              alt="CH Hardwood Floors Logo"
            />
          </div>

          <h2 className="text-tertiary fs-6 pt-4">TIMELESS ELEGANCE</h2>
          <h2 className="text-tertiary fs-7">MEETS EXCEPTIONAL</h2>
          <h2 className="text-light fs-3 pb-4">CRAFTSMANSHIP</h2>
          <Link href="/services" className="btn btn-tertiary m-2">
            Our Services
          </Link>
          <Link href="/contact" className="btn btn-tertiary m-2">
            Contact Us
          </Link>

          <div className="py-4">
            <a
              className="mx-2"
              href="https://www.instagram.com/ch_hardwoodfloors/"
            >
              <Image
                src="/chhardwood/icons/instagram.png"
                width={35}
                height={35}
                alt="Instagram"
              />
            </a>
            <a
              className="mx-2"
              href="https://www.facebook.com/chhardwoodfloors"
            >
              <Image
                src="/chhardwood/icons/facebook.png"
                width={35}
                height={35}
                alt="Facebook"
              />
            </a>
            <a className="mx-2" href="">
              <Image
                src="/chhardwood/icons/phone-call.png"
                width={35}
                height={35}
                alt="Phone Number"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="row bg-white px-4 py-5">
        <div className="col d-none d-sm-flex">
          <Image
            className="ms-auto me-4"
            src="/chhardwood/images/test.jpg"
            height={400}
            width={400}
            alt="Paint bucket"
          />
        </div>
        <div className="col d-flex flex-column">
          <h1 className="text-primary text-center text-sm-left fs-4">
            Our Story <a className="text-secondary fs-1">|</a>
          </h1>

          <p className="mb-5 text-center text-sm-left body-text p-0">
            With a passion for natural beauty and a commitment to excellence, we
            take pride in transforming spaces into stunning showcases with our
            exquisite hardwood flooring solutions.
          </p>

          <div
            className="position-relative d-block d-sm-none"
            style={{ width: "100%", height: "300px" }}
          >
            <Image
              src="/chhardwood/images/paint.jpg"
              alt="Paint Bucket"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="triangle-with-partial-borders mt-5 w-100">
            <p className="py-3 m-0 fs-6 text-primary text-center">
              Our Promise to You
            </p>
            <div className="text-dark fs-8 text-center">
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
      </div>

      <div className="row wood-bg py-5 m-0 ">
        <h6 className="text-light text-center p-3 p-sm-5 fs-6">
          LET US TAKE CARE OF YOUR NEEDS, SO YOU CAN FOCUS ON WHAT IS IMPORTANT
        </h6>
        <Link href="/gallery" className="btn btn-tertiary mx-auto my-3">
          View Our Work
        </Link>
      </div>
      <div className="row bg-light py-5"></div>
    </main>
  );
}
