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
    <div className="col-12 col-sm-6 col-lg-3 my-3">
      <div className="card mx-auto bg-light" style={{ width: "17rem" }}>
        <div
          className="card-img-top position-relative"
          style={{ height: 130, width: "100%" }}
        >
          <Image
            src={service.image.link}
            alt={service.image.alt}
            fill
            objectFit="cover"
          />
        </div>

        <div className="card-body text-center">
          <h5 className="card-title fs-6">{service.name}</h5>
          <p className="card-text fs-7">{service.description}</p>
          <Link href={service.link} className="btn btn-tertiary fs-7">
            More
          </Link>
        </div>
      </div>
    </div>
  );
}
