import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AccountSettings from "./pages/AccountSettings";
import SustainabilityReporting from "./pages/SustainabilityReporting";
import FrameworkPanels from "./pages/FrameworkPanels";
import PanelView from "./pages/PanelView";
import IndicatorDetail from "./pages/IndicatorDetail";
import WorkspaceSetup from "./pages/WorkspaceSetup";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/account-settings" element={<AccountSettings />} />

            {/* original page */}
            <Route path="/sustainability-reporting" element={<SustainabilityReporting />} />

            {/* new framework tabs page */}
            <Route path="/framework-panels" element={<FrameworkPanels />} />

            <Route path="/sustainability-reporting/:frameworkId/:panelId" element={<PanelView />} />
            <Route path="/sustainability-reporting/:frameworkId/:panelId/:indicatorId" element={<IndicatorDetail />} />

            <Route path="/workspace-setup" element={<WorkspaceSetup />} />
            <Route path="*" element={<NotFound />} />

          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
