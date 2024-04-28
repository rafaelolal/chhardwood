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
              style={{ objectFit: "contain" }}
              alt="CH Hardwood Floors Logo"
            />
          </div>

          <h6 className="text-tertiary fs-6 fs-sm-5 pt-4">TIMELESS ELEGANCE</h6>
          <h6 className="text-tertiary fs-7 fs-sm-6">MEETS EXCEPTIONAL</h6>
          <h6 className="text-light fs-3 fs-sm-4 pb-4">CRAFTSMANSHIP</h6>
          <Link href="/contact" className="btn btn-tertiary">
            Contact us
          </Link>

          <div className="row justify-content-between mt-4">
            <div className="col-12 col-sm-6">
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

            <div className="col-12 col-sm-6 d-none d-sm-block">
              <Link href="/message" className="btn btn-tertiary">
                Contact Us
              </Link>
            </div>
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
          <h6 className="text-primary text-center text-sm-left fs-4">
            Our Story <a className="text-secondary fs-1">|</a>
          </h6>

          <h6 className="mb-5 text-center text-sm-left body-text">
            With a passion for natural beauty and a commitment to excellence, we
            take pride in transforming spaces into stunning showcases with our
            exquisite hardwood flooring solutions.
          </h6>

          <div
            className="position-relative"
            style={{ width: "100%", height: "300px" }}
          >
            <Image
              className="d-block d-sm-none"
              src="/images/paint.jpg"
              alt="Paint Bucket"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          <div className="bullet-points pt-4">
            <h6>
              <span></span> Lorem ipsum dolor sit amet consecte
            </h6>
            <h6>
              <span></span> Lorem ipsum dolor
            </h6>
            <h6>
              <span></span> Lorem ipsum dolor sit amet
            </h6>
            <h6>
              <span></span> Lorem ipsum dolor sit amet consecte
            </h6>
            <h6>
              <span></span> Lorem ipsum dolor
            </h6>
          </div>
        </div>
      </div>

      <div className="row wood-bg py-5 m-0 ">
        <h6 className="text-light text-center m-1 m-sm-4 p-2 p-sm-3">
          LET US TAKE CARE OF YOUR NEEDS, SO YOU CAN FOCUS ON WHAT IS IMPORTANT
        </h6>
        <Link href="/gallery" className="btn btn-secondary mx-auto my-3">
          View Our Work
        </Link>
      </div>
    </main>
  );
}
