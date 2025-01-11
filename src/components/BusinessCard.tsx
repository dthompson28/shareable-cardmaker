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
    <div className="flex flex-col h-full gap-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-[#00674f]">Preview Your Business Card</h2>
        <Button onClick={onEdit} variant="outline" size="sm">
          Reset Form
        </Button>
      </div>
      
      <div className="flex-1 grid grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col h-[600px]">
          <h3 className="text-lg font-medium text-[#00674f]">Business Card Preview</h3>
          <div className="flex-1 flex items-center justify-center">
            <div className="w-[448px] h-[280px]">
              <CardPreview data={data} />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col h-[600px]">
          <h3 className="text-lg font-medium text-[#00674f]">HighLevel Preview</h3>
          <div className="flex-1 flex items-center justify-center">
            <div className="w-[448px] h-[280px]">
              <HighLevelPreview data={data} />
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