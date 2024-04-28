import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="header-bg pt-5 border-top border-light border-3">
        <div className="container py-5 text-center">
          <div className="position-relative logo mx-auto d-block">
            <Image
              src="/images/logo.png"
              fill
              objectFit="contain"
              alt="CH Hardwood Floors Logo"
            />
          </div>

          <h2 className="text-tertiary fs-6 fs-sm-5 pt-4">TIMELESS ELEGANCE</h2>
          <h2 className="text-tertiary fs-7 fs-sm-6">MEETS EXCEPTIONAL</h2>
          <h2 className="text-light fs-3 fs-sm-4 pb-4">CRAFTSMANSHIP</h2>
          <Link href="/message" className="btn btn-tertiary mx-2">
            Our Services
          </Link>
          <Link href="/message" className="btn btn-tertiary mx-2">
            Contact Us
          </Link>

          <div className="py-4">
            <a
              className="mx-2"
              href="https://www.instagram.com/ch_hardwoodfloors/"
            >
              <Image
                src="/icons/instagram.png"
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
                src="/icons/facebook.png"
                width={35}
                height={35}
                alt="Facebook"
              />
            </a>
            <a className="mx-2" href="">
              <Image
                src="/icons/phone-call.png"
                width={35}
                height={35}
                alt="Phone Number"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="row bg-white p-5">
        <div className="col d-none d-sm-flex">
          <Image
            className="ms-auto me-4"
            src="/images/test.jpg"
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
              src="/images/paint.jpg"
              alt="Paint Bucket"
              fill
              objectFit="contain"
            />
          </div>

          <p className="pt-4 m-0 fs-6 text-primary">Our promise to you</p>
          <div className="bullet-points">
            <p>
              {" "}
              <span></span> Satisfaction Guaranteed
            </p>
            <p>
              {" "}
              <span></span> Exceeding expectations
            </p>
            <p>
              {" "}
              <span></span> Commitment to quality
            </p>
            <p>
              {" "}
              <span></span> Lorem ipsum dolor
            </p>
          </div>
        </div>
      </div>

      <div className="row wood-bg py-5 m-0 ">
        <h3 className="text-light text-center m-1 m-sm-4 p-2 p-sm-3">
          LET US TAKE CARE OF YOUR NEEDS, SO YOU CAN FOCUS ON WHAT IS IMPORTANT
        </h3>
        <Link href="/gallery" className="btn btn-secondary mx-auto my-3">
          View Our Work
        </Link>
      </div>
    </main>
  );
}
