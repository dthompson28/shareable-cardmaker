import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MoveUp, MoveDown, Trash2, GripVertical } from "lucide-react";

interface GroupControlsProps {
  groupIndex: number;
  groupName: string;
  totalGroups: number;
  onNameChange: (name: string) => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onDelete: () => void;
}

export const GroupControls = ({
  groupIndex,
  groupName,
  totalGroups,
  onNameChange,
  onMoveUp,
  onMoveDown,
  onDelete,
}: GroupControlsProps) => {
  return (
    <div className="flex items-center gap-2">
      <GripVertical className="w-5 h-5 text-muted-foreground cursor-move" />
      <div className="flex-1">
        <Input
          value={groupName}
          onChange={(e) => onNameChange(e.target.value)}
          placeholder="Group Name"
          className="font-medium"
        />
      </div>
      <span className="text-sm text-muted-foreground mr-2">
        Position: {groupIndex + 1}
      </span>
      <div className="flex gap-1">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={onMoveUp}
          disabled={groupIndex === 0}
        >
          <MoveUp className="w-4 h-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={onMoveDown}
          disabled={groupIndex === totalGroups - 1}
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
  );
};