import { useState } from "react";
import { ArrowLeft, ExternalLink, FileText, HelpCircle } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getFramework, getPanel, getIndicator } from "@/data/frameworks";

const IndicatorDetail = () => {
  const navigate = useNavigate();
  const { frameworkId, panelId, indicatorId } = useParams();
  const [isRedirecting, setIsRedirecting] = useState(false);
  
  const framework = getFramework(frameworkId || "");
  const panel = getPanel(frameworkId || "", panelId || "");
  const indicator = getIndicator(frameworkId || "", panelId || "", indicatorId || "");

  // Mock business state - in real app this would come from context/API
  const businessState = {
    subscriptionStatus: "Active",
    provisioningStatus: "Completed",
    sharepointFolderUrl: "https://sharepoint.example.com/sites/sustainability"
  };

  const handleGoToSharePoint = async () => {
    setIsRedirecting(true);
    
    // Simulate backend check
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Follow the logic from the spec:
    // 1. Check subscription status
    if (businessState.subscriptionStatus !== "Active") {
      navigate("/subscription");
      return;
    }
    
    // 2. Check provisioning status
    if (businessState.provisioningStatus !== "Completed") {
      navigate("/workspace-setup");
      return;
    }
    
    // 3. Redirect to SharePoint
    // In a real app, this would open the actual SharePoint URL
    window.open(businessState.sharepointFolderUrl, "_blank");
    setIsRedirecting(false);
  };

  if (!framework || !panel || !indicator) {
    return (
      <PageLayout>
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold">Indicator not found</h2>
          <Button onClick={() => navigate("/sustainability-reporting")} className="mt-4">
            Back to Panels
          </Button>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="space-y-6">
        <Breadcrumb 
          items={[
            { label: "Sustainability Reporting", href: "/sustainability-reporting" },
            { label: framework.code, href: "/sustainability-reporting" },
            { label: panel.name, href: `/sustainability-reporting/${frameworkId}/${panelId}` },
            { label: indicator.code }
          ]} 
        />

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">{indicator.code}</h1>
            <p className="text-lg text-muted-foreground">{indicator.name}</p>
          </div>
          <Button 
            variant="ghost" 
            onClick={() => navigate(`/sustainability-reporting/${frameworkId}/${panelId}`)}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to {panel.name}
          </Button>
        </div>

        {/* Indicator Description */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              What this indicator means
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{indicator.description}</p>
          </CardContent>
        </Card>

        {/* Guidance */}
        {indicator.guidance && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5" />
                Reporting Guidance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{indicator.guidance}</p>
            </CardContent>
          </Card>
        )}

        {/* Evidence Required */}
        {indicator.evidenceRequired && (
          <Card>
            <CardHeader>
              <CardTitle>What evidence is required</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{indicator.evidenceRequired}</p>
            </CardContent>
          </Card>
        )}

        {/* CTA */}
        <Card className="bg-secondary/30 border-primary/20">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold text-lg">Ready to report?</h3>
                <p className="text-muted-foreground">
                  You'll be redirected to SharePoint to submit your documentation.
                </p>
              </div>
              <Button 
                size="lg" 
                onClick={handleGoToSharePoint}
                disabled={isRedirecting}
                className="shrink-0"
              >
                {isRedirecting ? (
                  "Checking access..."
                ) : (
                  <>
                    Go to SharePoint – Report this indicator
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default IndicatorDetail;
