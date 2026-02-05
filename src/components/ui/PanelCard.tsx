import { Panel } from "../../data/frameworkPanels";

export default function PanelCard({ panel }: { panel: Panel }) {
  return (
    <div className="bg-white rounded-xl shadow border p-5">

      <h3 className="font-semibold text-lg">
        {panel.title}
      </h3>

      <p className="text-gray-500 text-sm mt-1">
        {panel.desc}
      </p>

      <div className="mt-3">
        <span className="px-2 py-1 text-xs rounded bg-red-100 text-red-700">
          {panel.impact}
        </span>
      </div>

      <div className="mt-4 text-sm text-gray-500">
        Estimated time {panel.time}
      </div>

      <div className="flex justify-between mt-4 text-sm">
        <span className="bg-gray-100 px-2 py-1 rounded">
          Not Started
        </span>

        <span className="text-green-600 font-semibold">
          +{panel.points} points
        </span>
      </div>

      <button className="mt-5 w-full bg-green-600 text-white py-2 rounded-lg">
        REVIEW PANEL
      </button>

    </div>
  );
}
