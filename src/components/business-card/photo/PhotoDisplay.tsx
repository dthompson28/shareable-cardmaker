import { BusinessCardData } from "../../BusinessCardForm";

interface PhotoDisplayProps {
  data: BusinessCardData;
}

export const PhotoDisplay = ({ data }: PhotoDisplayProps) => {
  if (!data.photo) return null;

  return (
    <div 
      className="w-full h-48 bg-cover" 
      style={{ 
        backgroundImage: `url(${data.photo})`,
        backgroundPosition: `${data.photoPosition.x}% ${data.photoPosition.y}%`
      }} 
    />
  );
};