import { useState } from "react";
import API from "../api";

export default function ApplicantForm() {
  const [form, setForm] = useState({ name: "", email: "", club: "", whyJoin: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/apply", form);
      setMessage(`✅ Application submitted! Your ID: ${res.data.applicationId}`);
    } catch {
      setMessage("❌ Failed to submit application");
    }
  };

  return (
    <div>
      <h2>Apply to a Club</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="club" placeholder="Club Name" onChange={handleChange} required />
        <textarea name="whyJoin" placeholder="Why join?" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
