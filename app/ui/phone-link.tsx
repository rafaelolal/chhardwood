"use client";

import { sendGTMEvent } from "@next/third-parties/google";

export function PhoneLink({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return <a
    onClick={() => {
      sendGTMEvent({ event: "phone_link_clicked" });
    }}
    href={`tel:${number}`}>{children}</a>;
}
