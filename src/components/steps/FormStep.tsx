import { BusinessCardData } from "@/components/BusinessCardForm";
import { BusinessCardForm } from "@/components/BusinessCardForm";

interface FormStepProps {
  data: BusinessCardData;
  onChange: (data: BusinessCardData) => void;
  onNext: () => void;
}

export const FormStep = ({ data, onChange, onNext }: FormStepProps) => {
  return (
    <BusinessCardForm
      data={data}
      onChange={onChange}
      onNext={onNext}
    />
  );
};