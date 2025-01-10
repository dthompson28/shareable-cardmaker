import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import CodeBlock from "@/components/highlevel-preview/CodeBlock";
import PreviewOutput from "@/components/highlevel-preview/PreviewOutput";
import { htmlCode, cssCode } from "@/components/highlevel-preview/constants";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, RotateCcw } from "lucide-react";
import { toast } from "sonner";
import { STORAGE_KEY } from "@/constants/businessCard";

const HighLevelPreview = () => {
  const navigate = useNavigate();

  const handleBackToPreview = () => {
    navigate('/');
  };

  const handleResetForm = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      toast.success("Form data has been reset");
      navigate('/');
    } catch (error) {
      console.error('Error resetting data:', error);
      toast.error("Could not reset form data");
    }
  };

  return (
    <div className="container max-w-6xl mx-auto p-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">HighLevel Code Preview</h1>
        <div className="flex gap-4">
          <Button
            variant="outline"
            onClick={handleBackToPreview}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Preview
          </Button>
          <Button
            variant="destructive"
            onClick={handleResetForm}
            className="flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Reset Form
          </Button>
        </div>
      </div>

      <Tabs defaultValue="html" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="html">HTML</TabsTrigger>
          <TabsTrigger value="css">CSS</TabsTrigger>
          <TabsTrigger value="output">Output</TabsTrigger>
        </TabsList>

        <TabsContent value="html" className="space-y-4">
          <CodeBlock code={htmlCode} language="HTML" />
        </TabsContent>

        <TabsContent value="css" className="space-y-4">
          <CodeBlock code={cssCode} language="CSS" />
        </TabsContent>

        <TabsContent value="output" className="space-y-4">
          <PreviewOutput htmlCode={htmlCode} cssCode={cssCode} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HighLevelPreview;