interface ContentContainerProps {
  children: React.ReactNode;
}

export const ContentContainer = ({ children }: ContentContainerProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8" style={{ backgroundColor: "#FFFFFF", boxShadow: "0 4px 6px rgba(139, 92, 246, 0.1)" }}>
      {children}
    </div>
  );
};