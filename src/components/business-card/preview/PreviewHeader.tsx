import { memo } from "react";
import { Button } from "@/components/ui/button";

interface PreviewHeaderProps {
  onEdit: () => void;
}

export const PreviewHeader = memo(({ onEdit }: PreviewHeaderProps) => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-semibold text-[#00674f]">Preview Your Business Card</h2>
      <Button onClick={onEdit} variant="outline" size="sm">
        Reset Form
      </Button>
    </div>
  );
});

PreviewHeader.displayName = "PreviewHeader";