import { useState } from "react";
import { useLocation } from "react-router-dom";
import { BusinessCardData } from "@/components/BusinessCardForm";
import { generateEmbedCode, generateStyles } from "@/components/business-card/embed/EmbedCodeGenerator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Preview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state?.data as BusinessCardData;

  const [activeTab, setActiveTab] = useState("preview");

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl font-bold mb-4">No data available</h1>
        <Button onClick={() => navigate("/")}>Go back to editor</Button>
      </div>
    );
  }

  const htmlCode = generateEmbedCode(data);
  const cssCode = generateStyles(data);

  const handleCopyCode = (code: string, type: string) => {
    navigator.clipboard.writeText(code);
    toast.success(`${type} code copied to clipboard!`);
  };

  return (
    <div className="container max-w-6xl mx-auto p-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">HighLevel Preview</h1>
        <Button onClick={() => navigate(-1)} variant="outline">
          Back to Card
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="preview">Live Preview</TabsTrigger>
          <TabsTrigger value="html">HTML/JavaScript</TabsTrigger>
          <TabsTrigger value="css">CSS</TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="p-4 border rounded-lg min-h-[600px]">
          <div dangerouslySetInnerHTML={{ __html: htmlCode }} />
          <style>{cssCode}</style>
        </TabsContent>

        <TabsContent value="html" className="space-y-4">
          <div className="relative">
            <pre className="bg-secondary p-4 rounded-md overflow-x-auto whitespace-pre-wrap">
              <code className="text-sm">{htmlCode}</code>
            </pre>
            <Button
              onClick={() => handleCopyCode(htmlCode, "HTML/JavaScript")}
              className="absolute top-4 right-4"
              variant="secondary"
            >
              Copy Code
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="css" className="space-y-4">
          <div className="relative">
            <pre className="bg-secondary p-4 rounded-md overflow-x-auto whitespace-pre-wrap">
              <code className="text-sm">{cssCode}</code>
            </pre>
            <Button
              onClick={() => handleCopyCode(cssCode, "CSS")}
              className="absolute top-4 right-4"
              variant="secondary"
            >
              Copy Code
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Preview;