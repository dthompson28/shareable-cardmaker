import { memo, useState } from "react";
import { BusinessCardData } from "./BusinessCardForm";
import { CardPreview } from "./business-card/CardPreview";
import { HighLevelPreview } from "./business-card/preview/HighLevelPreview";
import { ActionButtons } from "./business-card/preview/ActionButtons";
import { EmbedCodeDialog } from "./business-card/embed/EmbedCodeDialog";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "./ui/resizable";

interface Props {
  data: BusinessCardData;
  onBack: () => void;
  onEdit: () => void;
}

export const BusinessCard = memo(({ data, onBack, onEdit }: Props) => {
  const [showEmbedCode, setShowEmbedCode] = useState(false);

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="min-h-[600px] rounded-lg border">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <div id="business-card-preview" className="w-full">
                <CardPreview data={data} />
              </div>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <div className="w-full">
                <HighLevelPreview data={data} />
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      
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