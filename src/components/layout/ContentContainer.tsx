interface ContentContainerProps {
  children: React.ReactNode;
}

export const ContentContainer = ({ children }: ContentContainerProps) => {
  return (
    <div className="bg-[#f5f5f5] rounded-2xl shadow-lg p-8 border border-[#00674f]/10 hover:border-[#00674f]/20 transition-colors text-[#00674f]">
      {children}
    </div>
  );
};