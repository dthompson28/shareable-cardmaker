import { memo } from 'react';
import { BusinessCardData } from "../../BusinessCardForm";
import { HighLevelCardPreview } from "../HighLevelCardPreview";

interface HighLevelPreviewProps {
  data: BusinessCardData;
}

export const HighLevelPreview = memo(({ data }: HighLevelPreviewProps) => {
  return (
    <div className="w-full h-full">
      <HighLevelCardPreview data={data} />
    </div>
  );
});

HighLevelPreview.displayName = "HighLevelPreview";