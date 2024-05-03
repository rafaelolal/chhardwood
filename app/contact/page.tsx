import { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "../ui/page-heading";

export const metadata: Metadata = {
  title: "Contact Us | CH Hardwood Floors",
  description:
    "Learn how to contact CH Hardwood Floors for your flooring needs. We offer installation, refinishing, sanding, and repair services.",
  keywords:
    "flooring, hardwood, wood, floors, installation, refinishing, sanding, repair, Tri-State Area, New York, Pennsylvania, South Jersey, contact, appointment, message, quote, services, installation, refinishing, sanding, repair",
};

type PageType = {
  name: string;
  link: string;
};

export default function Contact() {
  const pages: PageType[] = [
    { name: "Make an Appointment", link: "/appointment" },
    { name: "Message Us", link: "/message" },
    { name: "Get a Quote", link: "/quote" },
  ];

  return (
    <>
      <PageHeading
        title="Ways to Contact Us"
        subtitle="The best way to get in touch with us"
      />

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

        <h2 className="fs-7 text-primary mt-5 pt-4 mb-4 text-center">
          Additional Questions?
        </h2>

        <div className="contact-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-telephone-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
            />
          </svg>

          <p>1 (732) 966 4169</p>
        </div>

        <div className="contact-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-envelope-fill"
            viewBox="0 0 16 16"
          >
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
          </svg>
          <p>chhardwood@hotmail.com</p>
        </div>
      </section>

      <section className="container my-5">
        <h2 className="fs-5">Contacting Us</h2>

        <p>
          CH Hardwood Floors is dedicated to making your dream floors a reality,
          and we understand that getting started can come with questions. That
          is why we offer various convenient ways to connect and discuss your
          flooring needs.
        </p>

        <h2 className="fs-5">How to Get Started</h2>

        <ul>
          <li>
            <strong>Explore Our Options:</strong>

            <p>
              Visit our website to learn about the diverse range of flooring
              solutions we offer, from hardwood and vinyl to laminate, carpet,
              and cork. Our mobile showroom brings the samples directly to you,
              allowing you to visualize the perfect fit for your home.
            </p>
          </li>

          <li>
            <strong>Schedule an Appointment:</strong>

            <p>
              Ready to take the next step? Click the Make an Appointment button
              to book a consultation at your convenience. We will discuss your
              vision, project scope, and budget to provide personalized
              recommendations.
            </p>
          </li>

          <li>
            <strong>Get a Quote:</strong>

            <p>
              Curious about pricing? The Get a Quote option allows you to submit
              project details and receive a tailored estimate for your flooring
              installation or refinishing needs.
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
              call us at 1 (732) 966 4169. Our friendly team is happy to answer
              your questions and guide you through the process.
            </p>
          </li>
        </ul>

        <h2 className="fs-5">Why Choose CH Hardwood Floors?</h2>

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
              We handle everything from installation and refinishing to repairs
              and cleaning, providing a one-stop shop for all your flooring
              needs.
            </p>
          </li>

          <li>
            <strong>Quality Materials:</strong>
            <p>
              We use only premium materials from trusted suppliers, guaranteeing
              the durability and longevity of your new floors.
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
            Do not hesitate to reach out! Let CH Hardwood Floors transform your
            house into the home of your dreams, one beautiful floor at a time.
          </strong>
        </p>
      </section>
    </>
  );
}
