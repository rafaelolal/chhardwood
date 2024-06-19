"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import Link from "next/link";

export function HomeReviewIcon() {
    return <Link
        onClick={() => { sendGTMEvent({ event: "review_link_clicked" }); }}
        href="https://g.page/r/Cbs6GDoU0NDIEB0/review"
        className="btn btn-tertiary me-3"
    >
        Reviews
    </Link>
}
