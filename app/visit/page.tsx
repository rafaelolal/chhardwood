import { Metadata } from "next";
import { PageHeading } from "../ui/page-heading";
import GoogleCalendar from "../ui/google-calendar";

export const metadata: Metadata = {
  title: "Book a Visit | CH Floors",
  description:
    "Book a visit with CH Floors for your flooring needs. We offer installation, refinishing, sanding, and repair services.",
  keywords:
    "flooring, hardwood, wood, floors, installation, refinishing, sanding, repair, Tri-State Area, New York, Pennsylvania, South Jersey, appointment, visit, schedule, services, installation, refinishing, sanding, repair",
};

export default function Visit() {
  return (
    <>
      <PageHeading
        title="Book a Visit"
        subtitle="Meet with us whenever you are available"
      />

      <main style={{ minHeight: "100%" }}>
        <GoogleCalendar />
      </main>

      {/* <iframe
        src="https://calendar.google.com/calendar/embed?src=contactchfloors%40gmail.com&ctz=America%2FNew_York"
        style="border: 0"
        width="800"
        height="600"
        frameborder="0"
        scrolling="no"
      ></iframe> */}

      {/* https://calendar.app.google/EswfUrKKD6G2cfBo8 */}
    </>
  );
}
