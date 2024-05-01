import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book an Appointment | CH Hardwood Floors",
  description:
    "Schedule an appointment with CH Hardwood Floors for your flooring needs. We offer installation, refinishing, sanding, and repair services.",
  keywords:
    "flooring, hardwood, wood, floors, installation, refinishing, sanding, repair, Tri-State Area, New York, Pennsylvania, South Jersey, appointment, schedule, services, installation, refinishing, sanding, repair",
};

export default function Appointment() {
  return (
    <main>
      <div className="row w-100 m-0 py-5 wood-bg-2 border-bottom border-top border-light border-3">
        <h1 className="fs-4 text-center text-light m-0 p-0">
          Book an Appointment
        </h1>
        <h2 className="body-text fs-6 text-center m-0 mb-2 text-secondary">
          Meet with us whenever you are available
        </h2>
        <div className="bar" />
      </div>

      <div style={{ minHeight: "100vh" }}>
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1VaKpKZxjN4QDrXJZsZdjsoSHbqdE2DdYbcqwuTeMKHAokU1s7oeJh6ejjCIlUchFutBkwHV9C?gv=true"
          style={{ border: 0 }}
          width="99%"
          height="1400"
          frameBorder="0"
        ></iframe>
      </div>
    </main>
  );
}
