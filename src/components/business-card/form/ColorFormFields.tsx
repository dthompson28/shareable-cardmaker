import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BusinessCardData } from "@/types/businessCard";

interface ColorFormFieldsProps {
  data: BusinessCardData;
  onChange: (field: string, value: string) => void;
}

export const ColorFormFields = ({ data, onChange }: ColorFormFieldsProps) => {
  const handleColorChange = (field: string, value: string) => {
    // Ensure the value starts with #
    const colorValue = value.startsWith('#') ? value : `#${value}`;
    onChange(field, colorValue);
  };

  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="primaryColor">Primary Color (Hex)</Label>
        <div className="flex gap-2">
          <Input
            id="primaryColor"
            type="text"
            value={data.colors.primary}
            onChange={(e) => handleColorChange("colors.primary", e.target.value)}
            placeholder="#000000"
            className="font-mono"
          />
          <Input
            type="color"
            value={data.colors.primary}
            onChange={(e) => handleColorChange("colors.primary", e.target.value)}
            className="w-12 h-10 p-1"
          />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="secondaryColor">Secondary Color (Hex)</Label>
        <div className="flex gap-2">
          <Input
            id="secondaryColor"
            type="text"
            value={data.colors.secondary}
            onChange={(e) => handleColorChange("colors.secondary", e.target.value)}
            placeholder="#000000"
            className="font-mono"
          />
          <Input
            type="color"
            value={data.colors.secondary}
            onChange={(e) => handleColorChange("colors.secondary", e.target.value)}
            className="w-12 h-10 p-1"
          />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="accentColor">Accent Color (Hex)</Label>
        <div className="flex gap-2">
          <Input
            id="accentColor"
            type="text"
            value={data.colors.accent}
            onChange={(e) => handleColorChange("colors.accent", e.target.value)}
            placeholder="#000000"
            className="font-mono"
          />
          <Input
            type="color"
            value={data.colors.accent}
            onChange={(e) => handleColorChange("colors.accent", e.target.value)}
            className="w-12 h-10 p-1"
          />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="backgroundColor">Background Color (Hex)</Label>
        <div className="flex gap-2">
          <Input
            id="backgroundColor"
            type="text"
            value={data.colors.background}
            onChange={(e) => handleColorChange("colors.background", e.target.value)}
            placeholder="#000000"
            className="font-mono"
          />
          <Input
            type="color"
            value={data.colors.background}
            onChange={(e) => handleColorChange("colors.background", e.target.value)}
            className="w-12 h-10 p-1"
          />
        </div>
      </div>
    </div>
  );
};
