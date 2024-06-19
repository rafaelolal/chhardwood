"use client";

import { sendGTMEvent } from "@next/third-parties/google";

export default function FacebookIcon({ className }: { className?: string }) {
  return <i
    onClick={() => {
      sendGTMEvent({ event: "facebook_icon_clicked" });
    }}
    className={`${className} bi bi-facebook`}></i>;
}
