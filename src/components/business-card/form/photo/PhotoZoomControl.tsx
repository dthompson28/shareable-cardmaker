import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface PhotoZoomControlProps {
  zoom: number;
  onZoomChange: (value: number) => void;
}

export const PhotoZoomControl = ({ zoom, onZoomChange }: PhotoZoomControlProps) => {
  return (
    <div className="space-y-2">
      <Label>Zoom</Label>
      <Slider
        value={[zoom]}
        onValueChange={(value) => onZoomChange(value[0])}
        min={50}
        max={200}
        step={1}
      />
    </div>
  );
};