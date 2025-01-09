import { BusinessCardData } from "../../BusinessCardForm";

interface CardHeaderProps {
  data: BusinessCardData;
}

export const CardHeader = ({ data }: CardHeaderProps) => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold" style={{ color: data.colors.primary }}>{data.name}</h1>
      {data.company && (
        <p className="text-lg" style={{ color: data.colors.secondary }}>{data.company}</p>
      )}
    </div>
  );
};