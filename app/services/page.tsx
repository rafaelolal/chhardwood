import { Metadata } from "next";
import Link from "next/link";
import { PHONE_NUMBER } from "../lib/constants";
import { PageHeading } from "../ui/page-heading";
import PhoneIcon from "../ui/phone-icon";
import { PhoneLink } from "../ui/phone-link";
import ServiceList from "../ui/service-list";
import { SmsLink } from "../ui/sms-link";

export const metadata: Metadata = {
  title: "Services | CH Floors",
  description:
    "Transform your home with our expert flooring installation and refinishing services. We offer a comprehensive range of solutions, including installation, sanding, staining, finishing, and repairs for various flooring types like hardwood, vinyl, laminate, carpet, and cork.",
  keywords:
    "flooring, hardwood, wood, floors, installation, refinishing, sanding, repair, Tri-State Area, New York, Pennsylvania, South Jersey, services, installation, finishing, cleaning, repairs",
};

export default function Services() {
  const services: ServiceType[] = [
    {
      image: {
        alt: "Example of a hardwood installation.",
        link: "/images/repair1.jpeg",
      },
      name: "Installing",
      description:
        "Hardwood, COREtec, laminate, vinyl, carpet, steps, railings, decks, and more.",
      link: "/services/installing",
    },
    {
      image: {
        alt: "Example of finishing work done on an installation.",
        link: "/images/installation1.jpeg",
      },
      name: "Finishing",
      description:
        "Sanding, staining, finish of hardwood and other types of flooring, stairs, decks, and railings.",
      link: "/services/finishing",
    },
    {
      image: {
        alt: "Demonstration of cleaning after installation and finishing.",
        link: "/images/test2.jpg",
      },
      name: "Cleaning",
      description:
        "Any type of cleaning of commercial, residential, and construction sites",
      link: "/services/cleaning",
    },
    {
      image: {
        alt: "Demonstration of repairs of any type of interior installation.",
        link: "/images/cleaning1.jpeg",
      },
      name: "Repairs",
      description:
        "Repair of any type of interior installation including flooring, stairs, railings, and decks",
      link: "/services/repairs",
    },
    {
      image: {
        alt: "Mobile showroom containing multiple samples of flooring services.",
        link: "/images/mobile-showroom.jpeg",
      },
      name: "Mobile Showroom",
      description:
        "Our mobile showroom is stocked with a wide variety of flooring samples, for free and at your convenience.",
      link: "/services/showroom",
    },
  ];

  return (
    <>
      <PageHeading
        title="Premium Flooring Services"
        subtitle="Ways to Transform Your Home"
      />

      <main>
        <section className="container-fluid">
          <div className="row gy-5 justify-content-center mt-3">
            <ServiceList services={services} />
          </div>

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

          <Link
            href="/gallery"
            className="btn btn-tertiary mx-auto d-block mt-5 text-black"
          >
            See Work Gallery
          </Link>

          <Link
            href="/contact"
            className="btn btn-danger mx-auto d-block mt-5 fw-bold jumping text-black"
          >
            Get Free Quote
          </Link>
        </section>

        <section className="container-fluid my-5">
          <h2 className="fs-4 text-center">
            Description of Services{" "}
            <span className="text-tertiary fw-bold">|</span>
          </h2>

          <p>
            Transform your home with our expert flooring installation and
            refinishing services. We offer a comprehensive range of solutions,
            including installation, sanding, staining, finishing, and repairs
            for various flooring types like hardwood, vinyl, laminate, carpet,
            and cork. Whether you are looking to update a single room or your
            entire house, our team of skilled professionals will deliver
            exceptional results with meticulous attention to detail.
          </p>

          <h2 className="fs-5 mt-5 mb-4">
            We offer a wide range of services including:
          </h2>

          <h3 className="fs-5 fw-lighter">Installation:</h3>

          <ul>
            <li>
              <strong>Hardwood:</strong> Enhance the elegance and value of your
              home with beautiful hardwood flooring. We install a variety of
              hardwood species, ensuring a perfect fit for your style and
              budget.
            </li>
            <li>
              <strong>Vinyl:</strong> Enjoy the versatility and durability of
              vinyl flooring. We offer a wide selection of colors and patterns
              to complement any décor.
            </li>
            <li>
              <strong>Laminate:</strong> Achieve the look of hardwood or stone
              at a fraction of the cost with laminate flooring. We provide
              expert installation for a seamless and long-lasting finish.
            </li>
            <li>
              <strong>Carpet:</strong> Add warmth and comfort to your space with
              plush carpeting. We offer various carpet styles and materials to
              suit your needs and preferences.
            </li>
            <li>
              <strong>Cork:</strong> Embrace the eco-friendly and
              sound-absorbing qualities of cork flooring. Our team ensures
              precise installation for a unique and sustainable flooring
              solution.
            </li>
            <li>
              <strong>Stairs & Railings:</strong> Elevate the functionality and
              aesthetics of your staircase with our expert installation and
              refinishing services for both steps and railings.
            </li>
          </ul>

          <h3 className="fs-5 mt-5">Sand, Stain & Finish:</h3>
          <p>
            Revitalize your existing hardwood floors, stairs, and railings with
            our professional sanding, staining, and finishing services. We use
            dustless equipment to minimize mess and ensure a smooth, flawless
            finish. Choose from a wide array of stain colors to match your
            desired style.
          </p>

          <h3 className="fs-5 mt-5">Repairs:</h3>
          <p>
            Do not let damaged floors detract from the beauty of your home. We
            offer comprehensive repair solutions for all types of flooring,
            restoring its functionality and appearance.
          </p>

          <h3 className="fs-5 mt-5">House Cleaning:</h3>
          <p>
            Enjoy a sparkling clean home with our professional house cleaning
            services. We provide thorough and efficient cleaning, leaving your
            space fresh and inviting.
          </p>

          <h2 className="fs-5 text-center mt-5">
            Your Project is in Expert Hands{" "}
            <span className="text-tertiary fw-bold">|</span>
          </h2>

          <p>
            With over 15 years of experience, our team possesses the knowledge
            and expertise to handle projects of all sizes, from residential to
            commercial and construction. We prioritize quality craftsmanship and
            customer satisfaction, ensuring that every project is completed to
            the highest standards.
          </p>

          <h3 className="fs-6 mt-5">Benefits of Choosing Us:</h3>

          <ul>
            <li>
              <strong>Mobile Showroom:</strong> We bring the showroom to you!
              Explore a wide variety of flooring samples in the comfort of your
              own home, allowing you to visualize how different options will
              complement your existing décor and furniture.
            </li>
            <li>
              <strong>Quality Materials:</strong> We source premium materials
              from trusted suppliers, guaranteeing durability and longevity for
              your flooring investment.
            </li>
            <li>
              <strong>Dustless Service Available:</strong> Minimize disruption
              and mess with our dustless sanding and refinishing services.
            </li>
            <li>
              <strong>Comprehensive Solutions:</strong> From installation to
              repairs and cleaning, we offer a complete range of services to
              meet all your flooring needs.
            </li>
          </ul>

          <p>
            <strong>
              Contact us today for a free consultation and let us bring your
              flooring vision to life!
            </strong>
          </p>
        </section>
      </main>
    </>
  );
}
