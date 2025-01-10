import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../ui/dialog";
import { toast } from "sonner";
import { BusinessCardData } from "../../BusinessCardForm";
import { generateEmbedCode } from "./EmbedCodeGenerator";

interface EmbedCodeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: BusinessCardData;
}

export const EmbedCodeDialog = ({ open, onOpenChange, data }: EmbedCodeDialogProps) => {
  const handleCopyEmbedCode = () => {
    const embedCode = generateEmbedCode(data);
    navigator.clipboard.writeText(embedCode);
    toast.success("Embed code copied to clipboard!");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Embed Code</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <p className="text-sm text-muted-foreground mb-4">
            Copy the code below to embed this business card on your website:
          </p>
          <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
            <code className="text-sm">{generateEmbedCode(data)}</code>
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
  );
};