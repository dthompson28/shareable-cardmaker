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
    // Extract unique group names from links and maintain their original order
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
    setGroups(prevGroups => [...prevGroups, newGroup]);
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
    if (
      (direction === 'up' && index === 0) || 
      (direction === 'down' && index === groups.length - 1)
    ) {
      return;
    }

    const newGroups = [...groups];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    
    // Swap positions while maintaining array order
    [newGroups[index], newGroups[targetIndex]] = [newGroups[targetIndex], newGroups[index]];
    
    // Update positions to match new order
    newGroups.forEach((group, idx) => {
      group.position = idx;
    });
    
    setGroups(newGroups);
  };

  const removeGroup = (position: number) => {
    const groupToRemove = groups.find(g => g.position === position);
    if (!groupToRemove) return;

    // Remove the group and update positions
    const newGroups = groups
      .filter(g => g.name !== groupToRemove.name)
      .map((g, index) => ({
        ...g,
        position: index
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