import { memo, useState } from "react";
import { BusinessCardData } from "./BusinessCardForm";
import { CardPreview } from "./business-card/CardPreview";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { toast } from "sonner";

interface Props {
  data: BusinessCardData;
  onBack: () => void;
  onEdit: () => void;
}

export const BusinessCard = memo(({ data, onBack, onEdit }: Props) => {
  const [showEmbedCode, setShowEmbedCode] = useState(false);

  const handleCopyEmbedCode = () => {
    const embedCode = `
<div style="max-width: 500px; margin: 0 auto;">
  <div style="background-color: ${data.colors.background}; border-radius: 0.75rem; overflow: hidden; box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);">
    <div style="height: 12rem; background-color: ${data.colors.secondary}; position: relative;">
      ${data.photo ? `<img src="${data.photo}" alt="${data.name}" style="width: 12rem; height: 12rem; border-radius: 9999px; object-fit: cover; margin-top: 6rem; border: 4px solid white;" />` : ''}
    </div>
    <div style="padding: 1.5rem;">
      <h2 style="font-size: 1.5rem; font-weight: 600; color: ${data.colors.primary};">${data.name}</h2>
      ${data.jobTitle ? `<p style="color: ${data.colors.secondary};">${data.jobTitle}</p>` : ''}
      ${data.company ? `<p style="color: ${data.colors.accent};">${data.company}</p>` : ''}
      <div style="margin-top: 1rem;">
        ${data.phone ? `<p style="color: ${data.colors.primary};">📞 ${data.phone}</p>` : ''}
        ${data.email ? `<p style="color: ${data.colors.primary};">✉️ ${data.email}</p>` : ''}
        ${data.website ? `<p style="color: ${data.colors.primary};">🌐 ${data.website}</p>` : ''}
        ${data.address ? `<p style="color: ${data.colors.primary};">📍 ${data.address}</p>` : ''}
      </div>
    </div>
  </div>
</div>`;

    navigator.clipboard.writeText(embedCode);
    toast.success("Embed code copied to clipboard!");
    setShowEmbedCode(false);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <CardPreview data={data} />
      <div className="flex justify-center gap-4">
        <button
          onClick={onBack}
          className="px-6 py-3 text-base font-medium border rounded-md transition-all duration-300 hover:bg-brand-primary/5"
          style={{ 
            borderColor: data.colors.primary,
            color: data.colors.primary
          }}
        >
          Back
        </button>
        <button
          onClick={onEdit}
          className="px-6 py-3 text-base font-medium rounded-md transition-all duration-300 hover:opacity-90"
          style={{ 
            backgroundColor: data.colors.primary,
            color: "#FFFFFF"
          }}
        >
          Edit Card
        </button>
        <button
          onClick={() => setShowEmbedCode(true)}
          className="px-6 py-3 text-base font-medium border rounded-md transition-all duration-300 hover:bg-brand-primary/5"
          style={{ 
            borderColor: data.colors.accent,
            color: data.colors.accent
          }}
        >
          Get Embed Code
        </button>
      </div>

      <Dialog open={showEmbedCode} onOpenChange={setShowEmbedCode}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Embed Code</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <p className="text-sm text-muted-foreground mb-4">
              Copy the code below to embed this business card on your website:
            </p>
            <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
              <code className="text-sm">{`<div style="max-width: 500px; margin: 0 auto;">
  <!-- Business Card HTML will be generated here -->
</div>`}</code>
            </pre>
            <button
              onClick={handleCopyEmbedCode}
              className="mt-4 w-full px-6 py-3 text-base font-medium rounded-md transition-all duration-300 hover:opacity-90"
              style={{ 
                backgroundColor: data.colors.primary,
                color: "#FFFFFF"
              }}
            >
              Copy Embed Code
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
});

BusinessCard.displayName = "BusinessCard";