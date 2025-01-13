import { BusinessCardData } from "@/types/businessCard";
import { ColorFormFields } from "./form/ColorFormFields";

interface ColorSectionProps {
  data: BusinessCardData;
  onChange: (field: string, value: string) => void;
}

export const ColorSection = ({ data, onChange }: ColorSectionProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Card Colors</h2>
      <ColorFormFields data={data} onChange={onChange} />
    </div>
  );
};