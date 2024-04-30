import { Metadata } from "next";
import QuoteForm from "../ui/quote-form";

export const metadata: Metadata = {
  title: "Get a Quote | CH Hardwood Floors",
  description:
    "Get a quote from CH Hardwood Floors for your flooring needs. We offer installation, refinishing, sanding, and repair services.",
  keywords:
    "flooring, hardwood, wood, floors, installation, refinishing, sanding, repair, Tri-State Area, New York, Pennsylvania, South Jersey, quote, estimate, pricing, cost, services, installation, refinishing, sanding, repair",
};

export default function Quote() {
  return (
    <main>
      <div className="row w-100 m-0 mb-4 py-5 wood-bg-2 border-bottom border-top border-light border-3">
        <h1 className="fs-4 text-center text-light m-0 p-0">Get A Quote</h1>
        <h2 className="body-text fs-6 text-center m-0 mb-2 text-secondary">
          Let us know what interests you
        </h2>
        <div className="bar" />
      </div>

      <QuoteForm />
    </main>
  );
}
