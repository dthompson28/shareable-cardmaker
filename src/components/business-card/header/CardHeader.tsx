import { BusinessCardData } from "../../BusinessCardForm";

interface CardHeaderProps {
  data: BusinessCardData;
}

export const CardHeader = ({ data }: CardHeaderProps) => {
  return (
    <div className="absolute bottom-4 left-4 text-left">
      <h1 className="text-3xl font-bold text-white mb-1">{data.name}</h1>
      {data.company && (
        <p className="text-xl text-white/90">{data.company}</p>
      )}
    </div>
  );
};