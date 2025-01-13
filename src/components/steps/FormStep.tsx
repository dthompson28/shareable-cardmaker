import { BusinessCardData } from "@/types/businessCard";
import { BusinessCardForm } from "@/components/BusinessCardForm";

interface FormStepProps {
  data: BusinessCardData;
  onChange: (data: BusinessCardData) => void;
  onNext: () => void;
  onClear: () => void;
}

export const FormStep = ({ data, onChange, onNext, onClear }: FormStepProps) => {
  return (
    <BusinessCardForm
      data={data}
      onChange={onChange}
      onNext={onNext}
      onClear={onClear}
    />
  );
};