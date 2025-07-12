import { useNavigate } from 'react-router-dom';

const Logo = ({ className }: { className?: string }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/');
  };

  return (
    <div className={`flex cursor-pointer items-baseline gap-3 ${className}`} onClick={onClick}>
      <span className="text-4xl font-bold text-white">AllieFit </span>
      <span className="text-white-50 text-3xl font-bold">Studio</span>
    </div>
  );
};

export default Logo;
