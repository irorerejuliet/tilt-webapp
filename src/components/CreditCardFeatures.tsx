
import Image from "next/image";
import React from "react";

interface FeatureProps {
icon: string;
  title: string; 
  subtitle?: string; 
}

const CreditCardFeatures: React.FC<FeatureProps> = ({
  icon,
  title,
  subtitle,
}) => {
  return (
    <div className="flex gap-3 items-start">
      <Image src={icon} alt="users" width={20} height={20}  className="invert"/>
      <div>
        <p className="text-white font-semibold leading-tight">{title}</p>
        {subtitle && <p className="text-neutral-400 text-sm">{subtitle}</p>}
      </div>
    </div>
  );
};

export default CreditCardFeatures;
