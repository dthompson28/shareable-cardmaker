import { BusinessCardData } from "../BusinessCardForm";

interface AdditionalLinksProps {
  data: BusinessCardData;
}

export const AdditionalLinks = ({ data }: AdditionalLinksProps) => {
  if (!data.social.additionalLinks?.length) return null;

  // Group links by their groupName
  const groupedLinks = data.social.additionalLinks.reduce((acc, link) => {
    const groupName = link.groupName || '';
    if (!acc[groupName]) {
      acc[groupName] = [];
    }
    acc[groupName].push(link);
    return acc;
  }, {} as Record<string, typeof data.social.additionalLinks>);

  return (
    <div className="space-y-6 p-4 rounded-lg border border-border">
      {Object.entries(groupedLinks).map(([groupName, links], groupIndex) => (
        <div key={groupIndex} className={`${groupName ? 'bg-muted/50 rounded-lg p-4' : ''}`}>
          {groupName && (
            <h3 
              className="text-lg font-semibold mb-3" 
              style={{ color: data.colors.secondary }}
            >
              {groupName}
            </h3>
          )}
          <div className="space-y-3">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 no-underline hover:opacity-80 transition-opacity"
                style={{ color: data.colors.secondary }}
              >
                <svg 
                  className="w-4 h-4 flex-shrink-0" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  style={{ color: data.colors.accent }}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                <span className="text-base font-opensans">{link.title}</span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};