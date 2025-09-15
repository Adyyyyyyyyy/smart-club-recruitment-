import { useState } from "react";

function StatusChecker() {
  const [applicationId, setApplicationId] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Checking status for:", applicationId);

    // TODO: Replace with backend API call
    if (applicationId === "12345") {
      setStatus("✅ Your application has been approved!");
    } else {
      setStatus("⏳ Your application is under review.");
    }
  };

  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Check Application Status
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Enter Application ID
          </label>
          <input
            type="text"
            value={applicationId}
            onChange={(e) => setApplicationId(e.target.value)}
            required
            placeholder="e.g., 12345"
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          Check Status
        </button>
      </form>

      {status && (
        <div className="mt-4 p-3 rounded-lg bg-indigo-100 text-indigo-800 font-medium">
          {status}
        </div>
      )}
    </div>
  );
}

export default StatusChecker;
