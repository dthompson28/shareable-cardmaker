import { BusinessCardData } from "../../BusinessCardForm";

interface CardHeaderProps {
  data: BusinessCardData;
}

export const CardHeader = ({ data }: CardHeaderProps) => {
  return (
    <div className="text-center">
      <h1 
        className="text-2xl font-bold mb-2 text-brand-primary"
      >
        {data.name}
      </h1>
      {data.jobTitle && (
        <p 
          className="text-xl mb-1 text-brand-secondary"
        >
          {data.jobTitle}
        </p>
      )}
      {data.company && (
        <p 
          className="text-lg text-brand-secondary"
        >
          {data.company}
        </p>
      )}
    </div>
  );
};