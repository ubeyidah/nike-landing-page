import { services } from "../constants";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((item) => (
        <ServiceCard key={item.label} {...item} />
      ))}
    </section>
  );
};

export default Services;
