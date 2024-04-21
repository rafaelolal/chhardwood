export default function Message() {
  return (
    <main>
      <div className="row pt-5">
      <h6 className="fs-4 text-center text-primary m-0 p-0">Get In Touch</h6>
      <h6 className="body-text fs-6 text-center m-0 mb-2">Let us know your thoughts</h6>
     
</div>
<div className="row py-4">
  <div className="col-9 mx-auto">
      <div className="mb-3">


        <input
          type="text"
          className="form-control input-box"
          id="fullNameInput"
          placeholder="Full Name"
        />
      </div>

      <div className="mb-3">


        <input
          type="email"
          className="form-control input-box"
          id="emailInput"
          placeholder="Email Address"
        />
      </div>

      <div className="mb-3">

        <input
          type="text"
          className="form-control input-box"
          id="subjectInput"
          placeholder="Subject"
        />
      </div>

      <div className="mb-3">
        <textarea
          className="form-control input-box"
          placeholder="Content"
          id="contentInput"
          rows={3}
        ></textarea>
      </div>
      </div>
      </div>
    </main>
  );
}
