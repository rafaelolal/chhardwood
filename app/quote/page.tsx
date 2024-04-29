"use client";

import { useState } from "react";
import { emailHandleSubmit } from "../lib/sendEmail";
import clsx from "clsx";

export default function Quote() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main>
      <div className="row w-100 m-0 mb-4 py-5 wood-bg-2 border-bottom border-top border-light border-3">
        <h1 className="fs-4 text-center text-light m-0 p-0">Get A Quote</h1>
        <h2 className="body-text fs-6 text-center m-0 mb-2 text-secondary">
          Let us know what interests you
        </h2>
        <div className="bar" />
      </div>

      <form onSubmit={() => setSubmitted(true)} action={emailHandleSubmit}>
        <div className="row py-4">
          <div className="col-9 d-flex flex-column mx-auto">
            <div className="mb-3">
              <input
                type="text"
                className="form-control input-box"
                id="fullNameInput"
                name="fullNameInput"
                placeholder="Full Name"
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="form-control input-box"
                id="emailInput"
                name="emailInput"
                placeholder="Email Address"
                required
              />
            </div>

            <div className="mb-3">
              <textarea
                className="form-control input-box"
                placeholder="Provide important details here..."
                id="contentInput"
                name="contentInput"
                rows={3}
                required
              ></textarea>
            </div>

            <div className="mb-3 ms-auto">
              <button
                type="submit"
                className={clsx("btn btn-primary mb-3", {
                  disabled: submitted,
                })}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
