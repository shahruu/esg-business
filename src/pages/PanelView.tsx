import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/layout/Breadcrumb";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { getFramework, getPanel } from "@/data/frameworks";

export default function PanelView() {
  const navigate = useNavigate();
  const { frameworkId = "", panelId = "" } = useParams();

  const framework = getFramework(frameworkId);
  const panel = getPanel(frameworkId, panelId);

  /* ================= NOT FOUND ================= */

  if (!framework || !panel) {
    return (
      <PageLayout>
        <div className="text-center py-12 space-y-4">
          <h2 className="text-xl font-semibold">Panel not found</h2>

          <Button onClick={() => navigate("/sustainability-reporting")}>
            Back to Framework Overview
          </Button>
        </div>
      </PageLayout>
    );
  }

  /* ================= PAGE ================= */

  return (
    <PageLayout>
      <div className="space-y-6">

        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Framework Overview", href: "/sustainability-reporting" },
            { label: framework.code, href: "/sustainability-reporting" },
            { label: panel.name },
          ]}
        />

        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">
            {panel.name}
          </h1>

          <Button
            variant="ghost"
            onClick={() => navigate("/sustainability-reporting")}
          >
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
            <p className="text-muted-foreground">
              {panel.description}
            </p>
          </CardContent>
        </Card>

        {/* Indicators */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">
            Indicators
          </h2>

          {panel.indicators.length === 0 ? (
            <Card>
              <CardContent className="py-8 text-center text-muted-foreground">
                No indicators available for this panel yet.
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-3">
              {panel.indicators.map(indicator => (
                <Card key={indicator.id} className="indicator-row">
                  <CardContent className="p-4">

                    <div className="flex items-center justify-between gap-4">

                      <div className="space-y-1">
                        <h3 className="font-semibold text-foreground">
                          {indicator.code}
                        </h3>

                        <p className="text-sm text-muted-foreground">
                          {indicator.name}
                        </p>
                      </div>

                      <Button
                        onClick={() =>
                          navigate(
                            `/sustainability-reporting/${frameworkId}/${panelId}/${indicator.id}`
                          )
                        }
                      >
                        Review Indicator
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
}
