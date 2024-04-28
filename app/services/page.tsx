import Image from "next/image";
import ImageList from "../ui/image-list";
import Link from "next/link";

type ImageType = {
  alt: string;
  link: string;
};

type ServiceType = {
  image: ImageType;
  name: string;
  description: string;
  link: string;
};

export default function Services() {
  const services: ServiceType[] = [
    {
      image: { alt: "Image 1", link: "/images/test1.jpg" },
      name: "Service 1",
      description: "Description of Service 1",
      link: "/service1",
    },
    {
      image: { alt: "Image 2", link: "/images/test2.jpg" },
      name: "Service 2",
      description: "Description of Service 2",
      link: "/service2",
    },
    {
      image: { alt: "Image 1", link: "/images/test3.jpg" },
      name: "Service 3",
      description: "Description of Service 3",
      link: "/service3",
    },
    {
      image: { alt: "Image 1", link: "/images/test1.jpg" },
      name: "Service 4",
      description: "Description of Service 4",
      link: "/service4",
    },
    {
      image: { alt: "Image 2", link: "/images/test2.jpg" },
      name: "Service 5",
      description: "Description of Service 5",
      link: "/service5",
    },
    {
      image: { alt: "Image 1", link: "/images/test3.jpg" },
      name: "Service 6",
      description: "Description of Service 6",
      link: "/service6",
    },
    {
      image: { alt: "Image 1", link: "/images/test1.jpg" },
      name: "Service 7",
      description: "Description of Service 7",
      link: "/service7",
    },
  ];

  return (
    <main>
      <div className="row py-4">
        <h1 className="fs-4 text-center text-primary m-0 p-0">Services</h1>
        <h2 className="body-text fs-6 text-center m-0 mb-2">
          A list of our services
        </h2>
        <div className="bar" />
      </div>

      <div className="row jutsify-content-evenly">
        {services.map((service, index) => (
          <div className="col text-center" key={index}>
            <div
              className="card m-3 mx-auto bg-light"
              style={{ width: "18rem", maxHeight: "20rem" }}
            >
              <div
                className="card-img-top position-relative"
                style={{ height: "16rem", width: "100%" }}
              >
                <Image
                  src={service.image.link}
                  alt={service.image.alt}
                  fill
                  objectFit="cover"
                />
              </div>

              <div className="card-body">
                <h6 className="card-title">{service.name}</h6>
                <p className="card-text fs-7">{service.description}</p>
                <Link href={service.link} className="btn btn-tertiary">
                  More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
