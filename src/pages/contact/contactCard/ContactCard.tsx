import type { ReactNode } from 'react';

const ContactCard = ({ Icon, label, value }: { Icon: ReactNode; label: string; value: string }) => {
  return (
    <div className="bg-elevated flex w-full flex-col items-center rounded-xl p-10 text-center md:w-1/3 md:px-15 md:py-15">
      {Icon}
      <span className="text-text-secondary mt-5 text-sm md:text-base">{label}</span>
      <span className="text-text-primary text-xl font-bold md:text-2xl">{value}</span>
    </div>
  );
};

export default ContactCard;
