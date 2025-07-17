const Card = ({
  title,
  titleSuffix,
  description,
  extraDescription,
  isCombo,
}: {
  title: string;
  description: string;
  titleSuffix?: string;
  isCombo?: boolean;
  extraDescription?: string;
}) => {
  return (
    <div
      className={`bg-elevated flex w-[45%] flex-col items-center rounded-xl px-8 py-5 text-center md:px-15 md:py-15 ${isCombo ? 'w-full md:w-[48%] md:pt-25 md:pb-20' : 'md:w-1/4'}`}
    >
      <div className="flex items-baseline">
        <span className="text-text-primary text-xl font-bold md:text-4xl">{title}</span>
        {titleSuffix && (
          <span className="text-text-primary text-sm font-semibold md:text-base">
            {titleSuffix}
          </span>
        )}
      </div>
      <span className="text-text-secondary text-semibold text-sm md:text-xl">{description}</span>
      {extraDescription && (
        <span className="text-text-secondary text-semibold text-sm md:text-xl">
          {extraDescription}
        </span>
      )}
    </div>
  );
};

export default Card;
