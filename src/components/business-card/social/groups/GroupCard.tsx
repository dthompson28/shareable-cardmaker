import { Card } from "@/components/ui/card";
import { GroupControls } from "./GroupControls";
import { LinkControls } from "../links/LinkControls";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";

interface GroupCardProps {
  groupName: string;
  groupIndex: number;
  totalGroups: number;
  links: { title: string; url: string; groupName?: string; id?: string }[];
  onNameChange: (name: string) => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onDelete: () => void;
  onLinkUpdate: (index: number, field: "title" | "url", value: string) => void;
  onLinkDelete: (index: number) => void;
  availableGroups: string[];
}

export const GroupCard = ({
  groupName,
  groupIndex,
  totalGroups,
  links,
  onNameChange,
  onMoveUp,
  onMoveDown,
  onDelete,
  onLinkUpdate,
  onLinkDelete,
}: GroupCardProps) => {
  const { setNodeRef } = useDroppable({
    id: `group-${groupName}`,
  });

  return (
    <Card className="bg-muted/50 border-2 border-border overflow-hidden">
      <div className="p-4 border-b border-border bg-muted">
        <GroupControls
          groupIndex={groupIndex}
          groupName={groupName}
          totalGroups={totalGroups}
          onNameChange={onNameChange}
          onMoveUp={onMoveUp}
          onMoveDown={onMoveDown}
          onDelete={onDelete}
        />
      </div>
      
      <div ref={setNodeRef} className="p-4 space-y-4 min-h-[100px]">
        <SortableContext items={links.map(link => link.id!)} strategy={verticalListSortingStrategy}>
          {links.map((link, index) => (
            <LinkControls
              key={link.id || index}
              index={index}
              id={link.id}
              title={link.title}
              url={link.url}
              groupName={groupName}
              onTitleChange={(value) => onLinkUpdate(index, "title", value)}
              onUrlChange={(value) => onLinkUpdate(index, "url", value)}
              onDelete={() => onLinkDelete(index)}
            />
          ))}
        </SortableContext>
      </div>
    </Card>
  );
};