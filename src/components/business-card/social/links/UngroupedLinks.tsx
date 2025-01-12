import { Card } from "@/components/ui/card";
import { LinkControls } from "./LinkControls";

interface UngroupedLinksProps {
  links: { title: string; url: string; groupName?: string; }[];
  onLinkUpdate: (index: number, field: "title" | "url", value: string) => void;
  onLinkMove: (index: number, direction: 'up' | 'down') => void;
  onLinkDelete: (index: number) => void;
  onLinkGroupChange: (linkIndex: number, groupName: string | undefined) => void;
  availableGroups: string[];
}

export const UngroupedLinks = ({
  links,
  onLinkUpdate,
  onLinkMove,
  onLinkDelete,
  onLinkGroupChange,
  availableGroups,
}: UngroupedLinksProps) => {
  if (!links.length) return null;

  return (
    <Card className="p-4">
      <h4 className="font-medium text-muted-foreground mb-4">Ungrouped Links</h4>
      <div className="space-y-4">
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
            />
          </div>
        ))}
      </div>
    </Card>
  );
};