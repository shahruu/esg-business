import { Settings, FileText, Calendar, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Home = () => {
  const navigate = useNavigate();
  
  // Mock business data - in real app this would come from context/API
  const businessData = {
    companyName: "Acme Manufacturing Ltd",
    subscriptionStatus: "Active",
    reportingYear: "2024",
    accountComplete: true
  };

  return (
    <PageLayout companyName={businessData.companyName}>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">
            Welcome back, {businessData.companyName}
          </h1>
          <p className="text-muted-foreground">
            Manage your sustainability reporting and account settings from here.
          </p>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Subscription Status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-lg font-semibold text-success">
                  {businessData.subscriptionStatus}
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Reporting Year</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="text-lg font-semibold">
                  {businessData.reportingYear}
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Account Status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                {businessData.accountComplete ? (
                  <>
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span className="text-lg font-semibold text-success">Complete</span>
                  </>
                ) : (
                  <span className="text-lg font-semibold text-warning">Incomplete</span>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => navigate("/account-settings")}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-secondary rounded-lg">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>
                    Configure your business context and reporting preferences
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Manage Settings
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => navigate("/sustainability-reporting")}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-secondary rounded-lg">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Sustainability Reporting</CardTitle>
                  <CardDescription>
                    Access frameworks, panels, and report on indicators
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                Start Reporting
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
