interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-[#F1F0FB] to-[#E5DEFF]">
      <div className="container max-w-4xl">
        {children}
      </div>
    </div>
  );
};