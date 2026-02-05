export interface Indicator {
  id: string;
  code: string;
  name: string;
  description: string;
  guidance?: string;
  evidenceRequired?: string;
}

export interface Panel {
  id: string;
  name: string;
  description: string;
  indicatorCount: number;
  impact: "High" | "Medium" | "Low";
  estimatedTime: string;
  status: "Not Started" | "In Progress" | "Completed";
  points: number;
  category: "Environmental" | "Social" | "Governance";
  icon: string;
  indicators: Indicator[];
}

export interface Framework {
  id: string;
  code: string;
  name: string;
  description: string;
  panels: Panel[];
}

const makeDummyIndicators = (prefix: string, count: number): Indicator[] =>
  Array.from({ length: count }).map((_, i) => ({
    id: `${prefix}-${i + 1}`,
    code: `${prefix.toUpperCase()}-${i + 1}`,
    name: `Indicator ${i + 1}`,
    description: `Auto generated indicator ${i + 1}`,
    guidance: "Provide supporting documentation and numeric data where possible.",
    evidenceRequired: "Policy doc, report extract, or system export"
  }));

export const frameworks: Framework[] = [

  // ======================
  // GRI
  // ======================
  {
    id: "gri",
    code: "GRI",
    name: "Global Reporting Initiative",
    description: "GRI topic based sustainability reporting panels",
    panels: [

      {
        id: "climate-action",
        name: "Climate Action",
        description: "Climate risk, emissions and mitigation strategy",
        indicatorCount: 12,
        impact: "High",
        estimatedTime: "10-13 min",
        status: "Not Started",
        points: 540,
        category: "Environmental",
        icon: "🌡️",
        indicators: [
          {
            id: "gri-305-1",
            code: "GRI 305-1",
            name: "Scope 1 emissions",
            description: "Direct GHG emissions",
            guidance: "Report Scope 1 in tCO2e",
            evidenceRequired: "Fuel logs, meter data"
          },
          {
            id: "gri-305-2",
            code: "GRI 305-2",
            name: "Scope 2 emissions",
            description: "Energy indirect emissions",
            guidance: "Report Scope 2 in tCO2e",
            evidenceRequired: "Electricity bills"
          },
          {
            id: "gri-305-3",
            code: "GRI 305-3",
            name: "Scope 3 emissions",
            description: "Value chain emissions",
            guidance: "Estimate upstream/downstream",
            evidenceRequired: "Supplier data"
          }
        ]
      },

      {
        id: "energy",
        name: "Energy Management",
        description: "Energy efficiency and consumption",
        indicatorCount: 8,
        impact: "High",
        estimatedTime: "10-13 min",
        status: "Not Started",
        points: 360,
        category: "Environmental",
        icon: "⚡",
        indicators: makeDummyIndicators("energy", 6)
      },

      {
        id: "water",
        name: "Water Stewardship",
        description: "Water use and discharge",
        indicatorCount: 6,
        impact: "High",
        estimatedTime: "10-13 min",
        status: "Not Started",
        points: 360,
        category: "Environmental",
        icon: "💧",
        indicators: makeDummyIndicators("water", 5)
      },

      {
        id: "waste",
        name: "Waste & Circular Economy",
        description: "Waste reduction and recycling",
        indicatorCount: 5,
        impact: "High",
        estimatedTime: "10-13 min",
        status: "Not Started",
        points: 360,
        category: "Environmental",
        icon: "♻️",
        indicators: makeDummyIndicators("waste", 5)
      },

      {
        id: "biodiversity",
        name: "Biodiversity & Land Use",
        description: "Ecosystem protection",
        indicatorCount: 4,
        impact: "Medium",
        estimatedTime: "8-10 min",
        status: "Not Started",
        points: 270,
        category: "Environmental",
        icon: "🌿",
        indicators: makeDummyIndicators("bio", 4)
      },

      {
        id: "human-rights",
        name: "Human Rights",
        description: "Human rights protections",
        indicatorCount: 7,
        impact: "High",
        estimatedTime: "10-13 min",
        status: "Not Started",
        points: 360,
        category: "Social",
        icon: "🤝",
        indicators: makeDummyIndicators("hr", 6)
      },

      {
        id: "labor",
        name: "Labor Practices",
        description: "Employment standards",
        indicatorCount: 9,
        impact: "High",
        estimatedTime: "10-13 min",
        status: "Not Started",
        points: 360,
        category: "Social",
        icon: "👷",
        indicators: makeDummyIndicators("labor", 6)
      },

      {
        id: "health-safety",
        name: "Health & Safety",
        description: "Workplace safety",
        indicatorCount: 6,
        impact: "High",
        estimatedTime: "10-13 min",
        status: "Not Started",
        points: 360,
        category: "Social",
        icon: "🏥",
        indicators: makeDummyIndicators("safety", 5)
      },

      {
        id: "diversity",
        name: "Diversity & Inclusion",
        description: "D&I metrics",
        indicatorCount: 5,
        impact: "Medium",
        estimatedTime: "8-10 min",
        status: "Not Started",
        points: 270,
        category: "Social",
        icon: "🌈",
        indicators: makeDummyIndicators("dei", 5)
      },

      {
        id: "ethics",
        name: "Ethics & Integrity",
        description: "Compliance and anti corruption",
        indicatorCount: 8,
        impact: "High",
        estimatedTime: "10-13 min",
        status: "Not Started",
        points: 360,
        category: "Governance",
        icon: "⚖️",
        indicators: makeDummyIndicators("ethics", 6)
      },

      {
        id: "board",
        name: "Board Governance",
        description: "Board oversight",
        indicatorCount: 6,
        impact: "High",
        estimatedTime: "10-13 min",
        status: "Not Started",
        points: 360,
        category: "Governance",
        icon: "🏛️",
        indicators: makeDummyIndicators("board", 5)
      }

    ]
  },

  // ======================
  // ESRS
  // ======================
  {
    id: "esrs",
    code: "ESRS",
    name: "European Sustainability Reporting Standards",
    description: "EU sustainability disclosure framework",
    panels: [
      {
        id: "esrs-climate",
        name: "Climate Risk",
        description: "Climate risk and transition exposure",
        indicatorCount: 5,
        impact: "High",
        estimatedTime: "10-13 min",
        status: "Not Started",
        points: 360,
        category: "Environmental",
        icon: "🌍",
        indicators: makeDummyIndicators("esrs-climate", 5)
      },
      {
        id: "esrs-workforce",
        name: "Own Workforce",
        description: "Employee conditions",
        indicatorCount: 4,
        impact: "High",
        estimatedTime: "10-13 min",
        status: "Not Started",
        points: 270,
        category: "Social",
        icon: "👥",
        indicators: makeDummyIndicators("esrs-workforce", 4)
      }
    ]
  },

  // ======================
  // IFRS
  // ======================
  {
    id: "ifrs",
    code: "IFRS",
    name: "IFRS Sustainability",
    description: "IFRS S1 and S2 disclosure standards",
    panels: [
      {
        id: "ifrs-governance",
        name: "Governance",
        description: "Oversight and governance of sustainability",
        indicatorCount: 4,
        impact: "High",
        estimatedTime: "10-13 min",
        status: "Not Started",
        points: 270,
        category: "Governance",
        icon: "🏛️",
        indicators: makeDummyIndicators("ifrs-gov", 4)
      },
      {
        id: "ifrs-risk",
        name: "Risk Management",
        description: "Sustainability risk controls",
        indicatorCount: 4,
        impact: "Medium",
        estimatedTime: "8-10 min",
        status: "Not Started",
        points: 180,
        category: "Governance",
        icon: "⚠️",
        indicators: makeDummyIndicators("ifrs-risk", 4)
      }
    ]
  }

];

export const getFramework = (frameworkId: string) =>
  frameworks.find(f => f.id === frameworkId);

export const getPanel = (frameworkId: string, panelId: string) =>
  getFramework(frameworkId)?.panels.find(p => p.id === panelId);

export const getIndicator = (
  frameworkId: string,
  panelId: string,
  indicatorId: string
) =>
  getPanel(frameworkId, panelId)?.indicators.find(i => i.id === indicatorId);
