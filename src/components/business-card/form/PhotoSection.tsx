import { BusinessCardData } from "@/types/businessCard";
import { PhotoFormFields } from "./PhotoFormFields";

interface PhotoSectionProps {
  data: BusinessCardData;
  onChange: (field: string, value: any) => void;
}

export const PhotoSection = ({ data, onChange }: PhotoSectionProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Photo Settings</h2>
      <PhotoFormFields data={data} onChange={onChange} />
    </div>
  );
};