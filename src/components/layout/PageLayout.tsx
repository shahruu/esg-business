import Header from "./Header";

interface PageLayoutProps {
  children: React.ReactNode;
  companyName?: string;
}

const PageLayout = ({ children, companyName }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header companyName={companyName} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
};

export default PageLayout;
