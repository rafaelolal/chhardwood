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
    <div className="row py-2 pb-5 justify-content-start">
      {services.map((service, i) => (
        <Service key={i} service={service} />
      ))}
    </div>
  );
}
