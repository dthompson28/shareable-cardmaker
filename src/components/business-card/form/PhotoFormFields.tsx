import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { BusinessCardData } from "../../BusinessCardForm";

interface PhotoFormFieldsProps {
  data: BusinessCardData;
  onChange: (field: string, value: any) => void;
}

export const PhotoFormFields = ({ data, onChange }: PhotoFormFieldsProps) => {
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
            <Label>Preview</Label>
            <div className={`relative ${data.photoStyle === 'full' ? 'h-48' : 'h-24'} rounded-t-xl overflow-hidden border border-border`}>
              <div
                className="w-full h-full bg-cover"
                style={{
                  backgroundImage: `url(${data.photo})`,
                  backgroundPosition: `${data.photoPosition.x}% ${data.photoPosition.y}%`,
                }}
              />
            </div>
          </div>

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
        </>
      )}
    </div>
  );
};