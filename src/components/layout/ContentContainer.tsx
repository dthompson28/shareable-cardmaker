interface ContentContainerProps {
  children: React.ReactNode;
}

export const ContentContainer = ({ children }: ContentContainerProps) => {
  return (
    <div className="bg-[#f5f5f5] rounded-2xl shadow-lg p-8 border border-[#00674f]/10 hover:border-[#00674f]/20 transition-colors">
      <div className="relative">
        <div className="absolute -top-1 -left-1 w-full h-full bg-[#F56565]/5 rounded-2xl transform rotate-1"></div>
        <div className="absolute -bottom-1 -right-1 w-full h-full bg-[#ff8c00]/5 rounded-2xl transform -rotate-1"></div>
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
};