import { memo, useState } from "react";
import { BusinessCardData } from "./BusinessCardForm";
import { CardPreview } from "./business-card/CardPreview";
import { HighLevelPreview } from "./business-card/preview/HighLevelPreview";
import { EmbedCodeDialog } from "./business-card/embed/EmbedCodeDialog";
import { PreviewContainer } from "./business-card/preview/PreviewContainer";
import { PreviewHeader } from "./business-card/preview/PreviewHeader";
import { PreviewActions } from "./business-card/preview/PreviewActions";

interface BusinessCardProps {
  data: BusinessCardData;
  onBack: () => void;
  onEdit: () => void;
}

const BusinessCard = memo(({ data, onBack, onEdit }: BusinessCardProps) => {
  const [showEmbedCode, setShowEmbedCode] = useState(false);

  return (
    <div className="flex flex-col h-full gap-4">
      <PreviewHeader onEdit={onEdit} />
      
      <div className="flex-1 grid grid-cols-2 gap-8">
        <PreviewContainer title="Business Card Preview">
          <CardPreview data={data} />
        </PreviewContainer>
        
        <PreviewContainer title="HighLevel Preview">
          <HighLevelPreview data={data} />
        </PreviewContainer>
      </div>

      <PreviewActions 
        onBack={onBack}
        onShowEmbedCode={() => setShowEmbedCode(true)}
      />

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