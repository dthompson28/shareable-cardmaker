import { useState, useEffect } from "react";
import { updateGroupPositions } from "../utils/groupSorting";
import { usePositionManagement } from "./utils/usePositionManagement";
import { useGroupNameManagement } from "./utils/useGroupNameManagement";

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

  const { moveGroup, getNewPosition } = usePositionManagement(groups, setGroups, initialLinks, onChange);
  const { updateGroupName, removeGroup } = useGroupNameManagement(groups, setGroups, initialLinks, onChange);

  const addGroup = () => {
    const newPosition = getNewPosition();
    setGroups(prevGroups => [...prevGroups, {
      name: `Group ${prevGroups.length + 1}`,
      position: newPosition,
      order: newPosition
    }]);
  };

  return {
    groups: [...groups].sort((a, b) => a.position - b.position),
    addGroup,
    updateGroupName,
    moveGroup,
    removeGroup,
  };
};