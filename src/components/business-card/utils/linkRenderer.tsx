import { BusinessCardData } from "@/types/businessCard";

interface LinkProps {
  title: string;
  url: string;
  color: string;
  accentColor: string;
}

export const LinkItem = ({ title, url, color, accentColor }: LinkProps) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="additional-link"
    style={{ color }}
  >
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      style={{ color: accentColor }}
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
    <span>{title}</span>
  </a>
);

export const LinkGroup = ({ 
  name, 
  links, 
  colors 
}: { 
  name: string; 
  links: { title: string; url: string; }[];
  colors: BusinessCardData['colors'];
}) => (
  <div key={name} className="link-group">
    <h3 className="group-title" style={{ color: colors.secondary }}>
      {name}
    </h3>
    <div className="space-y-3">
      {links.map((link, index) => (
        <LinkItem
          key={`${name}-${index}`}
          title={link.title}
          url={link.url}
          color={colors.secondary}
          accentColor={colors.accent}
        />
      ))}
    </div>
  </div>
);
