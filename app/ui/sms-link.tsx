"use client";

import { sendGTMEvent } from "@next/third-parties/google";

export function SmsLink({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {

  return <a
    onClick={() => {
      sendGTMEvent({ event: "sms_link_clicked" });
    }}
    href={`sms:${number}`}>{children}</a>;
}
