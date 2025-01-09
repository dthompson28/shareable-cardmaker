import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { BusinessCardData } from "../../BusinessCardForm";

interface LogoFormFieldsProps {
  data: BusinessCardData;
  onChange: (field: string, value: any) => void;
}

export const LogoFormFields = ({ data, onChange }: LogoFormFieldsProps) => {
  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="logo">Logo URL</Label>
        <Input
          id="logo"
          placeholder="https://example.com/logo.png"
          value={data.logo || ''}
          onChange={(e) => onChange("logo", e.target.value)}
        />
      </div>

      {data.logo && (
        <>
          <div className="space-y-2">
            <Label>Preview</Label>
            <div className="relative w-32 h-32 rounded-xl overflow-hidden border border-border mx-auto">
              <div
                className="w-full h-full bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${data.logo})`,
                  backgroundPosition: `${data.logoPosition?.x || 50}% ${data.logoPosition?.y || 50}%`,
                }}
              />
            </div>
          </div>

          <div className="space-y-4">
            <Label>Logo Position</Label>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label>Horizontal (X)</Label>
                <Slider
                  value={[data.logoPosition?.x || 50]}
                  onValueChange={(value) => onChange("logoPosition.x", value[0])}
                  min={0}
                  max={100}
                  step={1}
                />
              </div>
              <div className="space-y-2">
                <Label>Vertical (Y)</Label>
                <Slider
                  value={[data.logoPosition?.y || 50]}
                  onValueChange={(value) => onChange("logoPosition.y", value[0])}
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