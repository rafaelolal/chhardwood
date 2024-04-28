import Image from "next/image";
import Link from "next/link";

type ImageType = {
  alt: string;
  link: string;
};

type ServiceProps = {
  service: {
    image: ImageType;
    name: string;
    description: string;
    link: string;
  };
};

export default function Service({ service }: ServiceProps) {
  return (
    <div className="col">
      <div className="card" style={{ width: "18rem" }}>
        <div
          className="card-img-top position-relative"
          style={{ height: 100, width: "100%" }}
        >
          <Image
            src={service.image.link}
            alt={service.image.alt}
            fill
            objectFit="contain"
          />
        </div>

        <div className="card-body">
          <h5 className="card-title">{service.name}</h5>
          <p className="card-text">{service.description}</p>
          <Link href={service.link} className="btn btn-primary">
            More
          </Link>
        </div>
      </div>
    </div>
  );
}
