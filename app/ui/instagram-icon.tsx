"use client";

import { sendGTMEvent } from "@next/third-parties/google";

export default function InstagramIcon({ className }: { className?: string }) {
  return <i
    onClick={() => {
      sendGTMEvent({ event: "instagram_icon_clicked" });
    }}
    className={`${className} bi bi-instagram`}></i>;
}
