import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { toast } from "sonner";
import { BusinessCardData } from "../../BusinessCardForm";
import { generateEmbedCode, generateStyles } from "./EmbedCodeGenerator";

interface EmbedCodeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: BusinessCardData;
}

export const EmbedCodeDialog = ({ open, onOpenChange, data }: EmbedCodeDialogProps) => {
  const handleCopyCode = (code: string, type: string) => {
    navigator.clipboard.writeText(code);
    toast.success(`${type} code copied to clipboard!`);
  };

  const htmlCode = generateEmbedCode(data);
  const cssCode = generateStyles(data);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle>Embed Code</DialogTitle>
        </DialogHeader>
        <div className="mt-4 flex-1 overflow-hidden flex flex-col">
          <p className="text-sm text-muted-foreground mb-4">
            Copy and paste these codes into their respective sections in your HighLevel funnel:
          </p>
          <Tabs defaultValue="html" className="flex-1 overflow-hidden flex flex-col">
            <TabsList>
              <TabsTrigger value="html">HTML/JavaScript</TabsTrigger>
              <TabsTrigger value="css">CSS</TabsTrigger>
            </TabsList>
            <TabsContent value="html" className="flex-1 overflow-hidden flex flex-col">
              <div className="flex-1 overflow-y-auto">
                <pre className="bg-secondary p-4 rounded-md overflow-x-auto whitespace-pre-wrap">
                  <code className="text-sm">{htmlCode}</code>
                </pre>
              </div>
              <button
                onClick={() => handleCopyCode(htmlCode, "HTML/JavaScript")}
                className="mt-4 w-full px-6 py-3 text-base font-medium rounded-md transition-all duration-300 hover:opacity-90"
                style={{ 
                  backgroundColor: data.colors.primary,
                  color: "#FFFFFF"
                }}
              >
                Copy HTML/JavaScript
              </button>
            </TabsContent>
            <TabsContent value="css" className="flex-1 overflow-hidden flex flex-col">
              <div className="flex-1 overflow-y-auto">
                <pre className="bg-secondary p-4 rounded-md overflow-x-auto whitespace-pre-wrap">
                  <code className="text-sm">{cssCode}</code>
                </pre>
              </div>
              <button
                onClick={() => handleCopyCode(cssCode, "CSS")}
                className="mt-4 w-full px-6 py-3 text-base font-medium rounded-md transition-all duration-300 hover:opacity-90"
                style={{ 
                  backgroundColor: data.colors.primary,
                  color: "#FFFFFF"
                }}
              >
                Copy CSS
              </button>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};