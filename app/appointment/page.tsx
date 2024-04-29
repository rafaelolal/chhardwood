export default function Appointment() {
  return (
    <main>
      <div className="row w-100 m-0 mb-4 py-5 wood-bg-2 border-bottom border-top border-light border-3">
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
          width="100%"
          height="1500"
          frameBorder="0"
        ></iframe>
      </div>
    </main>
  );
}
