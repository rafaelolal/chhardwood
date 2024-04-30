import { Metadata } from "next";
import MessageForm from "../ui/message-form";

export const metadata: Metadata = {
  title: "Message Us | CH Hardwood Floors",
  description:
    "Send a message to CH Hardwood Floors for your flooring needs. We offer installation, refinishing, sanding, and repair services.",
  keywords:
    "flooring, hardwood, wood, floors, installation, refinishing, sanding, repair, Tri-State Area, New York, Pennsylvania, South Jersey, message, contact, inquiry, services, installation, refinishing, sanding, repair",
};

export default function Message() {
  return (
    <main>
      <div className="row w-100 m-0 mb-4 py-5 wood-bg-2 border-bottom border-top border-light border-3">
        <h1 className="fs-4 text-center text-light m-0 p-0">Get In Touch</h1>
        <h2 className="body-text fs-6 text-center m-0 mb-2 text-secondary">
          Let us know your thoughts
        </h2>
        <div className="bar" />
      </div>

      <MessageForm />
    </main>
  );
}
