import { memo, useState } from "react";
import { BusinessCardData } from "./BusinessCardForm";
import { CardPreview } from "./business-card/CardPreview";
import { ActionButtons } from "./business-card/preview/ActionButtons";
import { EmbedCodeDialog } from "./business-card/embed/EmbedCodeDialog";

interface Props {
  data: BusinessCardData;
  onBack: () => void;
  onEdit: () => void;
}

export const BusinessCard = memo(({ data, onBack, onEdit }: Props) => {
  const [showEmbedCode, setShowEmbedCode] = useState(false);

  return (
    <div className="space-y-8 animate-fadeIn">
      <CardPreview data={data} />
      <ActionButtons
        data={data}
        onBack={onBack}
        onEdit={onEdit}
        onEmbed={() => setShowEmbedCode(true)}
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