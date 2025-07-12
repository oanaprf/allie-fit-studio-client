import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { camelToDashCase } from '../utils';

interface ServiceProps {
  image: string;
  title: string;
  description: string;
}

const Service = ({ image, title, description }: ServiceProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onServiceClick = () => {
    navigate(`/${camelToDashCase(title)}`);
  };

  return (
    <div className="flex cursor-pointer flex-col items-center gap-3" onClick={onServiceClick}>
      <img src={image} alt={title} className="w-30 rounded-full" />
      <span className="text-text-primary text-xl font-bold">{t(title)}</span>
      <span className="text-text-secondary max-w-80 text-center text-sm font-medium md:max-w-80 md:text-lg">
        {t(description)}
      </span>
    </div>
  );
};

export default Service;
