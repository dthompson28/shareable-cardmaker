import { memo } from 'react';
import { BusinessCardData } from "../../BusinessCardForm";
import { HighLevelCardPreview } from "../HighLevelCardPreview";

interface HighLevelPreviewProps {
  data: BusinessCardData;
}

export const HighLevelPreview = memo(({ data }: HighLevelPreviewProps) => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <HighLevelCardPreview data={data} />
      </div>
    </div>
  );
});

HighLevelPreview.displayName = "HighLevelPreview";