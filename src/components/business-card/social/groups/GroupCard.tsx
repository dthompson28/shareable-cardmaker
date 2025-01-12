import { Card } from "@/components/ui/card";
import { GroupControls } from "./GroupControls";
import { LinkControls } from "../links/LinkControls";

interface GroupCardProps {
  groupName: string;
  groupIndex: number;
  totalGroups: number;
  links: { title: string; url: string; groupName?: string; }[];
  onNameChange: (name: string) => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onDelete: () => void;
  onLinkUpdate: (index: number, field: "title" | "url", value: string) => void;
  onLinkMove: (index: number, direction: 'up' | 'down') => void;
  onLinkDelete: (index: number) => void;
  onLinkGroupChange: (linkIndex: number, groupName: string | undefined) => void;
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
  onLinkMove,
  onLinkDelete,
  onLinkGroupChange,
  availableGroups,
}: GroupCardProps) => {
  return (
    <Card className="p-4">
      <GroupControls
        groupIndex={groupIndex}
        groupName={groupName}
        totalGroups={totalGroups}
        onNameChange={onNameChange}
        onMoveUp={onMoveUp}
        onMoveDown={onMoveDown}
        onDelete={onDelete}
      />
      
      <div className="mt-4 space-y-4">
        {links.map((link, index) => (
          <div key={index} className="pl-6">
            <LinkControls
              index={index}
              title={link.title}
              url={link.url}
              isFirst={index === 0}
              isLast={index === links.length - 1}
              onTitleChange={(value) => onLinkUpdate(index, "title", value)}
              onUrlChange={(value) => onLinkUpdate(index, "url", value)}
              onDelete={() => onLinkDelete(index)}
              onMoveUp={() => onLinkMove(index, 'up')}
              onMoveDown={() => onLinkMove(index, 'down')}
              onGroupChange={(groupName) => onLinkGroupChange(index, groupName)}
              availableGroups={availableGroups}
              currentGroup={groupName}
              hideGroupSelect={true}
            />
          </div>
        ))}
      </div>
    </Card>
  );
};