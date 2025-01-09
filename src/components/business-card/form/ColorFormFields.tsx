import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BusinessCardData } from "../../BusinessCardForm";

interface ColorFormFieldsProps {
  data: BusinessCardData;
  onChange: (field: string, value: string) => void;
}

export const ColorFormFields = ({ data, onChange }: ColorFormFieldsProps) => {
  return (
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
        <Label htmlFor="accentColor">Accent Color</Label>
        <Input
          id="accentColor"
          type="color"
          value={data.colors.accent}
          onChange={(e) => onChange("colors.accent", e.target.value)}
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
  );
};