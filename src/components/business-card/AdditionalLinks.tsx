import { BusinessCardData } from "@/types/businessCard";
import { sortGroups, sortAdditionalLinks } from "./utils/groupSorting";
import { LinkItem, LinkGroup } from "./utils/linkRenderer";

interface AdditionalLinksProps {
  data: BusinessCardData;
}

export const AdditionalLinks = ({ data }: AdditionalLinksProps) => {
  if (!data.social.additionalLinks?.length) return null;

  const sortedLinks = sortAdditionalLinks(data.social.additionalLinks);

  const groupPositions = new Map<string, number>(
    data.social.linkGroups?.map(group => [group.name, group.position]) || []
  );

  const groupNames = Array.from(new Set(
    sortedLinks
      .map(link => link.groupName)
      .filter((name): name is string => !!name)
  ));

  const groupOrder = sortGroups(groupNames, groupPositions);

  const groupedLinks = groupOrder.reduce((acc, groupName) => {
    acc[groupName] = sortedLinks.filter(
      link => link.groupName === groupName
    ) || [];
    return acc;
  }, {} as Record<string, typeof data.social.additionalLinks>);

  const ungroupedLinks = sortedLinks.filter(
    link => !link.groupName
  ) || [];

  return (
    <div className="bc-link-groups">
      {ungroupedLinks.length > 0 && (
        <div className="bc-group-links">
          {ungroupedLinks.map((link, index) => (
            <LinkItem
              key={`ungrouped-${index}`}
              title={link.title}
              url={link.url}
              color={data.colors.secondary}
              accentColor={data.colors.accent}
            />
          ))}
        </div>
      )}
      
      {groupOrder.map((groupName) => {
        const links = groupedLinks[groupName];
        if (!links?.length) return null;
        
        return (
          <div key={groupName} className="bc-link-group">
            <h3 className="bc-group-title">{groupName}</h3>
            <div className="bc-group-links">
              {links.map((link, index) => (
                <LinkItem
                  key={`${groupName}-${index}`}
                  title={link.title}
                  url={link.url}
                  color={data.colors.secondary}
                  accentColor={data.colors.accent}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};