import Service from "./service";

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

type ServiceListProps = {
  services: ServiceType[];
};

export default function ServiceList({ services }: ServiceListProps) {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5 mt-3 justify-content-start">
      {services.map((service, i) => (
        <Service key={i} service={service} />
      ))}
    </div>
  );
}
