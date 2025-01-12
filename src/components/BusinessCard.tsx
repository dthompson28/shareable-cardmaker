import { memo, useState, useRef } from "react";
import { BusinessCardData } from "./BusinessCardForm";
import { CardPreview } from "./business-card/CardPreview";
import { EmbedCodeDialog } from "./business-card/embed/EmbedCodeDialog";
import { PreviewContainer } from "./business-card/preview/PreviewContainer";
import { PreviewHeader } from "./business-card/preview/PreviewHeader";
import { PreviewActions } from "./business-card/preview/PreviewActions";
import { SaveCardDialog } from "./business-card/preview/SaveCardDialog";

interface BusinessCardProps {
  data: BusinessCardData;
  onBack: () => void;
  onEdit: () => void;
}

const BusinessCard = memo(({ data, onBack, onEdit }: BusinessCardProps) => {
  const [showEmbedCode, setShowEmbedCode] = useState(false);
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col h-full gap-4">
      <PreviewHeader onEdit={onEdit} />
      
      <div className="flex-1">
        <PreviewContainer title="Business Card Preview">
          <div ref={previewRef}>
            <CardPreview data={data} />
          </div>
        </PreviewContainer>
      </div>

      <PreviewActions 
        data={data}
        onBack={onBack}
        onShowEmbedCode={() => setShowEmbedCode(true)}
        onSave={() => setShowSaveDialog(true)}
      />

      <EmbedCodeDialog
        open={showEmbedCode}
        onOpenChange={setShowEmbedCode}
        data={data}
      />

      <SaveCardDialog
        open={showSaveDialog}
        onOpenChange={setShowSaveDialog}
        data={data}
        previewRef={previewRef}
      />
    </div>
  );
});

BusinessCard.displayName = "BusinessCard";

export default BusinessCard;