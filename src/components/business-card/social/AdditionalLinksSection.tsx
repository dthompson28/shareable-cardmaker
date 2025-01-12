import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Trash2, GripVertical, MoveUp, MoveDown } from "lucide-react";
import { useState } from "react";

interface Props {
  links: { title: string; url: string; groupName?: string; }[];
  onChange: (links: { title: string; url: string; groupName?: string; }[]) => void;
}

export const AdditionalLinksSection = ({ links, onChange }: Props) => {
  const [groups, setGroups] = useState<{ name: string; position: number; }[]>([]);

  const addLink = () => {
    onChange([...links, { title: "", url: "" }]);
  };

  const addGroup = () => {
    const newGroup = {
      name: "",
      position: links.length
    };
    setGroups([...groups, newGroup]);
  };

  const removeLink = (index: number) => {
    onChange(links.filter((_, i) => i !== index));
  };

  const removeGroup = (position: number) => {
    setGroups(groups.filter(g => g.position !== position));
    // Remove group name from all links at this position
    const updatedLinks = links.map(link => {
      if (links.indexOf(link) === position) {
        const { groupName, ...rest } = link;
        return rest;
      }
      return link;
    });
    onChange(updatedLinks);
  };

  const updateLink = (index: number, field: "title" | "url", value: string) => {
    const newLinks = [...links];
    newLinks[index] = { ...newLinks[index], [field]: value };
    onChange(newLinks);
  };

  const updateGroupName = (index: number, name: string) => {
    const newGroups = [...groups];
    newGroups[index] = { ...newGroups[index], name };
    setGroups(newGroups);
    
    // Update all links in this group
    const position = newGroups[index].position;
    const updatedLinks = links.map((link, i) => {
      if (i >= position && (!groups[index + 1] || i < groups[index + 1].position)) {
        return { ...link, groupName: name };
      }
      return link;
    });
    onChange(updatedLinks);
  };

  const moveGroup = (index: number, direction: 'up' | 'down') => {
    const newGroups = [...groups];
    const group = newGroups[index];
    
    if (direction === 'up' && index > 0) {
      const prevGroup = newGroups[index - 1];
      newGroups[index - 1] = { ...group, position: prevGroup.position };
      newGroups[index] = { ...prevGroup, position: group.position };
    } else if (direction === 'down' && index < groups.length - 1) {
      const nextGroup = newGroups[index + 1];
      newGroups[index + 1] = { ...group, position: nextGroup.position };
      newGroups[index] = { ...nextGroup, position: group.position };
    }
    
    setGroups(newGroups.sort((a, b) => a.position - b.position));
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
          <div className="flex items-center gap-2">
            <GripVertical className="w-5 h-5 text-muted-foreground cursor-move" />
            <div className="flex-1">
              <Input
                value={group.name}
                onChange={(e) => updateGroupName(groupIndex, e.target.value)}
                placeholder="Group Name"
                className="font-medium"
              />
            </div>
            <div className="flex gap-1">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => moveGroup(groupIndex, 'up')}
                disabled={groupIndex === 0}
              >
                <MoveUp className="w-4 h-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => moveGroup(groupIndex, 'down')}
                disabled={groupIndex === groups.length - 1}
              >
                <MoveDown className="w-4 h-4" />
              </Button>
              <Button
                type="button"
                variant="destructive"
                size="icon"
                onClick={() => removeGroup(group.position)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
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
            <div className="grid gap-2">
              <Label htmlFor={`link-title-${index}`}>Link Title</Label>
              <Input
                id={`link-title-${index}`}
                value={link.title}
                onChange={(e) => updateLink(index, "title", e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor={`link-url-${index}`}>Link URL</Label>
              <div className="flex gap-2">
                <Input
                  id={`link-url-${index}`}
                  value={link.url}
                  onChange={(e) => updateLink(index, "url", e.target.value)}
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  onClick={() => removeLink(index)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};