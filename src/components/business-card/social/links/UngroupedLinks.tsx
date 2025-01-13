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

  return (
    <Card className="bg-background border border-border overflow-hidden">
      <div className="p-4 border-b border-border">
        <h4 className="font-medium text-muted-foreground">Ungrouped Links</h4>
      </div>
      <div ref={setNodeRef} className="p-4 space-y-4 min-h-[100px]">
        <SortableContext 
          items={links.map(link => link.id || `ungrouped-${links.indexOf(link)}`)} 
          strategy={verticalListSortingStrategy}
        >
          {links.map((link, index) => (
            <LinkControls
              key={link.id || `ungrouped-${index}`}
              index={index}
              id={link.id || `ungrouped-${index}`}
              title={link.title}
              url={link.url}
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