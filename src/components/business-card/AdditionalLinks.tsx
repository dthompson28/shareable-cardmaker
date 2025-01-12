import { BusinessCardData } from "../BusinessCardForm";

interface AdditionalLinksProps {
  data: BusinessCardData;
}

export const AdditionalLinks = ({ data }: AdditionalLinksProps) => {
  if (!data.social.additionalLinks?.length) return null;

  // Create a map of group positions
  const groupPositions = new Map<string, number>();
  data.social.additionalLinks.forEach(link => {
    if (link.groupName && !groupPositions.has(link.groupName)) {
      groupPositions.set(link.groupName, groupPositions.size);
    }
  });

  // Get all unique group names and sort them by their position
  const groupOrder = Array.from(new Set(
    data.social.additionalLinks
      .map(link => link.groupName || '')
      .filter(Boolean)
  )).sort((a, b) => {
    const posA = groupPositions.get(a) ?? Number.MAX_VALUE;
    const posB = groupPositions.get(b) ?? Number.MAX_VALUE;
    return posA - posB;
  });

  // Create a map of links by group while preserving order
  const groupedLinks = groupOrder.reduce((acc, groupName) => {
    acc[groupName] = data.social.additionalLinks.filter(
      link => link.groupName === groupName
    );
    return acc;
  }, {} as Record<string, typeof data.social.additionalLinks>);

  // Get ungrouped links
  const ungroupedLinks = data.social.additionalLinks.filter(
    link => !link.groupName
  );

  return (
    <div className="space-y-6 p-4 rounded-lg border border-border">
      {groupOrder.map((groupName, groupIndex) => {
        const links = groupedLinks[groupName];
        if (!links?.length) return null;
        
        return (
          <div key={groupIndex} className="bg-muted/50 rounded-lg p-4">
            <h3 
              className="text-lg font-semibold mb-3" 
              style={{ color: data.colors.secondary }}
            >
              {groupName}
            </h3>
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
        );
      })}
      
      {/* Render ungrouped links at the end */}
      {ungroupedLinks.length > 0 && (
        <div className="space-y-3">
          {ungroupedLinks.map((link, index) => (
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
      )}
    </div>
  );
};