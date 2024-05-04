import { Metadata } from "next";
import MessageForm from "../ui/message-form";
import { PageHeading } from "../ui/page-heading";

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
        <MessageForm />
      </main>
    </>
  );
}
