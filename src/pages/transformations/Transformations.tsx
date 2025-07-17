import { useTranslation } from 'react-i18next';
import Transformation from './transformation/Transformation';
import { transformationsData } from './utils';

const Transformations = ({ className }: { className?: string }) => {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <h1 className="mt-10 px-10 text-4xl font-bold text-white md:px-[16%] md:text-6xl">
        {t('transformations')}
      </h1>
      <h1 className="text-white-75 mt-10 px-10 text-lg md:px-[16%] md:text-2xl">
        {t('transformationsDescription')}
      </h1>
      <div className="bg-background mt-10 flex flex-wrap justify-center gap-5 gap-y-5 p-5 md:gap-7 md:px-20 md:py-10">
        {transformationsData.map(item => (
          <Transformation
            key={item.title}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Transformations;
