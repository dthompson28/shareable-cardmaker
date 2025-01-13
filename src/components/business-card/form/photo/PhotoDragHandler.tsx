import { useState, MouseEvent } from 'react';
import { BusinessCardData } from "@/types/businessCard";

interface PhotoDragHandlerProps {
  data: BusinessCardData;
  onChange: (field: string, value: any) => void;
  children: React.ReactNode;
}

export const PhotoDragHandler = ({ data, onChange, children }: PhotoDragHandlerProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e: MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;

    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const clampedX = Math.max(0, Math.min(100, x));
    const clampedY = Math.max(0, Math.min(100, y));

    onChange("photoPosition", {
      x: Math.round(clampedX),
      y: Math.round(clampedY)
    });
  };

  return (
    <div 
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      className="select-none"
    >
      {children}
    </div>
  );
};
