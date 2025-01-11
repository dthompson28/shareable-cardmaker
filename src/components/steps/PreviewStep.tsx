import { BusinessCardData } from "@/components/BusinessCardForm";
import BusinessCard from "@/components/BusinessCard";

interface PreviewStepProps {
  data: BusinessCardData;
  onBack: () => void;
  onEdit: () => void;
}

export const PreviewStep = ({ data, onBack, onEdit }: PreviewStepProps) => {
  return (
    <BusinessCard
      data={data}
      onBack={onBack}
      onEdit={onEdit}
    />
  );
};