import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Trash2 } from "lucide-react";
import { BusinessCardData } from "../../BusinessCardForm";

interface Props {
  links: { title: string; url: string; }[];
  onChange: (links: { title: string; url: string; }[]) => void;
}

export const AdditionalLinksSection = ({ links, onChange }: Props) => {
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

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Additional Links</h3>
        <Button type="button" variant="outline" size="sm" onClick={addLink}>
          <Plus className="w-4 h-4 mr-2" />
          Add Link
        </Button>
      </div>
      
      {links.map((link, index) => (
        <div key={index} className="grid gap-4 p-4 border rounded-lg">
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
      ))}
    </div>
  );
};