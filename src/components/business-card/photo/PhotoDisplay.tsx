import { BusinessCardData } from "../../BusinessCardForm";

interface PhotoDisplayProps {
  data: BusinessCardData;
}

export const PhotoDisplay = ({ data }: PhotoDisplayProps) => {
  if (!data.photo) return null;

  if (data.photoStyle === 'compact') {
    return (
      <>
        <div 
          className="w-full h-32 bg-[#1B4D3E]"
        />
        <div className="absolute top-16 left-6">
          <div 
            className="w-32 h-32 rounded-full bg-cover border-4 border-white shadow-xl" 
            style={{ 
              backgroundImage: `url(${data.photo})`,
              backgroundPosition: `${data.photoPosition.x}% ${data.photoPosition.y}%`
            }} 
          />
        </div>
      </>
    );
  }

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