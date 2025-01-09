interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen py-12" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container max-w-4xl">
        {children}
      </div>
    </div>
  );
};