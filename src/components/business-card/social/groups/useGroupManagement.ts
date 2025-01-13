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
    // Extract unique group names from links
    const uniqueGroups = Array.from(new Set(
      initialLinks
        .map(link => link.groupName)
        .filter((name): name is string => !!name)
    ));
    
    // Only initialize groups if they don't exist yet
    if (groups.length === 0) {
      setGroups(uniqueGroups.map((name, index) => ({
        name,
        position: index
      })));
    }
  }, [initialLinks]);

  const addGroup = () => {
    const newPosition = groups.length;
    const newGroup = {
      name: `Group ${groups.length + 1}`,
      position: newPosition
    };
    setGroups([...groups, newGroup]);
  };

  const updateGroupName = (index: number, name: string) => {
    const newGroups = [...groups];
    const oldName = newGroups[index].name;
    const position = newGroups[index].position;
    newGroups[index] = { name, position };
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
    if (
      (direction === 'up' && index === 0) || 
      (direction === 'down' && index === groups.length - 1)
    ) {
      return;
    }

    const newGroups = [...groups];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    
    // Swap positions while maintaining array order
    const temp = newGroups[index].position;
    newGroups[index].position = newGroups[targetIndex].position;
    newGroups[targetIndex].position = temp;
    
    setGroups([...newGroups]);
  };

  const removeGroup = (position: number) => {
    const groupToRemove = groups.find(g => g.position === position);
    if (!groupToRemove) return;

    // Remove the group and update positions
    const newGroups = groups
      .filter(g => g.name !== groupToRemove.name)
      .map(g => ({
        ...g,
        position: g.position > position ? g.position - 1 : g.position
      }));
    
    setGroups(newGroups);
    
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
    groups: [...groups].sort((a, b) => a.position - b.position),
    addGroup,
    updateGroupName,
    moveGroup,
    removeGroup,
  };
};