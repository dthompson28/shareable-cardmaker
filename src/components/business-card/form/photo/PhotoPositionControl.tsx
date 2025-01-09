import { MouseEvent, useRef, useState } from "react";
import { BusinessCardData } from "../../BusinessCardForm";

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
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const x = ((e.clientX - rect.left - centerX) / (rect.width / 2)) * 100;
    const y = ((e.clientY - rect.top - centerY) / (rect.height / 2)) * 100;

    const normalizedX = 50 + (x / 2);
    const normalizedY = 50 - (y / 2);

    const clampedX = Math.max(0, Math.min(100, normalizedX));
    const clampedY = Math.max(0, Math.min(100, normalizedY));

    onChange("photoPosition.x", Math.round(clampedX));
    onChange("photoPosition.y", Math.round(clampedY));
  };

  return (
    <div 
      className="relative max-w-md mx-auto mb-8"
      ref={previewRef}
    >
      {data.photoStyle === 'compact' ? (
        <div className="relative flex justify-center">
          <div 
            className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl cursor-move"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
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
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
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