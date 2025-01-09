import { BusinessCardData } from "../../BusinessCardForm";

interface CardHeaderProps {
  data: BusinessCardData;
}

export const CardHeader = ({ data }: CardHeaderProps) => {
  if (data.photoStyle === 'compact') {
    return (
      <div className="text-left ml-32">
        <h1 
          className="text-3xl font-bold mb-1"
          style={{ color: data.colors.primary }}
        >
          {data.name}
        </h1>
        {data.company && (
          <p 
            className="text-xl mb-1"
            style={{ color: data.colors.secondary }}
          >
            {data.company}
          </p>
        )}
        {data.jobTitle && (
          <p 
            className="text-lg"
            style={{ color: data.colors.accent }}
          >
            {data.jobTitle}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="absolute bottom-4 left-4 text-left z-10">
      <h1 className="text-3xl font-bold text-white mb-1 drop-shadow-lg">{data.name}</h1>
      {data.jobTitle && (
        <p className="text-xl text-white/90 mb-1 drop-shadow-lg">{data.jobTitle}</p>
      )}
      {data.company && (
        <p className="text-xl text-white/90 drop-shadow-lg">{data.company}</p>
      )}
    </div>
  );
};