import { useState } from "react";

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

  const addGroup = () => {
    const newGroup = {
      name: "",
      position: groups.length
    };
    setGroups([...groups, newGroup]);
  };

  const updateGroupName = (index: number, name: string) => {
    const newGroups = [...groups];
    newGroups[index] = { ...newGroups[index], name };
    setGroups(newGroups);
    
    // Update all links in this group
    const position = newGroups[index].position;
    const updatedLinks = initialLinks.map((link, i) => {
      if (i >= position && (!groups[index + 1] || i < groups[index + 1].position)) {
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
    setGroups(groups.filter(g => g.position !== position));
    // Remove group name from all links at this position
    const updatedLinks = initialLinks.map(link => {
      if (initialLinks.indexOf(link) === position) {
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