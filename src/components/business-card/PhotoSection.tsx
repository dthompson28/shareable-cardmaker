import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { BusinessCardData } from "../BusinessCardForm";

interface PhotoSectionProps {
  data: BusinessCardData;
  onChange: (field: string, value: any) => void;
}

export const PhotoSection = ({ data, onChange }: PhotoSectionProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Photo Settings</h2>
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
          <div className="space-y-4">
            <Label>Photo Position</Label>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label>Horizontal (X)</Label>
                <Slider
                  value={[data.photoPosition.x]}
                  onValueChange={(value) => onChange("photoPosition.x", value[0])}
                  min={0}
                  max={100}
                  step={1}
                />
              </div>
              <div className="space-y-2">
                <Label>Vertical (Y)</Label>
                <Slider
                  value={[data.photoPosition.y]}
                  onValueChange={(value) => onChange("photoPosition.y", value[0])}
                  min={0}
                  max={100}
                  step={1}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};