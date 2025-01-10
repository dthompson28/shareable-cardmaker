import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeBlock from "@/components/highlevel-preview/CodeBlock";
import PreviewOutput from "@/components/highlevel-preview/PreviewOutput";
import { htmlCode, cssCode } from "@/components/highlevel-preview/constants";

const HighLevelPreview = () => {
  return (
    <div className="container max-w-6xl mx-auto p-4 py-8">
      <h1 className="text-3xl font-bold mb-8">HighLevel Code Preview</h1>

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