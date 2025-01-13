import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash2, GripVertical } from "lucide-react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface LinkControlsProps {
  index: number;
  title: string;
  url: string;
  id?: string;
  groupName?: string;
  onTitleChange: (value: string) => void;
  onUrlChange: (value: string) => void;
  onDelete: () => void;
}

export const LinkControls = ({
  index,
  title,
  url,
  id,
  onTitleChange,
  onUrlChange,
  onDelete,
}: LinkControlsProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ 
    id: id || `link-${index}`,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div 
      ref={setNodeRef} 
      style={style}
      className="bg-white rounded-lg border border-border p-4 shadow-sm"
    >
      <div className="grid gap-4">
        <div className="flex items-center gap-2">
          <div 
            {...attributes} 
            {...listeners}
            className="cursor-move hover:bg-muted rounded p-1"
          >
            <GripVertical className="w-5 h-5 text-muted-foreground" />
          </div>
          <div className="flex-1">
            <Label htmlFor={`link-title-${id || index}`}>Link Title</Label>
            <Input
              id={`link-title-${id || index}`}
              value={title}
              onChange={(e) => onTitleChange(e.target.value)}
              placeholder="Enter link title"
              className="mt-2"
            />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor={`link-url-${id || index}`}>Link URL</Label>
          <div className="flex gap-2">
            <Input
              id={`link-url-${id || index}`}
              value={url}
              onChange={(e) => onUrlChange(e.target.value)}
              placeholder="https://"
              className="flex-1"
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
    </div>
  );
};