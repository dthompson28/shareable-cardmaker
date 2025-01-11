import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { toast } from "sonner";
import { BusinessCardData } from "../../BusinessCardForm";
import { generateEmbedCode } from "./utils/EmbedCodeGenerator";

interface EmbedCodeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: BusinessCardData;
}

export const EmbedCodeDialog = ({ open, onOpenChange, data }: EmbedCodeDialogProps) => {
  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success("Embed code copied to clipboard!");
  };

  const embedCode = generateEmbedCode(data);
  const iframeCode = `<iframe src="data:text/html;base64,${btoa(embedCode)}" style="width: 100%; height: 600px; border: none;"></iframe>`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle>Embed Code</DialogTitle>
        </DialogHeader>
        <div className="mt-4 flex-1 overflow-hidden flex flex-col">
          <p className="text-sm text-muted-foreground mb-4">
            Copy and paste this code into your HighLevel funnel:
          </p>
          <div className="flex-1 overflow-y-auto">
            <pre className="bg-secondary p-4 rounded-md overflow-x-auto whitespace-pre-wrap">
              <code className="text-sm">{iframeCode}</code>
            </pre>
          </div>
          <button
            onClick={() => handleCopyCode(iframeCode)}
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