import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trash2, MoveUp, MoveDown, GripVertical } from "lucide-react";

interface LinkControlsProps {
  index: number;
  title: string;
  url: string;
  isFirst: boolean;
  isLast: boolean;
  currentGroup?: string;
  availableGroups: string[];
  onTitleChange: (value: string) => void;
  onUrlChange: (value: string) => void;
  onDelete: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onGroupChange: (groupName: string | undefined) => void;
}

export const LinkControls = ({
  index,
  title,
  url,
  isFirst,
  isLast,
  currentGroup,
  availableGroups,
  onTitleChange,
  onUrlChange,
  onDelete,
  onMoveUp,
  onMoveDown,
  onGroupChange,
}: LinkControlsProps) => {
  return (
    <div className="grid gap-4">
      <div className="flex items-center gap-2">
        <GripVertical className="w-5 h-5 text-muted-foreground cursor-move" />
        <div className="flex-1">
          <Label htmlFor={`link-title-${index}`}>Link Title</Label>
          <Input
            id={`link-title-${index}`}
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
          />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor={`link-url-${index}`}>Link URL</Label>
        <div className="flex gap-2">
          <Input
            id={`link-url-${index}`}
            value={url}
            onChange={(e) => onUrlChange(e.target.value)}
          />
          <div className="flex gap-1">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={onMoveUp}
              disabled={isFirst}
            >
              <MoveUp className="w-4 h-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={onMoveDown}
              disabled={isLast}
            >
              <MoveDown className="w-4 h-4" />
            </Button>
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
      <div className="grid gap-2">
        <Label>Group</Label>
        <Select
          value={currentGroup}
          onValueChange={(value) => onGroupChange(value || undefined)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a group" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">No Group</SelectItem>
            {availableGroups.map((group) => (
              <SelectItem key={group} value={group}>
                {group}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};