import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface CodeBlockProps {
  code: string;
  language: "HTML" | "CSS";
}

const CodeBlock = ({ code, language }: CodeBlockProps) => {
  return (
    <div className="relative">
      <pre className="bg-muted p-4 rounded-md overflow-x-auto whitespace-pre-wrap">
        <code className="text-sm">{code}</code>
      </pre>
      <Button
        onClick={() => {
          navigator.clipboard.writeText(code);
          toast.success(`${language} code copied to clipboard!`);
        }}
        className="absolute top-4 right-4"
        variant="secondary"
      >
        Copy {language}
      </Button>
    </div>
  );
};

export default CodeBlock;