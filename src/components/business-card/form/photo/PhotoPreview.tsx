import { Label } from "@/components/ui/label";
import { useState, useRef, MouseEvent } from "react";
import { BusinessCardData } from "../../../BusinessCardForm";

interface PhotoPreviewProps {
  data: BusinessCardData;
  onChange: (field: string, value: any) => void;
  zoom: number;
}

export const PhotoPreview = ({ data, onChange, zoom }: PhotoPreviewProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !previewRef.current) return;

    const rect = previewRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = 100 - ((e.clientY - rect.top) / rect.height) * 100;

    const clampedX = Math.max(0, Math.min(100, x));
    const clampedY = Math.max(0, Math.min(100, y));

    onChange("photoPosition.x", Math.round(clampedX));
    onChange("photoPosition.y", Math.round(clampedY));
  };

  return (
    <div className="space-y-2">
      <Label>Preview (Click and drag to position)</Label>
      <div 
        className="relative max-w-md mx-auto cursor-move"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        ref={previewRef}
      >
        {data.photoStyle === 'compact' ? (
          <div className="relative">
            <div className="absolute top-0 left-6">
              <div 
                className="w-48 h-48 rounded-full bg-cover border-4 border-white shadow-xl" 
                style={{ 
                  backgroundImage: `url(${data.photo})`,
                  backgroundPosition: `${data.photoPosition.x}% ${data.photoPosition.y}%`,
                  backgroundSize: `${zoom}%`
                }} 
              />
            </div>
          </div>
        ) : (
          <div 
            className="w-full aspect-[16/9] bg-cover rounded-t-xl overflow-hidden"
            style={{
              backgroundImage: `url(${data.photo})`,
              backgroundPosition: `${data.photoPosition.x}% ${data.photoPosition.y}%`,
              backgroundSize: `${zoom}%`
            }}
          />
        )}
      </div>
    </div>
  );
};