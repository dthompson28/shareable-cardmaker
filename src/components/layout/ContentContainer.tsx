interface ContentContainerProps {
  children: React.ReactNode;
}

export const ContentContainer = ({ children }: ContentContainerProps) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-muted">
      {children}
    </div>
  );
};