import { memo } from "react";
import { BusinessCardData } from "@/types/businessCard";
import { FormStep } from "@/components/steps/FormStep";
import { PreviewStep } from "@/components/steps/PreviewStep";

interface BusinessCardContentProps {
  step: number;
  data: BusinessCardData;
  onEdit: () => void;
  onBack: () => void;
  onChange: (data: BusinessCardData) => void;
  onClear: () => void;
  onNext: () => void;
}

export const BusinessCardContent = memo(({ 
  step,
  data,
  onEdit,
  onBack,
  onChange,
  onClear,
  onNext
}: BusinessCardContentProps) => {
  return (
    <>
      {step === 1 ? (
        <FormStep
          data={data}
          onChange={onChange}
          onNext={onNext}
          onClear={onClear}
        />
      ) : (
        <PreviewStep
          data={data}
          onBack={onBack}
          onEdit={onEdit}
        />
      )}
    </>
  );
});

BusinessCardContent.displayName = "BusinessCardContent";