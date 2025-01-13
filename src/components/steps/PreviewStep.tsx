import { BusinessCardData } from "@/types/businessCard";
import { CardPreview } from "@/components/business-card/CardPreview";
import { PreviewActions } from "@/components/business-card/preview/PreviewActions";

interface PreviewStepProps {
  data: BusinessCardData;
  onBack: () => void;
  onEdit: () => void;
}

export const PreviewStep = ({ data, onBack, onEdit }: PreviewStepProps) => {
  return (
    <div className="space-y-8">
      <CardPreview data={data} />
      <PreviewActions
        data={data}
        onBack={onBack}
        onEdit={onEdit}
      />
    </div>
  );
};