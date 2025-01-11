import { memo } from "react";
import { Button } from "@/components/ui/button";

interface PreviewActionsProps {
  onBack: () => void;
  onShowEmbedCode: () => void;
}

export const PreviewActions = memo(({ onBack, onShowEmbedCode }: PreviewActionsProps) => {
  return (
    <div className="flex justify-between">
      <Button onClick={onBack} variant="outline">
        Back to Form
      </Button>
      <Button onClick={onShowEmbedCode}>
        Get Embed Code
      </Button>
    </div>
  );
});

PreviewActions.displayName = "PreviewActions";