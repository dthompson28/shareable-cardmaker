import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BusinessCardData } from "../BusinessCardForm";

interface ColorSectionProps {
  data: BusinessCardData;
  onChange: (field: string, value: string) => void;
}

export const ColorSection = ({ data, onChange }: ColorSectionProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Card Colors</h2>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="primaryColor">Primary Color</Label>
          <Input
            id="primaryColor"
            type="color"
            value={data.colors.primary}
            onChange={(e) => onChange("colors.primary", e.target.value)}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="secondaryColor">Secondary Color</Label>
          <Input
            id="secondaryColor"
            type="color"
            value={data.colors.secondary}
            onChange={(e) => onChange("colors.secondary", e.target.value)}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="backgroundColor">Background Color</Label>
          <Input
            id="backgroundColor"
            type="color"
            value={data.colors.background}
            onChange={(e) => onChange("colors.background", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};