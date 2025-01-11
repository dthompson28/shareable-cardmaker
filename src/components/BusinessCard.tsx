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
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-[#00674f]">Preview Your Business Card</h2>
          <Button onClick={onEdit} variant="outline" size="sm">
            Reset Form
          </Button>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 h-[500px] flex flex-col">
            <h3 className="text-lg font-medium mb-4 text-[#00674f]">Business Card Preview</h3>
            <div className="relative flex-1 w-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[448px] h-[280px]">
                  <CardPreview data={data} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 h-[500px] flex flex-col">
            <h3 className="text-lg font-medium mb-4 text-[#00674f]">HighLevel Preview</h3>
            <div className="relative flex-1 w-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[448px] h-[280px]">
                  <HighLevelPreview data={data} />
                </div>
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