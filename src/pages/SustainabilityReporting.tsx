import { useState } from "react";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { frameworks, Panel } from "@/data/frameworks";

export default function SustainabilityReporting() {
  const navigate = useNavigate();

  const [frameworkIndex, setFrameworkIndex] = useState(0);
  const framework = frameworks[frameworkIndex];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Environmental": return "text-emerald-600";
      case "Social": return "text-blue-600";
      case "Governance": return "text-violet-600";
      default: return "text-foreground";
    }
  };

  // ✅ NEW DESIGN CARD
  const renderPanelCard = (panel: Panel) => (
    <Card
      key={panel.id}
      className="rounded-2xl border bg-white shadow-sm hover:shadow-lg transition-all"
    >
      <CardContent className="p-6 flex flex-col h-full justify-between">

        <div className="space-y-3">

          <div className="flex items-start gap-3">
            <div className="text-2xl">{panel.icon}</div>

            <div>
              <h3 className="font-semibold text-base">
                {panel.name}
              </h3>

              <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                {panel.description}
              </p>
            </div>
          </div>

          <span className={`
            inline-block text-xs font-medium px-2 py-1 rounded-md
            ${panel.impact === "High"
              ? "bg-red-100 text-red-700"
              : panel.impact === "Medium"
              ? "bg-amber-100 text-amber-700"
              : "bg-green-100 text-green-700"}
          `}>
            {panel.impact}
          </span>

          <div className="flex items-center justify-between text-xs text-muted-foreground pt-1">
            <span>Estimated time</span>
            <span>{panel.estimatedTime}</span>
          </div>

          <div className="flex items-center justify-between text-xs pt-2">
            <span className="bg-gray-100 px-2 py-1 rounded-md text-gray-600">
              {panel.status}
            </span>

            <span className="text-emerald-600 font-medium">
              +{panel.points} points
            </span>
          </div>

        </div>

        <Button
          className="w-full mt-5 rounded-xl font-medium"
          onClick={() =>
            navigate(`/sustainability-reporting/${framework.id}/${panel.id}`)
          }
        >
          REVIEW FRAMEWORK
        </Button>

      </CardContent>
    </Card>
  );

  const environmentalPanels = framework.panels.filter(p => p.category === "Environmental");
  const socialPanels = framework.panels.filter(p => p.category === "Social");
  const governancePanels = framework.panels.filter(p => p.category === "Governance");

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
            <h1 className="text-2xl font-bold">
              Framework Overview
            </h1>

            <p className="text-muted-foreground">
              Explore available sustainability reporting frameworks.
            </p>
          </div>

          <Button variant="ghost" onClick={() => navigate("/")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>

        {/* Framework Info Card */}
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

        {/* Framework Switch Buttons */}
        <div className="flex gap-3">
          {frameworks.map((f, i) => (
            <Button
              key={f.id}
              size="sm"
              variant={frameworkIndex === i ? "default" : "outline"}
              className="rounded-xl px-5"
              onClick={() => setFrameworkIndex(i)}
            >
              {f.code}
            </Button>
          ))}
        </div>

        {/* All Panels — grouped by category */}
        {[
          { name: "Environmental", data: environmentalPanels },
          { name: "Social", data: socialPanels },
          { name: "Governance", data: governancePanels }
        ].map(section => (
          <div key={section.name} className="space-y-4">

            {section.data.length > 0 && (
              <h2 className={`text-lg font-semibold flex items-center gap-2 ${getCategoryColor(section.name)}`}>
                ○ {section.name}
              </h2>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {section.data.map(renderPanelCard)}
            </div>

          </div>
        ))}

      </div>
    </PageLayout>
  );
}
