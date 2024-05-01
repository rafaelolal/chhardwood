import Service from "./service";

type ServiceListProps = {
  className: string;
  services: ServiceType[];
};

export default function ServiceList({ className, services }: ServiceListProps) {
  return (
    <div className={className}>
      {services.map((service, i) => (
        <Service key={i} service={service} />
      ))}
    </div>
  );
}
