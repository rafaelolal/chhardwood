import Link from "next/link";
import ImageList from "../ui/image-list";

type PageType = {
  name: string;
  link: string;
};

export default function Contact() {
  const pages: PageType[] = [
    { name: "Make an Appointment", link: "/chhardwood/images/test1.jpg" },
    { name: "Message Us", link: "/chhardwood/images/test2.jpg" },
    { name: "Get a Quote", link: "/chhardwood/images/test3.jpg" },
  ];

  return (
    <main>
      <div className="row py-4">
        <h1 className="fs-4 text-center text-primary m-0 p-0">
          Ways to Contact Us
        </h1>

        <h2 className="body-text fs-6 text-center m-0 mb-2">
          The best way to get in touch with us
        </h2>
        <div className="bar" />
      </div>

      {pages.map((page) => (
        <Link href={page.link} className="btn btn-primary" key={page.link}>
          {page.name}
        </Link>
      ))}
    </main>
  );
}
