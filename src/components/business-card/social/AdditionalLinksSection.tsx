import { Button } from "@/components/ui/button";
import { Plus, GripVertical } from "lucide-react";
import { GroupControls } from "./groups/GroupControls";
import { LinkControls } from "./links/LinkControls";
import { useGroupManagement } from "./groups/useGroupManagement";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";

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
    toast.success("New link added");
  };

  const removeLink = (index: number) => {
    onChange(links.filter((_, i) => i !== index));
    toast.success("Link removed");
  };

  const updateLink = (index: number, field: "title" | "url", value: string) => {
    const newLinks = [...links];
    newLinks[index] = { ...newLinks[index], [field]: value };
    onChange(newLinks);
  };

  const moveLink = (index: number, direction: 'up' | 'down') => {
    const newLinks = [...links];
    const currentLink = newLinks[index];
    let targetIndex;

    if (direction === 'up' && index > 0) {
      targetIndex = index - 1;
    } else if (direction === 'down' && index < links.length - 1) {
      targetIndex = index + 1;
    } else {
      return;
    }

    const targetGroup = groups.find(g => 
      targetIndex >= g.position && (!groups[groups.indexOf(g) + 1] || targetIndex < groups[groups.indexOf(g) + 1].position)
    );

    newLinks[index] = { ...newLinks[targetIndex], groupName: currentLink.groupName };
    newLinks[targetIndex] = { ...currentLink, groupName: targetGroup?.name };

    onChange(newLinks);
    toast.success(`Link moved ${direction}`);
  };

  const assignLinkToGroup = (linkIndex: number, groupName: string | undefined) => {
    const newLinks = [...links];
    newLinks[linkIndex] = { ...newLinks[linkIndex], groupName };
    onChange(newLinks);
    toast.success(groupName ? `Link assigned to ${groupName}` : "Link removed from group");
  };

  // Group links by their groupName
  const groupedLinks = links.reduce((acc, link) => {
    const group = link.groupName || 'ungrouped';
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(link);
    return acc;
  }, {} as Record<string, typeof links>);

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
      
      {/* Display grouped links */}
      {groups.map((group, groupIndex) => (
        <Card key={groupIndex} className="p-4 space-y-4">
          <GroupControls
            groupIndex={groupIndex}
            groupName={group.name}
            totalGroups={groups.length}
            onNameChange={(name) => updateGroupName(groupIndex, name)}
            onMoveUp={() => moveGroup(groupIndex, 'up')}
            onMoveDown={() => moveGroup(groupIndex, 'down')}
            onDelete={() => removeGroup(group.position)}
          />
          
          <div className="pl-6 space-y-4">
            {groupedLinks[group.name]?.map((link, linkIndex) => {
              const originalIndex = links.findIndex(l => l === link);
              return (
                <LinkControls
                  key={originalIndex}
                  index={originalIndex}
                  title={link.title}
                  url={link.url}
                  isFirst={originalIndex === 0}
                  isLast={originalIndex === links.length - 1}
                  onTitleChange={(value) => updateLink(originalIndex, "title", value)}
                  onUrlChange={(value) => updateLink(originalIndex, "url", value)}
                  onDelete={() => removeLink(originalIndex)}
                  onMoveUp={() => moveLink(originalIndex, 'up')}
                  onMoveDown={() => moveLink(originalIndex, 'down')}
                  onGroupChange={(groupName) => assignLinkToGroup(originalIndex, groupName)}
                  availableGroups={groups.map(g => g.name)}
                  currentGroup={group.name}
                />
              );
            })}
          </div>
        </Card>
      ))}
      
      {/* Ungrouped links */}
      {groupedLinks['ungrouped']?.length > 0 && (
        <Card className="p-4 space-y-4">
          <h4 className="font-medium text-muted-foreground">Ungrouped Links</h4>
          <div className="space-y-4">
            {groupedLinks['ungrouped'].map((link, index) => {
              const originalIndex = links.findIndex(l => l === link);
              return (
                <LinkControls
                  key={originalIndex}
                  index={originalIndex}
                  title={link.title}
                  url={link.url}
                  isFirst={originalIndex === 0}
                  isLast={originalIndex === links.length - 1}
                  onTitleChange={(value) => updateLink(originalIndex, "title", value)}
                  onUrlChange={(value) => updateLink(originalIndex, "url", value)}
                  onDelete={() => removeLink(originalIndex)}
                  onMoveUp={() => moveLink(originalIndex, 'up')}
                  onMoveDown={() => moveLink(originalIndex, 'down')}
                  onGroupChange={(groupName) => assignLinkToGroup(originalIndex, groupName)}
                  availableGroups={groups.map(g => g.name)}
                />
              );
            })}
          </div>
        </Card>
      )}
    </div>
  );
};