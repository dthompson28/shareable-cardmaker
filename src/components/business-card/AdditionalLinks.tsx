import { BusinessCardData } from "../BusinessCardForm";

interface AdditionalLinksProps {
  data: BusinessCardData;
}

export const AdditionalLinks = ({ data }: AdditionalLinksProps) => {
  if (!data.social.additionalLinks?.length) return null;

  // Create a map of group positions
  const groupPositions = new Map(
    data.social.linkGroups?.map(group => [group.name, group.position]) || []
  );

  // Get all groups that have links
  const groupsWithLinks = data.social.additionalLinks
    .filter(link => link.groupName)
    .reduce((groups, link) => {
      if (link.groupName && !groups.includes(link.groupName)) {
        groups.push(link.groupName);
      }
      return groups;
    }, [] as string[]);

  // Sort groups by their position
  const sortedGroups = groupsWithLinks.sort((a, b) => {
    const posA = groupPositions.get(a) ?? Number.MAX_VALUE;
    const posB = groupPositions.get(b) ?? Number.MAX_VALUE;
    return posA - posB;
  });

  // Get ungrouped links
  const ungroupedLinks = data.social.additionalLinks.filter(
    link => !link.groupName
  );

  return (
    <div className="additional-links">
      {sortedGroups.map((groupName) => {
        const groupLinks = data.social.additionalLinks.filter(
          link => link.groupName === groupName
        );

        if (!groupLinks.length) return null;

        return (
          <div key={groupName} className="link-group">
            <h3 className="group-title" style={{ color: data.colors.secondary }}>
              {groupName}
            </h3>
            <div className="space-y-3">
              {groupLinks.map((link, index) => (
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