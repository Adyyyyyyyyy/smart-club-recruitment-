import { useState } from "react";

function ApplicantForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // TODO: Connect with backend API
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter your full name"
          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="you@example.com"
          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      </div>

      {/* Department */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Department
        </label>
        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        >
          <option value="">Select your department</option>
          <option value="CSE">Computer Science</option>
          <option value="ECE">Electronics</option>
          <option value="ME">Mechanical</option>
          <option value="CE">Civil</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Reason */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Why do you want to join?
        </label>
        <textarea
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          required
          placeholder="Write your motivation here..."
          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition"
      >
        Submit Application
      </button>
    </form>
  );
}

export default ApplicantForm;
