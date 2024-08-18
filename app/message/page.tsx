import { Metadata } from "next";
import { PHONE_NUMBER } from "../lib/constants";
import { PageHeading } from "../ui/page-heading";
import PhoneIcon from "../ui/phone-icon";
import { PhoneLink } from "../ui/phone-link";
import { ReviewLink } from "../ui/review-link";
import { SmsLink } from "../ui/sms-link";

export const metadata: Metadata = {
  title: "Message Us | CH Floors",
  description:
    "Send a message to CH Floors for your flooring needs. We offer installation, refinishing, sanding, and repair services.",
  keywords:
    "flooring, hardwood, wood, floors, installation, refinishing, sanding, repair, Tri-State Area, New York, Pennsylvania, South Jersey, message, contact, inquiry, services, installation, refinishing, sanding, repair",
};

export default function Message() {
  return (
    <>
      <PageHeading title="Get In Touch" subtitle="Let us know your thoughts" />

      <main>
        {/* <MessageForm /> */}
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
