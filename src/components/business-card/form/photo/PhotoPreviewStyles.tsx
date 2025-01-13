import { BusinessCardData } from "@/types/businessCard";

interface PhotoPreviewStylesProps {
  data: BusinessCardData;
  zoom: number;
}

export const FullWidthPhotoStyle = ({ data, zoom }: PhotoPreviewStylesProps) => {
  // Calculate minimum size to ensure coverage
  const backgroundSize = `${Math.max(100, zoom)}%`;

  return (
    <div className="relative">
      <div 
        className="w-full aspect-[16/9] bg-cover rounded-t-xl overflow-hidden border-2 border-gray-300"
        style={{
          backgroundImage: `url(${data.photo})`,
          backgroundPosition: `${data.photoPosition.x}% ${data.photoPosition.y}%`,
          backgroundSize,
          backgroundRepeat: 'no-repeat'
        }}
      />
    </div>
  );
};

export const CompactPhotoStyle = ({ data, zoom }: PhotoPreviewStylesProps) => {
  // Calculate minimum size to ensure coverage
  const backgroundSize = `${Math.max(100, zoom)}%`;

  return (
    <div className="relative h-48">
      <div className="absolute left-6">
        <div 
          className="w-48 h-48 rounded-full bg-cover border-4 border-white shadow-xl" 
          style={{ 
            backgroundImage: `url(${data.photo})`,
            backgroundPosition: `${data.photoPosition.x}% ${data.photoPosition.y}%`,
            backgroundSize,
            backgroundRepeat: 'no-repeat'
          }} 
        />
      </div>
    </div>
  );
};
