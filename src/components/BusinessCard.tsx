import { memo } from "react";
import { BusinessCardData } from "./BusinessCardForm";
import { CardPreview } from "./business-card/CardPreview";
import { Button } from "./ui/button";
import { HighLevelPreview } from "./business-card/preview/HighLevelPreview";

interface BusinessCardProps {
  data: BusinessCardData;
  onBack: () => void;
  onEdit: () => void;
}

const BusinessCard = memo(({ data, onBack, onEdit }: BusinessCardProps) => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between gap-8">
        <div className="w-[448px] h-[500px] flex items-center justify-center bg-white rounded-lg shadow-md">
          <CardPreview data={data} />
        </div>
        <div className="w-[448px] h-[500px] flex items-center justify-center bg-white rounded-lg shadow-md">
          <HighLevelPreview data={data} />
        </div>
      </div>
      <div className="flex justify-between">
        <Button onClick={onBack} variant="outline">
          Back
        </Button>
        <Button onClick={onEdit}>Edit</Button>
      </div>
    </div>
  );
});

BusinessCard.displayName = "BusinessCard";

export default BusinessCard;