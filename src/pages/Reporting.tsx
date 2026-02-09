import { useState } from "react";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/layout/Breadcrumb";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { frameworks, Panel } from "@/data/frameworks";

export default function SustainabilityReporting() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const framework = frameworks[0]; // keep current logic

  /* ================= CATEGORY COLORS ================= */

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Environmental": return "text-accent";
      case "Social": return "text-primary";
      case "Governance": return "text-foreground";
      default: return "text-foreground";
    }
  };

  /* ================= PANEL CARD ================= */

  const renderPanelCard = (panel: Panel) => (
    <Card
      key={panel.id}
      className="panel-card hover:shadow-md transition-all cursor-pointer"
      onClick={() =>
        navigate(`/sustainability-reporting/${framework.id}/${panel.id}`)
      }
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between">

          <div className="flex-1 space-y-2">

            <div className="flex items-center gap-2">
              <span className="text-xl">{panel.icon}</span>
              <h3 className="font-semibold text-foreground">
                {panel.name}
              </h3>
            </div>

            <p className="text-sm text-muted-foreground line-clamp-2">
              {panel.description}
            </p>

            {/* Impact only — client requested */}
            <div className="flex items-center gap-2 pt-2">
              <span className="impact-badge">
                Impact: {panel.impact}
              </span>
            </div>

            {/* Status only — no points */}
            <div className="flex items-center gap-3 pt-1">
              <span className={`status-badge ${
                panel.status === "Not Started"
                  ? "status-badge-not-started"
                  : panel.status === "In Progress"
                  ? "status-badge-in-progress"
                  : "status-badge-completed"
              }`}>
                {panel.status}
              </span>
            </div>

          </div>

          <Button variant="default" size="sm" className="ml-4 shrink-0">
            Review Panel
          </Button>

        </div>
      </CardContent>
    </Card>
  );

  /* ================= GROUPED PANELS ================= */

  const environmentalPanels = framework.panels.filter(
    p => p.category === "Environmental"
  );

  const socialPanels = framework.panels.filter(
    p => p.category === "Social"
  );

  const governancePanels = framework.panels.filter(
    p => p.category === "Governance"
  );

  /* ================= PAGE ================= */

  return (
    <PageLayout>
      <div className="space-y-6">

        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Framework Overview" }
          ]}
        />

        {/* Header */}
        <div className="flex items-center justify-between">

          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Framework Overview
            </h1>

            <p className="text-muted-foreground">
              Explore available sustainability reporting frameworks.
              Select a framework to review and validate its indicators.
            </p>
          </div>

          <Button variant="ghost" onClick={() => navigate("/")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>

        </div>

        {/* Framework Info */}
        <Card>
          <CardContent className="p-4">

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">
                    {framework.code}
                  </span>
                </div>

                <div>
                  <h3 className="font-semibold">
                    {framework.code} – {framework.name}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {framework.description}
                  </p>
                </div>

              </div>

              <ChevronRight className="h-5 w-5 text-muted-foreground" />

            </div>

          </CardContent>
        </Card>

        {/* Category Tabs */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory}>

          <TabsList className="bg-muted/50">
            <TabsTrigger value="all">All Panels</TabsTrigger>
            <TabsTrigger value="Environmental">Environmental</TabsTrigger>
            <TabsTrigger value="Social">Social</TabsTrigger>
            <TabsTrigger value="Governance">Governance</TabsTrigger>
          </TabsList>

          {/* ALL */}
          <TabsContent value="all" className="space-y-8 mt-6">

            <Section
              title="Environmental"
              color={getCategoryColor("Environmental")}
              panels={environmentalPanels}
              render={renderPanelCard}
            />

            <Section
              title="Social"
              color={getCategoryColor("Social")}
              panels={socialPanels}
              render={renderPanelCard}
            />

            <Section
              title="Governance"
              color={getCategoryColor("Governance")}
              panels={governancePanels}
              render={renderPanelCard}
            />

          </TabsContent>

          {/* SINGLE TABS */}
          <TabsContent value="Environmental" className="mt-6">
            <Grid panels={environmentalPanels} render={renderPanelCard} />
          </TabsContent>

          <TabsContent value="Social" className="mt-6">
            <Grid panels={socialPanels} render={renderPanelCard} />
          </TabsContent>

          <TabsContent value="Governance" className="mt-6">
            <Grid panels={governancePanels} render={renderPanelCard} />
          </TabsContent>

        </Tabs>

      </div>
    </PageLayout>
  );
}

/* ================= SMALL HELPERS ================= */

function Grid({
  panels,
  render
}: {
  panels: Panel[];
  render: (p: Panel) => React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      {panels.map(render)}
    </div>
  );
}

function Section({
  title,
  color,
  panels,
  render
}: any) {
  return (
    <div className="space-y-4">
      <h2 className={`text-lg font-semibold flex items-center gap-2 ${color}`}>
        <span>○</span> {title}
      </h2>
      <Grid panels={panels} render={render} />
    </div>
  );
}
