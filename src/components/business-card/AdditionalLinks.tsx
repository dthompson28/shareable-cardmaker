import { ArrowRight } from "lucide-react";
import { BusinessCardData } from "../BusinessCardForm";

interface AdditionalLinksProps {
  data: BusinessCardData;
}

export const AdditionalLinks = ({ data }: AdditionalLinksProps) => {
  if (!data.social.additionalLinks?.length) return null;

  return (
    <div className="space-y-2">
      {data.social.additionalLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:opacity-75 transition-colors"
          style={{ color: data.colors.secondary }}
        >
          <ArrowRight className="w-4 h-4" style={{ color: data.colors.accent }} />
          <span>{link.title}</span>
        </a>
      ))}
    </div>
  );
};