import { memo } from 'react';
import { BusinessCardData } from "../../BusinessCardForm";
import { HighLevelCardPreview } from "../HighLevelCardPreview";

interface HighLevelPreviewProps {
  data: BusinessCardData;
}

export const HighLevelPreview = memo(({ data }: HighLevelPreviewProps) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[448px] bg-white rounded-lg shadow-md overflow-hidden">
        <HighLevelCardPreview data={data} />
      </div>
    </div>
  );
});

HighLevelPreview.displayName = "HighLevelPreview";