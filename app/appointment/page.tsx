export default function Appointment() {
  return (
    <main>
      <div className="row py-5">
        <h1 className="fs-4 text-center text-primary m-0 p-0">
          Book an Appointment
        </h1>
        <h6 className="body-text fs-6 text-center m-0 mb-2">Meet with us</h6>
        <div className="bar" />
      </div>

      <div style={{ minHeight: "100%" }}>
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1VaKpKZxjN4QDrXJZsZdjsoSHbqdE2DdYbcqwuTeMKHAokU1s7oeJh6ejjCIlUchFutBkwHV9C?gv=true"
          style={{ border: 0 }}
          width="100%"
          height="600"
          frameBorder="0"
        ></iframe>
      </div>
    </main>
  );
}
