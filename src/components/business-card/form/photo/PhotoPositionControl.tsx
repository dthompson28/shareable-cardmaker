import { MouseEvent, useRef, useState } from "react";
import { BusinessCardData } from "@/components/BusinessCardForm";

interface PhotoPositionControlProps {
  data: BusinessCardData;
  zoom: number;
  onChange: (field: string, value: any) => void;
}

export const PhotoPositionControl = ({ data, zoom, onChange }: PhotoPositionControlProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !previewRef.current) return;

    const rect = previewRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate position as percentage
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    // Invert the percentages to make the movement feel more natural
    const invertedX = 100 - xPercent;
    const invertedY = 100 - yPercent;

    // Clamp values between 0 and 100
    const clampedX = Math.max(0, Math.min(100, invertedX));
    const clampedY = Math.max(0, Math.min(100, invertedY));

    onChange("photoPosition.x", Math.round(clampedX));
    onChange("photoPosition.y", Math.round(clampedY));
  };

  return (
    <div 
      className="relative max-w-md mx-auto mb-8"
      ref={previewRef}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {data.photoStyle === 'compact' ? (
        <div className="relative flex justify-center">
          <div 
            className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl cursor-move"
            onMouseDown={handleMouseDown}
            style={{ 
              backgroundImage: `url(${data.photo})`,
              backgroundPosition: `${data.photoPosition.x}% ${data.photoPosition.y}%`,
              backgroundSize: `${zoom}%`,
              backgroundRepeat: 'no-repeat'
            }} 
          />
        </div>
      ) : (
        <div 
          className="w-full aspect-[16/9] bg-cover rounded-t-xl overflow-hidden cursor-move"
          onMouseDown={handleMouseDown}
          style={{
            backgroundImage: `url(${data.photo})`,
            backgroundPosition: `${data.photoPosition.x}% ${data.photoPosition.y}%`,
            backgroundSize: `${zoom}%`
          }}
        />
      )}
    </div>
  );
};