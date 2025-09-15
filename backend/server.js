const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/smartclub", { // change if using Atlas
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Schema + Model
const applicationSchema = new mongoose.Schema({
  name: String,
  email: String,
  club: String,
  whyJoin: String,
  status: { type: String, default: "Pending" }, // e.g., Pending, Shortlisted, Rejected
  stage: { type: String, default: "Applied" },  // e.g., Applied, Interview, Selected
  createdAt: { type: Date, default: Date.now },
});

const Application = mongoose.model("Application", applicationSchema);

// ------------------------------------------------
// 1️⃣ POST /api/apply → Applicants submit application
// ------------------------------------------------
app.post("/api/apply", async (req, res) => {
  try {
    const newApp = new Application(req.body);
    await newApp.save();
    res.status(201).json({
      message: "Application submitted successfully",
      applicationId: newApp._id,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to submit application" });
  }
});

// ------------------------------------------------
// 2️⃣ GET /api/status/:id → Applicant checks status
// ------------------------------------------------
app.get("/api/status/:id", async (req, res) => {
  try {
    const appData = await Application.findById(req.params.id);
    if (!appData) return res.status(404).json({ error: "Application not found" });
    res.json(appData);
  } catch (err) {
    res.status(500).json({ error: "Error fetching status" });
  }
});

// ------------------------------------------------
// 3️⃣ GET /api/applicants/:clubId → Organizer views applicants
// ------------------------------------------------
app.get("/api/applicants/:clubId", async (req, res) => {
  try {
    const applicants = await Application.find({ club: req.params.clubId });
    res.json(applicants);
  } catch (err) {
    res.status(500).json({ error: "Error fetching applicants" });
  }
});

// ------------------------------------------------
// 4️⃣ PUT /api/update/:id → Organizer updates status/stage
// ------------------------------------------------
app.put("/api/update/:id", async (req, res) => {
  try {
    const { status, stage } = req.body;
    const updatedApp = await Application.findByIdAndUpdate(
      req.params.id,
      { status, stage },
      { new: true }
    );
    if (!updatedApp) return res.status(404).json({ error: "Application not found" });
    res.json({ message: "Application updated successfully", updatedApp });
  } catch (err) {
    res.status(500).json({ error: "Error updating application" });
  }
});

// ✅ Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
