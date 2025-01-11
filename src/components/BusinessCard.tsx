import { memo, useState } from "react";
import { BusinessCardData } from "./BusinessCardForm";
import { CardPreview } from "./business-card/CardPreview";
import { Button } from "./ui/button";
import { HighLevelPreview } from "./business-card/preview/HighLevelPreview";
import { EmbedCodeDialog } from "./business-card/embed/EmbedCodeDialog";

interface BusinessCardProps {
  data: BusinessCardData;
  onBack: () => void;
  onEdit: () => void;
}

const BusinessCard = memo(({ data, onBack, onEdit }: BusinessCardProps) => {
  const [showEmbedCode, setShowEmbedCode] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-[#00674f]">Preview Your Business Card</h2>
          <Button onClick={onEdit} variant="outline" size="sm">
            Reset Form
          </Button>
        </div>
        
        <div className="flex justify-between gap-8">
          <div className="flex-1 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-medium mb-4 text-[#00674f]">Business Card Preview</h3>
            <div className="business-card-container w-full aspect-[16/10] flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center">
                <CardPreview data={data} />
              </div>
            </div>
          </div>
          
          <div className="flex-1 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-medium mb-4 text-[#00674f]">HighLevel Preview</h3>
            <div className="highlevel-preview-container w-full aspect-[16/10] flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center">
                <HighLevelPreview data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Button onClick={onBack} variant="outline">
          Back to Form
        </Button>
        <Button onClick={() => setShowEmbedCode(true)}>
          Get Embed Code
        </Button>
      </div>

      <EmbedCodeDialog
        open={showEmbedCode}
        onOpenChange={setShowEmbedCode}
        data={data}
      />
    </div>
  );
});

BusinessCard.displayName = "BusinessCard";

export default BusinessCard;