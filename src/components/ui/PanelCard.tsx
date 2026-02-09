import { Panel } from "../../data/frameworkPanels";

export default function PanelCard({ panel }: { panel: Panel }) {
  return (
    <div className="bg-white rounded-xl shadow border p-5 flex flex-col">

      {/* Title */}
      <h3 className="font-semibold text-lg">
        {panel.title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-sm mt-1">
        {panel.desc}
      </p>

      {/* Impact badge */}
      {panel.impact && (
        <div className="mt-3">
          <span className="px-2 py-1 text-xs rounded bg-red-100 text-red-700">
            {panel.impact}
          </span>
        </div>
      )}

      {/* Status only — no time / points */}
      <div className="flex justify-between mt-4 text-sm">
        <span className="bg-gray-100 px-2 py-1 rounded">
          Not Started
        </span>
      </div>

      {/* Action */}
      <button className="mt-5 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
        Review Panel
      </button>

    </div>
  );
}
