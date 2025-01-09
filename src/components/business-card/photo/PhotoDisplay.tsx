import { BusinessCardData } from "../../BusinessCardForm";

interface PhotoDisplayProps {
  data: BusinessCardData;
}

export const PhotoDisplay = ({ data }: PhotoDisplayProps) => {
  if (!data.photo) return null;

  if (data.photoStyle === 'compact') {
    return (
      <div 
        className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10"
        style={{ 
          backgroundColor: 'white',
        }}
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${data.photo})`,
            backgroundPosition: `${data.photoPosition.x}% ${data.photoPosition.y}%`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
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
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }} 
    />
  );
};