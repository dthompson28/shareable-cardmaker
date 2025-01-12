import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useGroupManagement } from "./groups/useGroupManagement";
import { toast } from "sonner";
import { GroupCard } from "./groups/GroupCard";
import { UngroupedLinks } from "./links/UngroupedLinks";
import { DndContext, DragEndEvent, closestCenter, DragOverlay, DragStartEvent } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useState } from "react";

interface Props {
  links: { title: string; url: string; groupName?: string; id?: string }[];
  onChange: (links: { title: string; url: string; groupName?: string; id?: string }[]) => void;
}

export const AdditionalLinksSection = ({ links, onChange }: Props) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const {
    groups,
    addGroup,
    updateGroupName,
    moveGroup,
    removeGroup
  } = useGroupManagement(links, onChange);

  const addLink = () => {
    onChange([...links, { title: "", url: "", id: crypto.randomUUID() }]);
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

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);
    
    if (!over || !active) return;

    const activeId = active.id;
    const overId = over.id;
    
    if (activeId === overId) return;

    const activeIndex = links.findIndex(link => link.id === activeId);
    if (activeIndex === -1) return;

    const overIndex = links.findIndex(link => link.id === overId);
    const newLinks = [...links];
    const [movedItem] = newLinks.splice(activeIndex, 1);

    // Determine the target group based on where the item was dropped
    let targetGroupName: string | undefined;

    // If dropping onto a group container
    if (typeof over.id === 'string' && over.id.startsWith('group-')) {
      targetGroupName = over.id.replace('group-', '');
    } 
    // If dropping in ungrouped section
    else if (over.id === 'ungrouped') {
      targetGroupName = undefined;
    } 
    // If dropping onto another link
    else {
      const overLink = links.find(link => link.id === overId);
      targetGroupName = overLink?.groupName;
    }

    // Update the moved item's group
    movedItem.groupName = targetGroupName;

    // Insert at the correct position
    if (overIndex >= 0) {
      newLinks.splice(overIndex, 0, movedItem);
    } else {
      // If dropping into an empty group or ungrouped section
      newLinks.push(movedItem);
    }

    onChange(newLinks);
    toast.success("Link moved successfully");
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
            Add Collection
          </Button>
        </div>
      </div>
      
      <DndContext 
        collisionDetection={closestCenter} 
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="space-y-4 rounded-lg border border-border p-4">
          {/* Display grouped links */}
          {groups.map((group, groupIndex) => (
            <GroupCard
              key={groupIndex}
              groupName={group.name}
              groupIndex={groupIndex}
              totalGroups={groups.length}
              links={groupedLinks[group.name] || []}
              onNameChange={(name) => updateGroupName(groupIndex, name)}
              onMoveUp={() => moveGroup(groupIndex, 'up')}
              onMoveDown={() => moveGroup(groupIndex, 'down')}
              onDelete={() => removeGroup(group.position)}
              onLinkUpdate={updateLink}
              onLinkDelete={removeLink}
              availableGroups={groups.map(g => g.name)}
            />
          ))}
          
          {/* Ungrouped links */}
          <UngroupedLinks
            links={groupedLinks['ungrouped'] || []}
            onLinkUpdate={updateLink}
            onLinkDelete={removeLink}
            availableGroups={groups.map(g => g.name)}
          />
        </div>

        <DragOverlay>
          {activeId ? (
            <div className="bg-white rounded-lg border border-border p-4 shadow-lg">
              {links.find(link => link.id === activeId)?.title || 'Link'}
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
};