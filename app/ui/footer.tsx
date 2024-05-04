import Image from "next/image";
import Link from "next/link";
import { EMAIL, FACEBOOK, PHONE_NUMBER } from "../lib/constants";
import { EmailLink } from "./email-link";
import InstagramIcon from "./instagram-icon";
import FacebookIcon from "./facebook-icon";
import PhoneIcon from "./phone-icon";
import { SmsLink } from "./sms-link";

export default function Footer() {
  return (
    <footer className="container-fluid">
      <div className="bg-light row  pt-4">
        <div className="col-12 col-md-3 py-3 text-center">
          <Image
            src="/images/logo.png"
            style={{ filter: "saturate(60%)" }}
            width={90}
            height={90}
            alt="CH Floors Logo"
          />

          <h2 className="fs-6 mt-2 fw-semibold">CH Floors</h2>

          <p className="my-1">
            Timeless Elegance Meets Exceptional Craftsmanship
          </p>
        </div>

        <div className="col-12 col-sm-4 col-md-3 p-3 text-center text-md-start">
          <h2 className="fs-6 fw-semibold">Areas of Service</h2>
          <p className="my-1">New Jersey</p>
          <p className="my-1">Hunterdon County, New Jersey</p>
          <p className="my-1">Morris County, New Jersey</p>
          <p className="my-1">Somerset County, New Jersey</p>
          <p className="my-1">Monmouth, New Jersey</p>
          <p className="my-1">And much more!</p>
        </div>

        <div className="col-12 col-sm-4 col-md-3 p-3 text-center text-md-start">
          <h2 className="fs-6  fw-semibold">Services</h2>

          <Link className="nav-link my-1" aria-current="page" href="/services">
            Installing
          </Link>

          <Link className="nav-link my-1" aria-current="page" href="/services">
            Finishing
          </Link>

          <Link className="nav-link my-1" aria-current="page" href="/services">
            Cleaning
          </Link>

          <Link className="nav-link my-1" aria-current="page" href="/services">
            Repairs
          </Link>
        </div>

        <div className="col-12 col-sm-4 col-md-3 p-3 text-center text-md-start">
          <h2 className="fs-6  fw-semibold">Contact Us</h2>

          <h3 className="fs-7 pt-2 fw-medium">Inquires</h3>

          <SmsLink number={PHONE_NUMBER}>
            <p>{PHONE_NUMBER}</p>
          </SmsLink>

          <EmailLink email={EMAIL}>
            <p>{EMAIL}</p>
          </EmailLink>

          <h3 className="fs-7 py-2 fw-medium">Social Media</h3>

          <div className="mb-4">
            <Link
              className="mx-2"
              href="https://www.instagram.com/ch_hardwoodfloors/"
            >
              <InstagramIcon className=" fs-1" />
            </Link>

            <Link className="mx-2" href={FACEBOOK}>
              <FacebookIcon className=" fs-1" />
            </Link>

            <Link className="mx-2" href="/contact">
              <PhoneIcon className="fs-1" />
            </Link>
          </div>
        </div>
        <div className="col-12 bg-primary text-center p-3">
          <small className=" text-light fs-7 ">
            ©2023 por CH Floors. All rights reserved
          </small>
        </div>
      </div>
    </footer>
  );
}
