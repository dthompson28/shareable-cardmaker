import { memo, useState } from "react";
import { BusinessCardData } from "./BusinessCardForm";
import { CardPreview } from "./business-card/CardPreview";
import { HighLevelPreview } from "./business-card/preview/HighLevelPreview";
import { ActionButtons } from "./business-card/preview/ActionButtons";
import { EmbedCodeDialog } from "./business-card/embed/EmbedCodeDialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface Props {
  data: BusinessCardData;
  onBack: () => void;
  onEdit: () => void;
}

export const BusinessCard = memo(({ data, onBack, onEdit }: Props) => {
  const [showEmbedCode, setShowEmbedCode] = useState(false);

  return (
    <div className="space-y-8 animate-fadeIn">
      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="highlevel">HighLevel Preview</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="mt-4">
          <div id="business-card-preview" className="w-full">
            <CardPreview data={data} />
          </div>
        </TabsContent>
        <TabsContent value="highlevel" className="mt-4">
          <div className="w-full">
            <HighLevelPreview data={data} />
          </div>
        </TabsContent>
      </Tabs>
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