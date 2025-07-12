import { useTranslation } from 'react-i18next';
import Transformation from './transformation/Transformation';
import { transformationsData } from './utils';

function Transformations({ className }: { className?: string }) {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <h1 className="mt-15 px-10 text-4xl font-bold text-white md:px-[16%]">
        {t('transformations')}
      </h1>
      <h1 className="text-white-75 mt-8 px-10 text-lg md:mt-15 md:px-[16%] md:text-3xl">
        {t('transformationsDescription')}
      </h1>
      <div className="bg-background mt-15 flex flex-wrap justify-center gap-5 gap-y-5 p-5 md:gap-7 md:p-20">
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
}

export default Transformations;
