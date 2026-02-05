import { useState } from "react";
import FrameworkTabs from "../components/ui/FrameworkTabs";
import PanelCard from "../components/ui/PanelCard";
import { frameworkPanels, FrameworkKey, Panel } from "../data/frameworkPanels";

type TabKey = FrameworkKey | "all";

export default function FrameworkPanels() {
  const [framework, setFramework] = useState<TabKey>("all");

  let panels: Panel[] = [];

  if (framework === "all") {
    panels = [
      ...frameworkPanels.gri,
      ...frameworkPanels.esrs,
      ...frameworkPanels.ifrs
    ];
  } else {
    panels = frameworkPanels[framework];
  }

  return (
    <div className="p-8 space-y-8">

      <FrameworkTabs
        value={framework}
        onChange={setFramework}
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {panels.map(panel => (
          <PanelCard key={panel.id} panel={panel} />
        ))}
      </div>

    </div>
  );
}
