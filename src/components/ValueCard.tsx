import Image from 'next/image';

type ValueCardProps = {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
};

const ValueCard = ({ icon, title, description, bgColor }: ValueCardProps) => {
  return (
    <div className="flex flex-col gap-4 max-w-sm">
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center ${bgColor}`}
      >
        <Image src={icon} alt={title} width={20} height={20} />
      </div>

      <h3 className="text-white font-gtamerica text-lg">{title}</h3>

      <p className="text-[#64635C] font-gtamerica text-base">{description}</p>
    </div>
  );
};

export default ValueCard
