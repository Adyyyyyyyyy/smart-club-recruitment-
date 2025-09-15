import { useState } from "react";

function OrganizerDashboard() {
  const [applicants, setApplicants] = useState([
    { id: "12345", name: "Alice", status: "Pending" },
    { id: "67890", name: "Bob", status: "Pending" },
  ]);

  const updateStatus = (id, newStatus) => {
    setApplicants((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: newStatus } : a))
    );
  };

  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        📋 Organizer Dashboard
      </h2>

      {applicants.length === 0 ? (
        <p className="text-gray-600">No applicants yet.</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-indigo-100 text-indigo-800 text-left">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {applicants.map((applicant) => (
              <tr key={applicant.id} className="hover:bg-gray-100">
                <td className="p-2 border">{applicant.id}</td>
                <td className="p-2 border">{applicant.name}</td>
                <td className="p-2 border">
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      applicant.status === "Approved"
                        ? "bg-green-100 text-green-800"
                        : applicant.status === "Rejected"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {applicant.status}
                  </span>
                </td>
                <td className="p-2 border space-x-2">
                  <button
                    onClick={() => updateStatus(applicant.id, "Approved")}
                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => updateStatus(applicant.id, "Rejected")}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default OrganizerDashboard;
