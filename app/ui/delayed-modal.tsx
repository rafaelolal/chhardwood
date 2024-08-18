'use client';

import Link from "next/link";
import { useEffect, useState } from 'react';
import { PHONE_NUMBER } from "../lib/constants";
import PhoneIcon from "../ui/phone-icon";
import { PhoneLink } from "../ui/phone-link";
import { SmsLink } from "../ui/sms-link";

export default function DelayedModal() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(true);
        }, 7000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {showModal && (
                <div className="modal fade show" style={{ display: 'block' }} tabIndex={-1}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Like What You See?</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body text-center">
                                <p>You are not sure? Send us a message for <span className='text-danger fw-bold'>FREE QUOTE!</span></p>
                                <Link
                                    href="/contact"
                                    className="btn btn-danger m-2 fw-bold jumping text-black"
                                    onClick={() => setShowModal(false)}
                                >
                                    Get Free Quote
                                </Link>
                                <PhoneLink number={PHONE_NUMBER}>
                                    <div className="contact-box">
                                        <PhoneIcon className="fs-1 mx-3" />

                                        <p>{PHONE_NUMBER}</p>
                                    </div>
                                </PhoneLink>

                                <SmsLink number={PHONE_NUMBER}>
                                    <div className="contact-box">
                                        <i className="bi bi-chat-fill fs-1 mx-3" />

                                        <p>{PHONE_NUMBER}</p>
                                    </div>
                                </SmsLink>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>No, thanks!</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {showModal && <div className="modal-backdrop fade show"></div>}
        </>
    );
}
