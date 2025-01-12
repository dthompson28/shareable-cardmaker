import { memo, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { BusinessCardData } from "../../BusinessCardForm";

interface PreviewActionsProps {
  data: BusinessCardData;
  onBack: () => void;
  onShowEmbedCode: () => void;
  onSave: () => void;
}

export const PreviewActions = memo(({ data, onBack, onShowEmbedCode, onSave }: PreviewActionsProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between">
      <div className="flex gap-4">
        <Button onClick={onBack} variant="outline">
          Back to Form
        </Button>
        <Button onClick={() => navigate('/saved-cards')} variant="outline">
          View Saved Cards
        </Button>
      </div>
      <div className="flex gap-4">
        <Button onClick={onSave}>
          Save Card
        </Button>
        <Button onClick={onShowEmbedCode}>
          Get Embed Code
        </Button>
      </div>
    </div>
  );
});

PreviewActions.displayName = "PreviewActions";