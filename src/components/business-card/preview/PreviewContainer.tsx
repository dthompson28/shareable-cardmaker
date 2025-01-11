import { memo } from "react";

interface PreviewContainerProps {
  title: string;
  children: React.ReactNode;
}

export const PreviewContainer = memo(({ title, children }: PreviewContainerProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md flex flex-col h-[600px]">
      <h3 className="text-lg font-medium text-[#00674f] p-4 pb-2">{title}</h3>
      <div className="flex-1 flex items-start justify-center pt-2 overflow-y-auto">
        <div className="w-[448px]">
          {children}
        </div>
      </div>
    </div>
  );
});

PreviewContainer.displayName = "PreviewContainer";