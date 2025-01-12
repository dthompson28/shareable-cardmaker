import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash2 } from "lucide-react";

interface LinkControlsProps {
  index: number;
  title: string;
  url: string;
  onTitleChange: (value: string) => void;
  onUrlChange: (value: string) => void;
  onDelete: () => void;
}

export const LinkControls = ({
  index,
  title,
  url,
  onTitleChange,
  onUrlChange,
  onDelete,
}: LinkControlsProps) => {
  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor={`link-title-${index}`}>Link Title</Label>
        <Input
          id={`link-title-${index}`}
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor={`link-url-${index}`}>Link URL</Label>
        <div className="flex gap-2">
          <Input
            id={`link-url-${index}`}
            value={url}
            onChange={(e) => onUrlChange(e.target.value)}
          />
          <Button
            type="button"
            variant="destructive"
            size="icon"
            onClick={onDelete}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};