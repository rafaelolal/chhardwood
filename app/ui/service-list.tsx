import Service from "./service";

type ServiceListProps = {
  services: ServiceType[];
};

export default function ServiceList({ services }: ServiceListProps) {
  return (
    <>
      {services.map((service, i) => (
        <Service key={i} service={service} />
      ))}
    </>
  );
}
