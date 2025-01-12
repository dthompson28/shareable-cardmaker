import { useState, useEffect } from "react";

interface Group {
  name: string;
  position: number;
}

interface Link {
  title: string;
  url: string;
  groupName?: string;
}

export const useGroupManagement = (
  initialLinks: Link[],
  onChange: (links: Link[]) => void
) => {
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    // Extract unique group names from links and create group objects
    const uniqueGroups = Array.from(new Set(
      initialLinks
        .map(link => link.groupName)
        .filter((name): name is string => !!name)
    ));
    
    setGroups(uniqueGroups.map((name, index) => ({
      name,
      position: index
    })));
  }, []);

  const addGroup = () => {
    const newGroup = {
      name: `Group ${groups.length + 1}`,
      position: groups.length
    };
    setGroups([...groups, newGroup]);
  };

  const updateGroupName = (index: number, name: string) => {
    const newGroups = [...groups];
    const oldName = newGroups[index].name;
    newGroups[index] = { ...newGroups[index], name };
    setGroups(newGroups);
    
    // Update all links in this group with the new name
    const updatedLinks = initialLinks.map(link => {
      if (link.groupName === oldName) {
        return { ...link, groupName: name };
      }
      return link;
    });
    onChange(updatedLinks);
  };

  const moveGroup = (index: number, direction: 'up' | 'down') => {
    const newGroups = [...groups];
    const group = newGroups[index];
    
    if (direction === 'up' && index > 0) {
      const prevGroup = newGroups[index - 1];
      newGroups[index - 1] = { ...group, position: prevGroup.position };
      newGroups[index] = { ...prevGroup, position: group.position };
    } else if (direction === 'down' && index < groups.length - 1) {
      const nextGroup = newGroups[index + 1];
      newGroups[index + 1] = { ...group, position: nextGroup.position };
      newGroups[index] = { ...nextGroup, position: group.position };
    }
    
    setGroups(newGroups.sort((a, b) => a.position - b.position));
  };

  const removeGroup = (position: number) => {
    const groupToRemove = groups.find(g => g.position === position);
    if (!groupToRemove) return;

    setGroups(groups.filter(g => g.position !== position));
    
    // Remove group name from all links in this group
    const updatedLinks = initialLinks.map(link => {
      if (link.groupName === groupToRemove.name) {
        const { groupName, ...rest } = link;
        return rest;
      }
      return link;
    });
    onChange(updatedLinks);
  };

  return {
    groups,
    addGroup,
    updateGroupName,
    moveGroup,
    removeGroup,
  };
};