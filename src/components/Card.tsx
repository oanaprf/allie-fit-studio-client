const Card = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="bg-elevated flex h-[200px] w-screen flex-col items-center gap-2 rounded-lg p-10 text-center md:h-[340px] md:w-[40%] md:gap-5 md:px-15 md:py-20">
      <span className="text-text-primary mt-5 text-xl font-bold md:mt-10 md:text-2xl">{title}</span>
      <span className="text-text-secondary text-sm md:text-lg">{description}</span>
    </div>
  );
};

export default Card;
