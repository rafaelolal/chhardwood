"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import Link from "next/link";
import ReviewIcon from "./review-icon";

export function ReviewLink() {
    return <Link
        onClick={() => { sendGTMEvent({ event: "review_link_clicked" }); }}
        href="https://g.page/r/Cbs6GDoU0NDIEB0/review">
        <div className="contact-box">
            <ReviewIcon className="fs-1 mx-3" />

            <p>Reviews</p>
        </div>
    </Link>
}
