const Card = ({
  title,
  titleSuffix,
  description,
}: {
  title: string;
  titleSuffix?: string;
  description: string;
}) => {
  return (
    <div className="bg-elevated flex w-1/2 flex-col items-center rounded-lg px-8 py-5 text-center md:w-1/4 md:px-15 md:py-10">
      <div className="flex items-baseline">
        <span className="text-text-primary text-xl font-bold md:text-4xl">{title}</span>
        {titleSuffix && (
          <span className="text-text-primary text-sm font-semibold md:text-base">
            {titleSuffix}
          </span>
        )}
      </div>
      <span className="text-text-secondary text-sm md:text-xl">{description}</span>
    </div>
  );
};

export default Card;
