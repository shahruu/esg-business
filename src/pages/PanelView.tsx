import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getFramework, getPanel } from "@/data/frameworks";

const PanelView = () => {
  const navigate = useNavigate();
  const { frameworkId, panelId } = useParams();
  
  const framework = getFramework(frameworkId || "");
  const panel = getPanel(frameworkId || "", panelId || "");

  if (!framework || !panel) {
    return (
      <PageLayout>
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold">Panel not found</h2>
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
            { label: panel.name }
          ]} 
        />

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">{panel.name}</h1>
          </div>
          <Button variant="ghost" onClick={() => navigate("/sustainability-reporting")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Panels
          </Button>
        </div>

        {/* Panel Description */}
        <Card>
          <CardHeader>
            <CardTitle>Panel Description</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{panel.description}</p>
          </CardContent>
        </Card>

        {/* Indicators List */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Indicators</h2>
          
          {panel.indicators.length === 0 ? (
            <Card>
              <CardContent className="py-8 text-center">
                <p className="text-muted-foreground">
                  No indicators available for this panel yet.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-3">
              {panel.indicators.map((indicator) => (
                <Card key={indicator.id} className="indicator-row">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h3 className="font-semibold text-foreground">{indicator.code}</h3>
                        <p className="text-sm text-muted-foreground">{indicator.name}</p>
                      </div>
                      <Button 
                        onClick={() => navigate(`/sustainability-reporting/${frameworkId}/${panelId}/${indicator.id}`)}
                      >
                        Report on this indicator
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default PanelView;
