import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { GroupControls } from "./groups/GroupControls";
import { LinkControls } from "./links/LinkControls";
import { useGroupManagement } from "./groups/useGroupManagement";

interface Props {
  links: { title: string; url: string; groupName?: string; }[];
  onChange: (links: { title: string; url: string; groupName?: string; }[]) => void;
}

export const AdditionalLinksSection = ({ links, onChange }: Props) => {
  const {
    groups,
    addGroup,
    updateGroupName,
    moveGroup,
    removeGroup
  } = useGroupManagement(links, onChange);

  const addLink = () => {
    onChange([...links, { title: "", url: "" }]);
  };

  const removeLink = (index: number) => {
    onChange(links.filter((_, i) => i !== index));
  };

  const updateLink = (index: number, field: "title" | "url", value: string) => {
    const newLinks = [...links];
    newLinks[index] = { ...newLinks[index], [field]: value };
    onChange(newLinks);
  };

  const moveLink = (index: number, direction: 'up' | 'down') => {
    const newLinks = [...links];
    if (direction === 'up' && index > 0) {
      [newLinks[index - 1], newLinks[index]] = [newLinks[index], newLinks[index - 1]];
      
      // Update group assignments if crossing group boundaries
      const currentGroup = groups.find(g => 
        index >= g.position && (!groups[groups.indexOf(g) + 1] || index < groups[groups.indexOf(g) + 1].position)
      );
      const prevGroup = groups.find(g => 
        (index - 1) >= g.position && (!groups[groups.indexOf(g) + 1] || (index - 1) < groups[groups.indexOf(g) + 1].position)
      );
      
      if (currentGroup !== prevGroup) {
        newLinks[index].groupName = prevGroup?.name;
        newLinks[index - 1].groupName = currentGroup?.name;
      }
    } else if (direction === 'down' && index < links.length - 1) {
      [newLinks[index], newLinks[index + 1]] = [newLinks[index + 1], newLinks[index]];
      
      // Update group assignments if crossing group boundaries
      const currentGroup = groups.find(g => 
        index >= g.position && (!groups[groups.indexOf(g) + 1] || index < groups[groups.indexOf(g) + 1].position)
      );
      const nextGroup = groups.find(g => 
        (index + 1) >= g.position && (!groups[groups.indexOf(g) + 1] || (index + 1) < groups[groups.indexOf(g) + 1].position)
      );
      
      if (currentGroup !== nextGroup) {
        newLinks[index].groupName = nextGroup?.name;
        newLinks[index + 1].groupName = currentGroup?.name;
      }
    }
    onChange(newLinks);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Additional Links</h3>
        <div className="flex gap-2">
          <Button type="button" variant="outline" size="sm" onClick={addLink}>
            <Plus className="w-4 h-4 mr-2" />
            Add Link
          </Button>
          <Button type="button" variant="outline" size="sm" onClick={addGroup}>
            <Plus className="w-4 h-4 mr-2" />
            Add Group
          </Button>
        </div>
      </div>
      
      {groups.map((group, groupIndex) => (
        <div key={groupIndex} className="relative border rounded-lg p-4 space-y-4 bg-muted/50">
          <GroupControls
            groupIndex={groupIndex}
            groupName={group.name}
            totalGroups={groups.length}
            onNameChange={(name) => updateGroupName(groupIndex, name)}
            onMoveUp={() => moveGroup(groupIndex, 'up')}
            onMoveDown={() => moveGroup(groupIndex, 'down')}
            onDelete={() => removeGroup(group.position)}
          />
        </div>
      ))}
      
      {links.map((link, index) => {
        const group = groups.find(g => 
          index >= g.position && (!groups[groups.indexOf(g) + 1] || index < groups[groups.indexOf(g) + 1].position)
        );
        
        return (
          <div 
            key={index} 
            className={`grid gap-4 p-4 border rounded-lg ${group ? 'ml-6 border-muted' : ''}`}
          >
            <LinkControls
              index={index}
              title={link.title}
              url={link.url}
              isFirst={index === 0}
              isLast={index === links.length - 1}
              onTitleChange={(value) => updateLink(index, "title", value)}
              onUrlChange={(value) => updateLink(index, "url", value)}
              onDelete={() => removeLink(index)}
              onMoveUp={() => moveLink(index, 'up')}
              onMoveDown={() => moveLink(index, 'down')}
            />
          </div>
        );
      })}
    </div>
  );
};