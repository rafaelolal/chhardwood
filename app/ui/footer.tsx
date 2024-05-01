import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container-fluid m-0 bg-primary pt-4 px-1">
      <div className="row">
        <div className="col-12 col-md-3 py-3 text-center">
          <Image
            src="/chhardwood/images/logo.png"
            width={80}
            height={80}
            alt="CH HardWood Logo"
          />

          <h2 className="text-light fs-6">CH HardWood</h2>

          <p className="text-secondary fs-8 py-1">
            Timeless Elegance Meets Exceptional Craftsmanship
          </p>
        </div>

        <div className="col-12 col-sm-4 col-md-3 py-3 text-center text-md-start">
          <h2 className="text-light fs-6">Navigation</h2>
          <Link
            className="nav-link text-secondary fs-8 py-1"
            aria-current="page"
            href="/services"
          >
            Services
          </Link>

          <Link
            className="nav-link text-secondary fs-8 py-1"
            aria-current="page"
            href="/gallery"
          >
            Gallery
          </Link>

          <Link
            className="nav-link text-secondary fs-8 py-1"
            aria-current="page"
            href="/messages"
          >
            Send Us A Message
          </Link>

          <Link
            className="nav-link text-secondary fs-8 py-1"
            aria-current="page"
            href="/appointment"
          >
            Schedule An Appointmment
          </Link>

          <Link
            className="nav-link text-secondary fs-8 py-1"
            aria-current="page"
            href="/quote"
          >
            Get A Quote
          </Link>

          <Link
            className="nav-link text-secondary fs-8 py-1"
            aria-current="page"
            href="/help"
          >
            Help
          </Link>
        </div>

        <div className="col-12 col-sm-4 col-md-3 py-3 text-center text-md-start">
          <h2 className="text-light fs-6">Services</h2>

          <Link
            className="nav-link text-secondary fs-8 py-1"
            aria-current="page"
            href=""
          >
            Sanding, Staining, or Finish
          </Link>

          <Link
            className="nav-link text-secondary fs-8 py-1"
            aria-current="page"
            href=""
          >
            Steps:{" "}
            <span className="text-quaternary">Replacement or Installation</span>
          </Link>

          <Link
            className="nav-link text-secondary fs-8 py-1"
            aria-current="page"
            href=""
          >
            Railings:{" "}
            <span className="text-quaternary">Replacement or Installation</span>
          </Link>

          <Link
            className="nav-link text-secondary fs-8 py-1"
            aria-current="page"
            href=""
          >
            Dustless Service
          </Link>

          <Link
            className="nav-link text-secondary fs-8 py-1"
            aria-current="page"
            href=""
          >
            Hardwood, COREtec, Laminate, Vinyl, or Carpet Installation
          </Link>

          <Link
            className="nav-link text-secondary fs-8 py-1"
            aria-current="page"
            href=""
          >
            House Cleaning
          </Link>
        </div>

        <div className="col-12 col-sm-4 col-md-3 py-3 text-center text-md-start">
          <h2 className="text-light fs-6 ">Contact Us</h2>

          <h3 className="text-tertiary fs-7 pt-2">Inquires</h3>

          <p className="text-secondary fs-8">1 (732) 966-4169</p>

          <p className="text-secondary fs-8">chhardwood@hotmail.com</p>

          <h3 className="text-tertiary fs-7 py-2">Social Media</h3>

          <div className="pb-2">
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
      </div>
      <div className="row bg-light py-3">
        <p className=" text-primary text-center fs-9 p-0 m-0">
          ©2023 por CH Hardwood Floors. All rights reserved
        </p>
      </div>
    </footer>
  );
}
