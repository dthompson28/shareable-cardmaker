import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { GroupControls } from "./groups/GroupControls";
import { LinkControls } from "./links/LinkControls";
import { useGroupManagement } from "./groups/useGroupManagement";
import { toast } from "sonner";

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

    // Get the target group (if any)
    const targetGroup = groups.find(g => 
      targetIndex >= g.position && (!groups[groups.indexOf(g) + 1] || targetIndex < groups[groups.indexOf(g) + 1].position)
    );

    // Update the link's group assignment
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
          
          {/* Links within this group */}
          {links.map((link, linkIndex) => {
            const belongsToThisGroup = link.groupName === group.name;
            if (!belongsToThisGroup) return null;
            
            return (
              <div key={linkIndex} className="ml-6">
                <LinkControls
                  index={linkIndex}
                  title={link.title}
                  url={link.url}
                  isFirst={linkIndex === 0}
                  isLast={linkIndex === links.length - 1}
                  onTitleChange={(value) => updateLink(linkIndex, "title", value)}
                  onUrlChange={(value) => updateLink(linkIndex, "url", value)}
                  onDelete={() => removeLink(linkIndex)}
                  onMoveUp={() => moveLink(linkIndex, 'up')}
                  onMoveDown={() => moveLink(linkIndex, 'down')}
                  onGroupChange={(groupName) => assignLinkToGroup(linkIndex, groupName)}
                  availableGroups={groups.map(g => g.name)}
                  currentGroup={group.name}
                />
              </div>
            );
          })}
        </div>
      ))}
      
      {/* Ungrouped links */}
      {links.map((link, linkIndex) => {
        if (link.groupName) return null;
        
        return (
          <div key={linkIndex} className="border rounded-lg p-4">
            <LinkControls
              index={linkIndex}
              title={link.title}
              url={link.url}
              isFirst={linkIndex === 0}
              isLast={linkIndex === links.length - 1}
              onTitleChange={(value) => updateLink(linkIndex, "title", value)}
              onUrlChange={(value) => updateLink(linkIndex, "url", value)}
              onDelete={() => removeLink(linkIndex)}
              onMoveUp={() => moveLink(linkIndex, 'up')}
              onMoveDown={() => moveLink(linkIndex, 'down')}
              onGroupChange={(groupName) => assignLinkToGroup(linkIndex, groupName)}
              availableGroups={groups.map(g => g.name)}
            />
          </div>
        );
      })}
    </div>
  );
};