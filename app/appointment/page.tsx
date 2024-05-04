import { Metadata } from "next";
import { PageHeading } from "../ui/page-heading";

export const metadata: Metadata = {
  title: "Book an Appointment | CH Hardwood Floors",
  description:
    "Schedule an appointment with CH Hardwood Floors for your flooring needs. We offer installation, refinishing, sanding, and repair services.",
  keywords:
    "flooring, hardwood, wood, floors, installation, refinishing, sanding, repair, Tri-State Area, New York, Pennsylvania, South Jersey, appointment, schedule, services, installation, refinishing, sanding, repair",
};

export default function Appointment() {
  return (
    <>
      <PageHeading
        title="Book an Appointment"
        subtitle="Meet with us whenever you are available"
      />

      <section style={{ minHeight: "100%" }}>
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1VaKpKZxjN4QDrXJZsZdjsoSHbqdE2DdYbcqwuTeMKHAokU1s7oeJh6ejjCIlUchFutBkwHV9C?gv=true"
          style={{ border: 0 }}
          width="99%"
          height="1400"
          frameBorder="0"
        ></iframe>
      </section>
    </>
  );
}
