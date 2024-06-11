"use client";

import { clsx } from "clsx";
import { useState } from "react";
import { emailHandleSubmit } from "../lib/sendEmail";
import { sendGTMEvent } from "@next/third-parties/google";

export default function MessageForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={() => {
        setSubmitted(true);
        sendGTMEvent({ event: "message_sent" });
      }}
      action={emailHandleSubmit}
    >
      <div className="row py-4">
        <div className="col-9 d-flex flex-column mx-auto">
          <div className="mb-3">
            <input
              type="text"
              className="form-control input-box"
              id="fullNameInput"
              placeholder="Full Name"
              name="fullNameInput"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control input-box"
              id="emailInput"
              placeholder="Email Address"
              name="emailInput"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control input-box"
              id="subjectInput"
              name="subjectInput"
              placeholder="Subject"
              required
            />
          </div>

          <div className="mb-3">
            <textarea
              className="form-control input-box"
              placeholder="Content"
              id="contentInput"
              name="contentInput"
              rows={3}
              required
            ></textarea>
          </div>

          <div className="mb-3  ms-auto">
            <button
              type="submit"
              className={clsx("btn btn-primary mb-3", {
                disabled: submitted,
              })}
            >
              {submitted ? "Sent!" : "Send"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
