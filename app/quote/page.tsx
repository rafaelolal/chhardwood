import { Metadata } from "next";
import { PHONE_NUMBER } from "../lib/constants";
import { PageHeading } from "../ui/page-heading";
import PhoneIcon from "../ui/phone-icon";
import { PhoneLink } from "../ui/phone-link";
import { ReviewLink } from "../ui/review-link";
import { SmsLink } from "../ui/sms-link";

export const metadata: Metadata = {
  title: "Get a Quote | CH Floors",
  description:
    "Get a quote from CH Floors for your flooring needs. We offer installation, refinishing, sanding, and repair services.",
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

      <main>
        {/* <QuoteForm /> */}
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
      </main>
    </>
  );
}
