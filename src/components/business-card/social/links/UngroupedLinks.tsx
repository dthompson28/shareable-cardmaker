import { Card } from "@/components/ui/card";
import { LinkControls } from "./LinkControls";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";

interface UngroupedLinksProps {
  links: { title: string; url: string; groupName?: string; id?: string }[];
  onLinkUpdate: (index: number, field: "title" | "url", value: string) => void;
  onLinkDelete: (index: number) => void;
  availableGroups: string[];
}

export const UngroupedLinks = ({
  links,
  onLinkUpdate,
  onLinkDelete,
}: UngroupedLinksProps) => {
  const { setNodeRef } = useDroppable({
    id: 'ungrouped',
  });

  if (!links.length) return null;

  // Find the base index for ungrouped links in the overall links array
  const getGlobalIndex = (localIndex: number) => {
    return links.findIndex((_, idx) => idx === localIndex);
  };

  return (
    <Card className="bg-background border border-border overflow-hidden">
      <div className="p-4 border-b border-border">
        <h4 className="font-medium text-muted-foreground">Ungrouped Links</h4>
      </div>
      <div ref={setNodeRef} className="p-4 space-y-4 min-h-[100px]">
        <SortableContext items={links.map(link => link.id!)} strategy={verticalListSortingStrategy}>
          {links.map((link, index) => (
            <LinkControls
              key={link.id || index}
              index={getGlobalIndex(index)}
              id={link.id}
              title={link.title}
              url={link.url}
              onTitleChange={(value) => onLinkUpdate(getGlobalIndex(index), "title", value)}
              onUrlChange={(value) => onLinkUpdate(getGlobalIndex(index), "url", value)}
              onDelete={() => onLinkDelete(getGlobalIndex(index))}
            />
          ))}
        </SortableContext>
      </div>
    </Card>
  );
};