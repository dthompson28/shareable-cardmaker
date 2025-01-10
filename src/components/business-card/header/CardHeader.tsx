import { BusinessCardData } from "../../BusinessCardForm";

interface CardHeaderProps {
  data: BusinessCardData;
}

export const CardHeader = ({ data }: CardHeaderProps) => {
  if (data.photoStyle === 'compact') {
    return (
      <div className="text-left">
        <h1 
          className="text-3xl font-bold mb-2 font-playfair"
          style={{ color: data.colors.primary }}
        >
          {data.name}
        </h1>
        {data.jobTitle && (
          <p 
            className="text-xl mb-1 font-playfair"
            style={{ color: data.colors.secondary }}
          >
            {data.jobTitle}
          </p>
        )}
        {data.company && (
          <p 
            className="text-lg font-playfair"
            style={{ color: data.colors.accent }}
          >
            {data.company}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="absolute bottom-6 left-6 text-left z-10">
      <h1 className="text-3xl font-bold text-white mb-2 drop-shadow-lg font-playfair">
        {data.name}
      </h1>
      {data.jobTitle && (
        <p className="text-xl text-white/90 mb-1 drop-shadow-lg font-playfair">
          {data.jobTitle}
        </p>
      )}
      {data.company && (
        <p className="text-xl text-white/90 drop-shadow-lg font-playfair">
          {data.company}
        </p>
      )}
    </div>
  );
};