import { BusinessCardData } from "../BusinessCardForm";

interface AdditionalLinksProps {
  data: BusinessCardData;
}

export const AdditionalLinks = ({ data }: AdditionalLinksProps) => {
  if (!data.social.additionalLinks?.length) return null;

  // Create a map of group positions from the linkGroups array
  const groupPositions = new Map(
    data.social.linkGroups?.map(group => [group.name, group.position]) || []
  );

  // Get all unique group names from actual links while preserving order
  const groupNames = Array.from(new Set(
    data.social.additionalLinks
      .map(link => link.groupName)
      .filter((name): name is string => !!name)
  ));

  // Sort groups by their position while preserving original order for groups without position
  const groupOrder = [...groupNames].sort((a, b) => {
    const posA = groupPositions.get(a);
    const posB = groupPositions.get(b);
    
    // If both positions exist, sort by position
    if (posA !== undefined && posB !== undefined) {
      return posA - posB;
    }
    
    // If only one position exists, prioritize the one with position
    if (posA !== undefined) return -1;
    if (posB !== undefined) return 1;
    
    // If neither has a position, maintain original order
    return groupNames.indexOf(a) - groupNames.indexOf(b);
  });

  // Create a map of links by group
  const groupedLinks = groupOrder.reduce((acc, groupName) => {
    acc[groupName] = data.social.additionalLinks?.filter(
      link => link.groupName === groupName
    ) || [];
    return acc;
  }, {} as Record<string, typeof data.social.additionalLinks>);

  // Get ungrouped links
  const ungroupedLinks = data.social.additionalLinks?.filter(
    link => !link.groupName
  ) || [];

  return (
    <div className="additional-links">
      {/* Render grouped links */}
      {groupOrder.map((groupName) => {
        const links = groupedLinks[groupName];
        if (!links?.length) return null;
        
        return (
          <div key={groupName} className="link-group">
            <h3 className="group-title" style={{ color: data.colors.secondary }}>
              {groupName}
            </h3>
            <div className="space-y-3">
              {links.map((link, index) => (
                <a
                  key={`${groupName}-${index}`}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="additional-link"
                  style={{ color: data.colors.secondary }}
                >
                  <svg 
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
                  <span>{link.title}</span>
                </a>
              ))}
            </div>
          </div>
        );
      })}
      
      {/* Render ungrouped links */}
      {ungroupedLinks.length > 0 && (
        <div className="space-y-3">
          {ungroupedLinks.map((link, index) => (
            <a
              key={`ungrouped-${index}`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="additional-link"
              style={{ color: data.colors.secondary }}
            >
              <svg 
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
              <span>{link.title}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};