"use client";

import { sendGTMEvent } from "@next/third-parties/google";

export function EmailLink({
  email,
  children,
}: {
  email: string;
  children: React.ReactNode;
}) {
  return <a
    onClick={() => {
      sendGTMEvent({ event: "email_link_clicked" });
    }}
    href={`mailto:${email}`}>{children}</a>;
}
