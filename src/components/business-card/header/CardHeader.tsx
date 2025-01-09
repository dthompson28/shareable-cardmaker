import { BusinessCardData } from "../../BusinessCardForm";

interface CardHeaderProps {
  data: BusinessCardData;
}

export const CardHeader = ({ data }: CardHeaderProps) => {
  if (data.photoStyle === 'compact') {
    return (
      <div className="absolute left-6 top-52 text-left">
        <h1 className="text-3xl font-bold mb-1" style={{ color: data.colors.primary }}>{data.name}</h1>
        {data.jobTitle && (
          <p className="text-xl mb-1" style={{ color: data.colors.secondary }}>{data.jobTitle}</p>
        )}
        {data.company && (
          <p className="text-xl" style={{ color: data.colors.secondary }}>{data.company}</p>
        )}
      </div>
    );
  }

  return (
    <div className="absolute bottom-4 left-4 text-left">
      <h1 className="text-3xl font-bold text-white mb-1">{data.name}</h1>
      {data.jobTitle && (
        <p className="text-xl text-white/90 mb-1">{data.jobTitle}</p>
      )}
      {data.company && (
        <p className="text-xl text-white/90">{data.company}</p>
      )}
    </div>
  );
};