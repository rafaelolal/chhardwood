import Image from "next/image";
// import Link from "next/link";

type ServiceProps = {
  service: ServiceType;
};

export default function Service({ service }: ServiceProps) {
  return (
    <div className="col">
      <div className="card mx-auto bg-light" style={{ width: "17rem" }}>
        <div
          className="card-img-top position-relative"
          style={{ height: 200, width: "100%" }}
        >
          <Image
            src={service.image.link}
            alt={service.image.alt}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="card-body text-center">
          <h3 className="card-title fs-6">{service.name}</h3>
          <p className="card-text fs-7">{service.description}</p>

          {/* <Link href={service.link} className="btn btn-tertiary fs-7">
            More
          </Link> */}
        </div>
      </div>
    </div>
  );
}
