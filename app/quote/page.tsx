import { Metadata } from "next";
import QuoteForm from "../ui/quote-form";
import { PageHeading } from "../ui/page-heading";

export const metadata: Metadata = {
  title: "Get a Quote | CH Hardwood Floors",
  description:
    "Get a quote from CH Hardwood Floors for your flooring needs. We offer installation, refinishing, sanding, and repair services.",
  keywords:
    "flooring, hardwood, wood, floors, installation, refinishing, sanding, repair, Tri-State Area, New York, Pennsylvania, South Jersey, quote, estimate, pricing, cost, services, installation, refinishing, sanding, repair",
};

export default function Quote() {
  return (
    <>
      <PageHeading
        title="Get A Quote"
        subtitle="Let us know what interests you"
      />

      <section>
        <QuoteForm />
      </section>
    </>
  );
}
