import Link from "next/link";
import ImageList from "../ui/image-list";
import Image from "next/image";

type PageType = {
  name: string;
  link: string;
};

export default function Contact() {
  const pages: PageType[] = [
    { name: "Make an Appointment", link: "/appointment" },
    { name: "Message Us", link: "/message" },
    { name: "Get a Quote", link: "/quote" },
  ];

  return (
    <main>
      <div className="row w-100 m-0 py-5 wood-bg-2 border-bottom border-top border-light border-3">
        <h1 className="fs-4 text-center text-light m-0 p-0">
          Ways to Contact Us
        </h1>
        <h2 className="body-text fs-6 text-center m-0 mb-2 text-secondary">
          The best way to get in touch with us
        </h2>
        <div className="bar" />
      </div>
      <div className="mx-4 mt-5">
        {pages.map((page) => (
          <Link
            href={page.link}
            className="btn btn-tertiary d-block mx-auto my-3"
            key={page.link}
          >
            {page.name}
          </Link>
        ))}

        <h3 className="fs-7 text-primary mt-5 pt-4 mb-4 text-center">
          Additional Questions?
        </h3>

        <div className="contact-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-telephone-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
            />
          </svg>
          <p>1 (732) 966 4169</p>
        </div>

        <div className="contact-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-envelope-fill"
            viewBox="0 0 16 16"
          >
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
          </svg>
          <p>chhardwood@hotmail.com</p>
        </div>
      </div>
    </main>
  );
}
