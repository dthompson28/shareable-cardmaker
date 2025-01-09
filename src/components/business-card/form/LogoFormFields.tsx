import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { BusinessCardData } from "../../BusinessCardForm";

interface LogoFormFieldsProps {
  data: BusinessCardData;
  onChange: (field: string, value: any) => void;
}

export const LogoFormFields = ({ data, onChange }: LogoFormFieldsProps) => {
  const handlePositionChange = (value: string) => {
    const positions = {
      'top-left': { x: 0, y: 0 },
      'top-right': { x: 100, y: 0 },
      'bottom-left': { x: 0, y: 100 },
      'bottom-right': { x: 100, y: 100 },
    };
    
    onChange("logoPosition", positions[value as keyof typeof positions]);
  };

  const getCurrentPosition = () => {
    const { x = 50, y = 50 } = data.logoPosition || {};
    if (x === 0 && y === 0) return 'top-left';
    if (x === 100 && y === 0) return 'top-right';
    if (x === 0 && y === 100) return 'bottom-left';
    if (x === 100 && y === 100) return 'bottom-right';
    return 'top-right';
  };

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
            <RadioGroup
              value={getCurrentPosition()}
              onValueChange={handlePositionChange}
              className="grid grid-cols-2 gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="top-left" id="top-left" />
                <Label htmlFor="top-left">Top Left</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="top-right" id="top-right" />
                <Label htmlFor="top-right">Top Right</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bottom-left" id="bottom-left" />
                <Label htmlFor="bottom-left">Bottom Left</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bottom-right" id="bottom-right" />
                <Label htmlFor="bottom-right">Bottom Right</Label>
              </div>
            </RadioGroup>
          </div>
        </>
      )}
    </div>
  );
};