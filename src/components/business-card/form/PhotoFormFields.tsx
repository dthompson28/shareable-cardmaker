import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { BusinessCardData } from "../../BusinessCardForm";
import { useState, useRef, MouseEvent } from "react";

interface PhotoFormFieldsProps {
  data: BusinessCardData;
  onChange: (field: string, value: any) => void;
}

export const PhotoFormFields = ({ data, onChange }: PhotoFormFieldsProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(100);

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
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    // Clamp values between 0 and 100
    const clampedX = Math.max(0, Math.min(100, x));
    const clampedY = Math.max(0, Math.min(100, y));

    onChange("photoPosition.x", Math.round(clampedX));
    onChange("photoPosition.y", Math.round(clampedY));
  };

  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="photo">Photo URL</Label>
        <Input
          id="photo"
          placeholder="https://example.com/photo.jpg"
          value={data.photo}
          onChange={(e) => onChange("photo", e.target.value)}
        />
      </div>

      {data.photo && (
        <>
          <div className="flex items-center space-x-2">
            <Switch
              id="photo-style"
              checked={data.photoStyle === 'full'}
              onCheckedChange={(checked) => 
                onChange("photoStyle", checked ? 'full' : 'compact')
              }
            />
            <Label htmlFor="photo-style">Use full-width photo header</Label>
          </div>

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
                  <div className="w-full h-32 bg-[#00674f]" />
                  <div className="absolute top-16 left-6">
                    <div 
                      className="w-32 h-32 rounded-full bg-cover border-4 border-white shadow-xl" 
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

          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Zoom</Label>
              <Slider
                value={[zoom]}
                onValueChange={(value) => setZoom(value[0])}
                min={100}
                max={200}
                step={1}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};