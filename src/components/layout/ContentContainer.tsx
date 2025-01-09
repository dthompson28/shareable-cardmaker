interface ContentContainerProps {
  children: React.ReactNode;
}

export const ContentContainer = ({ children }: ContentContainerProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      {children}
    </div>
  );
};