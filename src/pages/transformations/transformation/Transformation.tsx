import { useTranslation } from 'react-i18next';

interface TransformationProps {
  image: string;
  title: string;
  description: string;
}

const Transformation = ({ image, title, description }: TransformationProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center">
      <img src={image} alt={title} className="w-40 rounded-3xl md:w-90" />
      <span className="text-text-secondary mt-2 text-xl">{t(title)}</span>
      <span className="text-text-primary max-w-80 text-center text-sm font-bold md:max-w-80 md:text-xl">
        {t(description)}
      </span>
    </div>
  );
};

export default Transformation;
