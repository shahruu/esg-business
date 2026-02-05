import { FrameworkKey } from "../../data/frameworkPanels";

type TabKey = FrameworkKey | "all";

type Props = {
  value: TabKey;
  onChange: (key: TabKey) => void;
};

const tabs: { key: TabKey; label: string }[] = [
  { key: "all", label: "All Frameworks" },
  { key: "gri", label: "GRI" },
  { key: "esrs", label: "ESRS" },
  { key: "ifrs", label: "IFRS" }
];

export default function FrameworkTabs({ value, onChange }: Props) {
  return (
    <div className="flex gap-3 bg-gray-100 p-2 rounded-2xl w-fit">
      {tabs.map(tab => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={`px-5 py-2 rounded-xl text-sm font-medium
            ${value === tab.key
              ? "bg-green-600 text-white"
              : "bg-white text-gray-600"}
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
