import { useState, useEffect } from "react";
import { Loader2, CheckCircle, AlertCircle, ExternalLink } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type ProvisioningStatus = "InProgress" | "Completed" | "Failed";

const WorkspaceSetup = () => {
  const [status, setStatus] = useState<ProvisioningStatus>("InProgress");
  const [pollCount, setPollCount] = useState(0);

  // Simulate polling for provisioning status
  useEffect(() => {
    if (status === "InProgress") {
      const interval = setInterval(() => {
        setPollCount(prev => prev + 1);
        
        // Simulate completion after a few polls
        if (pollCount >= 3) {
          setStatus("Completed");
        }
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [status, pollCount]);

  const handleGoToWorkspace = () => {
    // In a real app, this would redirect to the SharePoint workspace
    window.open("https://sharepoint.example.com/sites/sustainability", "_blank");
  };

  const renderContent = () => {
    switch (status) {
      case "InProgress":
        return (
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="p-6 bg-primary/10 rounded-full">
                <Loader2 className="h-12 w-12 text-primary animate-spin" />
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Setting Up Your Workspace</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                We are setting up your reporting workspace. This typically takes 1-2 minutes.
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <span>Please wait while we configure your environment</span>
            </div>
          </div>
        );

      case "Completed":
        return (
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="p-6 bg-success/10 rounded-full">
                <CheckCircle className="h-12 w-12 text-success" />
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Workspace Ready!</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Your sustainability reporting workspace has been successfully created.
              </p>
            </div>
            <Button size="lg" onClick={handleGoToWorkspace}>
              Go to Reporting Workspace
              <ExternalLink className="h-4 w-4 ml-2" />
            </Button>
          </div>
        );

      case "Failed":
        return (
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="p-6 bg-destructive/10 rounded-full">
                <AlertCircle className="h-12 w-12 text-destructive" />
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Setup Failed</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                We encountered an error while setting up your workspace. 
                Please contact support for assistance.
              </p>
            </div>
            <div className="space-y-3">
              <Button variant="outline" onClick={() => setStatus("InProgress")}>
                Try Again
              </Button>
              <p className="text-sm text-muted-foreground">
                Contact support: <a href="mailto:support@stif.com" className="text-primary hover:underline">support@stif.com</a>
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <PageLayout>
      <div className="flex items-center justify-center min-h-[60vh]">
        <Card className="w-full max-w-lg">
          <CardContent className="py-12">
            {renderContent()}
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default WorkspaceSetup;
