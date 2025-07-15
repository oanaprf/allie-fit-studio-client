interface ScheduleCardProps {
  startHour: string;
  startMinutes: string;
  endHour: string;
  endMinutes: string;
  description: string;
}

const ScheduleCard = ({
  startHour,
  startMinutes,
  endHour,
  endMinutes,
  description,
}: ScheduleCardProps) => {
  return (
    <div className="flex flex-col items-center gap-2 px-2 py-10 md:p-10">
      <div className="flex items-center gap-2">
        <span className="flex">
          <span className="text-2xl font-bold md:text-4xl">{startHour}</span>
          <span className="text-sm font-bold md:text-base">{startMinutes}</span>
        </span>
        -
        <span className="flex">
          <span className="text-2xl font-bold md:text-4xl">{endHour}</span>
          <span className="text-sm font-bold md:text-base">{endMinutes}</span>
        </span>
      </div>
      <div className="text-text-secondary text-base font-medium">{description}</div>
    </div>
  );
};

export default ScheduleCard;
