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

export const useGroupNameManagement = (
  groups: Group[],
  setGroups: (groups: Group[]) => void,
  initialLinks: Link[],
  onChange: (links: Link[]) => void
) => {
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

  const removeGroup = (position: number) => {
    const groupToRemove = groups.find(g => g.position === position);
    if (!groupToRemove) return;

    const newGroups = groups.filter(g => g.name !== groupToRemove.name);
    setGroups(newGroups);
    
    const updatedLinks = initialLinks.map(link => {
      if (link.groupName === groupToRemove.name) {
        const { groupName, ...rest } = link;
        return rest;
      }
      return link;
    });
    onChange(updatedLinks);
    toast.success("Group removed");
  };

  return {
    updateGroupName,
    removeGroup,
  };
};