import { useState, useEffect } from "react";
import { updateGroupPositions } from "../utils/groupSorting";

interface Group {
  name: string;
  position: number;
  order: number;
}

interface Link {
  title: string;
  url: string;
  groupName?: string;
}

export const useGroupOperations = (
  initialLinks: Link[],
  onChange: (links: Link[]) => void
) => {
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    const uniqueGroups = Array.from(new Set(
      initialLinks
        .map(link => link.groupName)
        .filter((name): name is string => !!name)
    ));
    
    if (groups.length === 0) {
      setGroups(uniqueGroups.map((name, index) => ({
        name,
        position: index,
        order: index
      })));
    }
  }, [initialLinks]);

  const addGroup = () => {
    const newPosition = groups.length;
    setGroups(prevGroups => [...prevGroups, {
      name: `Group ${prevGroups.length + 1}`,
      position: newPosition,
      order: newPosition
    }]);
  };

  const updateGroupName = (index: number, name: string) => {
    const newGroups = [...groups];
    const oldName = newGroups[index].name;
    newGroups[index] = { ...newGroups[index], name };
    setGroups(newGroups);
    
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
    
    // Swap positions while preserving order
    const tempPosition = newGroups[index].position;
    newGroups[index].position = newGroups[targetIndex].position;
    newGroups[targetIndex].position = tempPosition;
    
    setGroups(updateGroupPositions(newGroups));
  };

  const removeGroup = (position: number) => {
    const groupToRemove = groups.find(g => g.position === position);
    if (!groupToRemove) return;

    const newGroups = updateGroupPositions(
      groups.filter(g => g.name !== groupToRemove.name)
    );
    
    setGroups(newGroups);
    
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