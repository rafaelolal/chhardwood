export default function QuickModal() {
  return (
    <>
      <button
        type="button"
        className="btn btn-secondary fixed-bottom m-2"
        data-bs-toggle="modal"
        data-bs-target="#contactModal"
      >
        Click Here
      </button>

      <div
        className="modal fade"
        id="contactModal"
        tabIndex={-1}
        aria-labelledby="contactModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">Quick access info and icons</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
