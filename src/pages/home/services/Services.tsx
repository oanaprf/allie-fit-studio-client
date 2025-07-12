import Service from './service/Service';
import { serviceData } from './utils';

const Services = () => {
  return (
    <div className="bg-background flex w-screen flex-wrap justify-evenly gap-y-15 px-5 py-20 md:px-50">
      {serviceData.map(service => (
        <Service
          key={service.title}
          image={service.image}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
};

export default Services;
