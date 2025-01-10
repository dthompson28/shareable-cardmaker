interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-[#ff8c00]/10 via-[#F56565]/10 to-[#f5f5f5]">
      <div className="container max-w-4xl">
        {children}
      </div>
    </div>
  );
};