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
      <div className="bg-primary row  pt-4">
        <div className="col-12 col-md-3 py-3 text-center">
          <Image
            src="/images/logo.png"
            width={80}
            height={80}
            alt="CH Floors Logo"
          />

          <h2 className="text-light fs-6">CH Floors</h2>

          <p className="text-secondary py-1">
            Timeless Elegance Meets Exceptional Craftsmanship
          </p>
        </div>

        <div className="col-12 col-sm-4 col-md-3 p-3 text-center text-md-start">
          <h2 className="text-light fs-6">Areas of Service</h2>

          <p className="text-secondary m-1">New Jersey</p>
          <p className="text-secondary m-1">Anywhere in South Jersey!</p>
          <p className="text-secondary m-1">Hunterdon County, New Jersey</p>
          <p className="text-secondary m-1">Morris County, New Jersey</p>
          <p className="text-secondary m-1">Somerset County, New Jersey</p>
          <p className="text-secondary m-1">Monmouth, New Jersey</p>
          <p className="text-secondary m-1">And much more!</p>
        </div>

        <div className="col-12 col-sm-4 col-md-3 p-3 text-center text-md-start">
          <h2 className="text-light fs-6">Services</h2>

          <Link
            className="nav-link text-secondary py-1"
            aria-current="page"
            href="/services"
          >
            Installing
          </Link>

          <Link
            className="nav-link text-secondary py-1"
            aria-current="page"
            href="/services"
          >
            Finishing
          </Link>

          <Link
            className="nav-link text-secondary py-1"
            aria-current="page"
            href="/services"
          >
            Cleaning
          </Link>

          <Link
            className="nav-link text-secondary py-1"
            aria-current="page"
            href="/services"
          >
            Repairs
          </Link>
        </div>

        <div className="col-12 col-sm-4 col-md-3 p-3 text-center text-md-start">
          <h2 className="text-light fs-6 ">Contact Us</h2>

          <h3 className="text-tertiary fs-7 pt-2">Inquires</h3>

          <SmsLink number={PHONE_NUMBER}>
            <p className="text-secondary">{PHONE_NUMBER}</p>
          </SmsLink>

          <EmailLink email={EMAIL}>
            <p className="text-secondary">{EMAIL}</p>
          </EmailLink>

          <h3 className="text-tertiary fs-7 py-2">Social Media</h3>

          <div className="pb-2">
            <Link
              className="mx-2"
              href="https://www.instagram.com/ch_hardwoodfloors/"
            >
              <InstagramIcon className="text-white fs-1" />
            </Link>

            <Link className="mx-2" href={FACEBOOK}>
              <FacebookIcon className="text-white fs-1" />
            </Link>

            <Link className="mx-2" href="/contact">
              <PhoneIcon className="text-white fs-1" />
            </Link>
          </div>
        </div>

        <div className="col-12 bg-light text-center p-3">
          <small className=" text-primary fs-7 ">
            ©2024 por CH Floors. All rights reserved
          </small>
        </div>
      </div>
    </footer>
  );
}
