export type FrameworkKey = "gri" | "esrs" | "ifrs";

export type Panel = {
  id: string;
  title: string;
  desc: string;
  impact: "High" | "Medium" | "Low";
  points: number;
  time: string;
};

export const frameworkPanels: Record<FrameworkKey, Panel[]> = {
  gri: [
    {
      id: "gri-1",
      title: "Waste & Circular Economy",
      desc: "Waste reduction and circular initiatives",
      impact: "High",
      points: 360,
      time: "10–13 min"
    },
    {
      id: "gri-2",
      title: "Health & Safety",
      desc: "Workplace safety and wellbeing",
      impact: "High",
      points: 360,
      time: "10–13 min"
    }
  ],

  esrs: [
    {
      id: "esrs-1",
      title: "Climate Action",
      desc: "Climate mitigation measures",
      impact: "Medium",
      points: 540,
      time: "10–13 min"
    },
    {
      id: "esrs-2",
      title: "Energy Management",
      desc: "Energy efficiency tracking",
      impact: "Medium",
      points: 360,
      time: "10–13 min"
    }
  ],

  ifrs: [
    {
      id: "ifrs-1",
      title: "Human Rights",
      desc: "Human rights protections",
      impact: "High",
      points: 360,
      time: "10–13 min"
    },
    {
      id: "ifrs-2",
      title: "Labor Practices",
      desc: "Fair employment standards",
      impact: "High",
      points: 360,
      time: "10–13 min"
    }
  ]
};
