import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import { GroupCard } from "./groups/GroupCard";
import { UngroupedLinks } from "./links/UngroupedLinks";
import { DndContext, DragEndEvent, closestCenter, DragOverlay, DragStartEvent } from "@dnd-kit/core";
import { useState } from "react";
import { useGroupOperations } from "../hooks/useGroupOperations";

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
  } = useGroupOperations(links, onChange);

  const addLink = () => {
    const newLink = { 
      title: "", 
      url: "", 
      id: crypto.randomUUID() 
    };
    onChange([...links, newLink]);
    toast.success("New link added");
  };

  const removeLink = (index: number) => {
    const newLinks = [...links];
    newLinks.splice(index, 1);
    onChange(newLinks);
    toast.success("Link removed");
  };

  const updateLink = (index: number, field: "title" | "url", value: string) => {
    const newLinks = [...links];
    newLinks[index] = { 
      ...newLinks[index], 
      [field]: value,
      id: newLinks[index].id || crypto.randomUUID()
    };
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

    const newLinks = [...links];
    const [movedItem] = newLinks.splice(activeIndex, 1);

    if (typeof overId === 'string' && overId.startsWith('group-')) {
      const targetGroupName = overId.replace('group-', '');
      movedItem.groupName = targetGroupName;
      
      const lastGroupItemIndex = newLinks.reduce((lastIndex, link, index) => {
        return link.groupName === targetGroupName ? index : lastIndex;
      }, -1);
      
      newLinks.splice(lastGroupItemIndex + 1, 0, movedItem);
    }
    else if (overId === 'ungrouped') {
      movedItem.groupName = undefined;
      newLinks.push(movedItem);
    }
    else {
      const overIndex = newLinks.findIndex(link => link.id === overId);
      if (overIndex === -1) return;
      
      movedItem.groupName = newLinks[overIndex].groupName;
      newLinks.splice(overIndex, 0, movedItem);
    }

    onChange(newLinks);
    toast.success("Link moved successfully");
  };

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
          {/* Render ungrouped links first */}
          <UngroupedLinks
            links={groupedLinks['ungrouped'] || []}
            onLinkUpdate={(linkIndex, field, value) => {
              const globalIndex = links.findIndex(link => 
                !link.groupName && 
                link.id === (groupedLinks['ungrouped'][linkIndex]?.id)
              );
              if (globalIndex !== -1) {
                updateLink(globalIndex, field, value);
              }
            }}
            onLinkDelete={(linkIndex) => {
              const globalIndex = links.findIndex(link => 
                !link.groupName && 
                link.id === (groupedLinks['ungrouped'][linkIndex]?.id)
              );
              if (globalIndex !== -1) {
                removeLink(globalIndex);
              }
            }}
            availableGroups={groups.map(g => g.name)}
          />

          {/* Then render grouped links */}
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
              onLinkUpdate={(linkIndex, field, value) => {
                const globalIndex = links.findIndex(link => 
                  link.groupName === group.name && 
                  link.id === (groupedLinks[group.name][linkIndex]?.id)
                );
                if (globalIndex !== -1) {
                  updateLink(globalIndex, field, value);
                }
              }}
              onLinkDelete={(linkIndex) => {
                const globalIndex = links.findIndex(link => 
                  link.groupName === group.name && 
                  link.id === (groupedLinks[group.name][linkIndex]?.id)
                );
                if (globalIndex !== -1) {
                  removeLink(globalIndex);
                }
              }}
              availableGroups={groups.map(g => g.name)}
            />
          ))}
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