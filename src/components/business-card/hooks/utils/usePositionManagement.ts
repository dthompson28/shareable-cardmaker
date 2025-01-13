import { useState } from "react";
import { updateGroupPositions, getNextGroupPosition } from "../../utils/groupSorting";
import { toast } from "sonner";

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

export const usePositionManagement = (
  groups: Group[],
  setGroups: (groups: Group[]) => void,
  initialLinks: Link[],
  onChange: (links: Link[]) => void
) => {
  const moveGroup = (index: number, direction: 'up' | 'down') => {
    if (
      (direction === 'up' && index === 0) || 
      (direction === 'down' && index === groups.length - 1)
    ) {
      return;
    }

    const newGroups = [...groups];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;

    const temp = { ...newGroups[index] };
    newGroups[index] = { ...newGroups[targetIndex], position: temp.position };
    newGroups[targetIndex] = { ...temp, position: newGroups[targetIndex].position };

    const updatedLinks = initialLinks.map(link => {
      if (link.groupName === newGroups[index].name || link.groupName === newGroups[targetIndex].name) {
        return { ...link };
      }
      return link;
    });

    setGroups(updateGroupPositions(newGroups));
    onChange(updatedLinks);
    toast.success(`Group moved ${direction}`);
  };

  const getNewPosition = () => {
    return getNextGroupPosition(groups);
  };

  return {
    moveGroup,
    getNewPosition,
  };
};