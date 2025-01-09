import { BusinessCardData } from "../BusinessCardForm";
import { LogoFormFields } from "./form/LogoFormFields";

interface LogoSectionProps {
  data: BusinessCardData;
  onChange: (field: string, value: any) => void;
}

export const LogoSection = ({ data, onChange }: LogoSectionProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Business Logo</h2>
      <LogoFormFields data={data} onChange={onChange} />
    </div>
  );
};