import { memo } from "react";
import { BusinessCardData } from "./BusinessCardForm";
import { CardPreview } from "./business-card/CardPreview";

interface Props {
  data: BusinessCardData;
  onBack: () => void;
  onEdit: () => void;
}

export const BusinessCard = memo(({ data, onBack, onEdit }: Props) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <CardPreview data={data} />
      <div className="flex justify-center gap-4">
        <button
          onClick={onBack}
          className="px-6 py-3 text-base font-medium border rounded-md transition-all duration-300 hover:bg-brand-primary/5"
          style={{ 
            borderColor: data.colors.primary,
            color: data.colors.primary
          }}
        >
          Back
        </button>
        <button
          onClick={onEdit}
          className="px-6 py-3 text-base font-medium rounded-md transition-all duration-300 hover:opacity-90"
          style={{ 
            backgroundColor: data.colors.primary,
            color: "#FFFFFF"
          }}
        >
          Edit Card
        </button>
      </div>
    </div>
  );
});

BusinessCard.displayName = "BusinessCard";