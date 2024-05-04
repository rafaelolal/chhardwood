import Image from "next/image";
// import Link from "next/link";

type ServiceProps = {
  service: ServiceType;
};

export default function Service({ service }: ServiceProps) {
  return (
    <div className="col-auto">
      <div className="card rounded-0 h-100" style={{ width: "15rem" }}>
        <div
          className="card-img position-relative"
          style={{ height: 300, width: "100%" }}
        >
          <Image
            src={service.image.link}
            alt={service.image.alt}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div
          className="card-img-overlay text-center d-flex rounded-0"
          style={{ boxShadow: "inset 0 0 0 1000px rgba(0, 0,0,0.65)" }}
        >
          <div className="my-auto">
            <h3 className="card-title fs-5 text-light">{service.name}</h3>
            <p className="card-text fs-7 text-light">{service.description}</p>
          </div>
          {/* <Link href={service.link} className="btn btn-tertiary fs-7">
            More
          </Link> */}
        </div>
      </div>
    </div>
  );
}
