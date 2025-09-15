import ApplicantForm from "./components/ApplicantForm";
import StatusChecker from "./components/StatusChecker";
import OrganizerDashboard from "./components/OrganizerDashboard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Navbar */}
      <header className="bg-indigo-600 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold">🎓 Smart Club Recruitment</h1>
          <nav className="space-x-6">
            <a href="#apply" className="hover:underline">
              Apply
            </a>
            <a href="#status" className="hover:underline">
              Check Status
            </a>
            <a href="#dashboard" className="hover:underline">
              Organizer Dashboard
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-10 space-y-12">
        {/* Applicant Form */}
        <section id="apply">
          <ApplicantForm />
        </section>

        {/* Status Checker */}
        <section id="status">
          <StatusChecker />
        </section>

        {/* Organizer Dashboard */}
        <section id="dashboard">
          <OrganizerDashboard />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-6 mt-12">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Smart Club Recruitment. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
