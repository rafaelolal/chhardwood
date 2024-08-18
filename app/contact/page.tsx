import { Metadata } from "next";
import Link from "next/link";
import { PHONE_NUMBER } from "../lib/constants";
import { PageHeading } from "../ui/page-heading";
import PhoneIcon from "../ui/phone-icon";
import { PhoneLink } from "../ui/phone-link";
import { ReviewLink } from "../ui/review-link";
import { SmsLink } from "../ui/sms-link";

export const metadata: Metadata = {
  title: "Contact Us | CH Floors",
  description:
    "Learn how to contact CH Floors for your flooring needs. We offer installation, refinishing, sanding, and repair services.",
  keywords:
    "flooring, hardwood, wood, floors, installation, refinishing, sanding, repair, Tri-State Area, New York, Pennsylvania, South Jersey, contact, appointment, visit, message, quote, services, installation, refinishing, sanding, repair",
};

type PageType = {
  name: string;
  link: string;
};

export default function Contact() {
  const pages: PageType[] = [
    { name: "Book a Visit", link: "/visit" },
    { name: "Message Us", link: "/message" },
  ];

  return (
    <>
      <PageHeading
        title="Ways to Contact Us"
        subtitle="The best way to get in touch with us"
      />

      <main>
        <section className="mx-4 mt-5">
          {pages.map((page) => (
            <Link
              href={page.link}
              className="btn btn-tertiary d-block mx-auto my-3"
              key={page.link}
            >
              {page.name}
            </Link>
          ))}

          <Link
            href="/quote"
            className="btn btn-danger fw-bold jumping text-black d-block mx-auto my-4"
          >
            Free Quote
          </Link>

          <h2 className="fs-7 text-primary mt-4 pt-4 mb-4 text-center">
            Additional Questions?
          </h2>

          <PhoneLink number={PHONE_NUMBER}>
            <div className="contact-box">
              <PhoneIcon className="fs-1 mx-3" />

              <p>{PHONE_NUMBER}</p>
            </div>
          </PhoneLink>

          <SmsLink number={PHONE_NUMBER}>
            <div className="contact-box">
              <i className="bi bi-chat-fill fs-1 mx-3" />

              <p>{PHONE_NUMBER}</p>
            </div>
          </SmsLink>

          <ReviewLink />
        </section>

        <section className="container my-5">
          <h2 className="fs-4 text-center mt-5">
            Contacting Us <span className="text-tertiary fw-bold">|</span>
          </h2>

          <p>
            CH Floors is dedicated to making your dream floors a reality, and we
            understand that getting started can come with questions. That is why
            we offer various convenient ways to connect and discuss your
            flooring needs.
          </p>

          <h2 className="fs-5 mt-5">How to Get Started</h2>

          <ul>
            <li>
              <strong>Explore Our Options:</strong>

              <p>
                Visit our website to learn about the diverse range of flooring
                solutions we offer, from hardwood and vinyl to laminate, carpet,
                and cork. Our mobile showroom brings the samples directly to
                you, allowing you to visualize the perfect fit for your home.
              </p>
            </li>

            <li>
              <strong>Book a Visit:</strong>

              <p>
                Ready to take the next step? Click the Book a Visit button to
                book a consultation at your convenience. We will discuss your
                vision, project scope, and budget to provide personalized
                recommendations.
              </p>
            </li>

            <li>
              <strong>Get a Quote:</strong>

              <p>
                Curious about pricing? The Get a Quote option allows you to
                submit project details and receive a tailored estimate for your
                flooring installation or refinishing needs.
              </p>
            </li>

            <li>
              <strong>Message Us:</strong>

              <p>
                Have a quick question or prefer written communication? Use the
                Message Us feature to send your inquiries directly.
              </p>
            </li>

            <li>
              <strong>Give Us a Call:</strong>

              <p>
                For immediate assistance or a more personal touch, feel free to
                call us at{" "}
                <PhoneLink number={PHONE_NUMBER}>{PHONE_NUMBER}</PhoneLink>. Our
                friendly team is happy to answer your questions and guide you
                through the process.
              </p>
            </li>
          </ul>

          <h2 className="fs-5">
            Why Choose CH Floors?{" "}
            <span className="text-tertiary fw-bold">|</span>
          </h2>

          <ul>
            <li>
              <strong>Experience and Expertise:</strong>
              <p>
                With over 15 years of experience serving the tri-state area, we
                bring unparalleled expertise to every project, ensuring quality
                craftsmanship and exceptional results.
              </p>
            </li>

            <li>
              <strong>Comprehensive Services:</strong>
              <p>
                We handle everything from installation and refinishing to
                repairs and cleaning, providing a one-stop shop for all your
                flooring needs.
              </p>
            </li>

            <li>
              <strong>Quality Materials:</strong>
              <p>
                We use only premium materials from trusted suppliers,
                guaranteeing the durability and longevity of your new floors.
              </p>
            </li>

            <li>
              <strong>Customer Satisfaction:</strong>
              <p>
                Our commitment to your satisfaction is unwavering. We listen to
                your needs, provide personalized solutions, and strive to exceed
                your expectations at every step.
              </p>
            </li>
          </ul>

          <p>
            <strong>
              Do not hesitate to reach out! Let CH Floors transform your house
              into the home of your dreams, one beautiful floor at a time.
            </strong>
          </p>
        </section>
      </main>
    </>
  );
}
