import { ArrowRight } from "lucide-react";
import { BusinessCardData } from "../BusinessCardForm";
import { Button } from "../ui/button";

interface AdditionalLinksProps {
  data: BusinessCardData;
}

export const AdditionalLinks = ({ data }: AdditionalLinksProps) => {
  if (!data.social.additionalLinks?.length) return null;

  return (
    <div className="space-y-2">
      {data.social.additionalLinks.map((link, index) => (
        <Button
          key={index}
          variant="ghost"
          className="flex items-center gap-2 hover:opacity-75 transition-colors w-full justify-start p-0 h-auto"
          style={{ color: data.colors.secondary }}
          onClick={() => window.open(link.url, '_blank', 'noopener,noreferrer')}
        >
          <ArrowRight className="w-4 h-4" style={{ color: data.colors.accent }} />
          <span>{link.title}</span>
        </Button>
      ))}
    </div>
  );
};