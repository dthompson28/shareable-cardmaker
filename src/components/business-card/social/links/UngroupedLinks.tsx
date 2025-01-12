import { Card } from "@/components/ui/card";
import { LinkControls } from "./LinkControls";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";

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
  if (!links.length) return null;

  return (
    <Card className="bg-background border border-border overflow-hidden">
      <div className="p-4 border-b border-border">
        <h4 className="font-medium text-muted-foreground">Ungrouped Links</h4>
      </div>
      <div className="p-4 space-y-4">
        <SortableContext items={links.map(link => link.id!)} strategy={verticalListSortingStrategy}>
          {links.map((link, index) => (
            <LinkControls
              key={link.id || index}
              index={index}
              id={link.id}
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