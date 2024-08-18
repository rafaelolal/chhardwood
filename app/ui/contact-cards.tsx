import { PHONE_NUMBER } from "../lib/constants";
import PhoneIcon from "../ui/phone-icon";
import { PhoneLink } from "../ui/phone-link";
import { SmsLink } from "../ui/sms-link";

export default function ContactCard() {
    return <>
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
    </>
}
