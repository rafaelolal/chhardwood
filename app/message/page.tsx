export default function Message() {
  return (
    <main>
      <div className="mb-3">
        <label htmlFor="fullNameInput" className="form-label">
          Full Name
        </label>

        <input
          type="text"
          className="form-control"
          id="fullNameInput"
          placeholder="John Doe"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="emailInput" className="form-label">
          Email address
        </label>

        <input
          type="email"
          className="form-control"
          id="emailInput"
          placeholder="name@example.com"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="subjectInput" className="form-label">
          Subject
        </label>

        <input
          type="text"
          className="form-control"
          id="subjectInput"
          placeholder="Hello!"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="contentInput" className="form-label">
          Content
        </label>

        <textarea
          className="form-control"
          id="contentInput"
          rows={3}
        ></textarea>
      </div>
    </main>
  );
}
