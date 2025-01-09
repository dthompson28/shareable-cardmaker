import { BusinessCardData } from "../../BusinessCardForm";

interface PhotoDisplayProps {
  data: BusinessCardData;
}

export const PhotoDisplay = ({ data }: PhotoDisplayProps) => {
  if (!data.photo) return null;

  if (data.photoStyle === 'compact') {
    return (
      <div className="absolute left-6 top-6">
        <div 
          className="w-32 h-32 rounded-full bg-cover border-4 border-white shadow-xl" 
          style={{ 
            backgroundImage: `url(${data.photo})`,
            backgroundPosition: `${data.photoPosition.x}% ${data.photoPosition.y}%`,
            backgroundSize: 'cover'
          }} 
        />
      </div>
    );
  }

  return (
    <div 
      className="w-full h-72 bg-cover" 
      style={{ 
        backgroundImage: `url(${data.photo})`,
        backgroundPosition: `${data.photoPosition.x}% ${data.photoPosition.y}%`,
        backgroundSize: 'cover'
      }} 
    />
  );
};