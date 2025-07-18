import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

interface ServiceProps {
  image: string;
  title: string;
  description: string;
  path: string;
}

const Service = ({ image, title, description, path }: ServiceProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onServiceClick = () => {
    navigate(path);
  };

  return (
    <div className="flex cursor-pointer flex-col items-center gap-3" onClick={onServiceClick}>
      <img src={image} alt={title} className="w-30 rounded-full" />
      <span className="text-text-primary text-2xl font-bold">{t(title)}</span>
      <span className="text-text-secondary max-w-80 text-center text-lg font-medium md:max-w-80">
        {t(description)}
      </span>
    </div>
  );
};

export default Service;
