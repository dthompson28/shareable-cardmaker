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
          className="px-4 py-2 text-sm font-medium border rounded-md hover:opacity-80 transition-opacity"
          style={{ 
            backgroundColor: "#f5f5f5",
            color: "#00674f",
            borderColor: "#00674f"
          }}
        >
          Back
        </button>
        <button
          onClick={onEdit}
          className="px-4 py-2 text-sm font-medium border rounded-md hover:opacity-80 transition-opacity"
          style={{ 
            backgroundColor: "#00674f",
            color: "#f5f5f5",
          }}
        >
          Edit Card
        </button>
      </div>
    </div>
  );
});

BusinessCard.displayName = "BusinessCard";