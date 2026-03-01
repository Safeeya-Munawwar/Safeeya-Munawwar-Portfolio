import { useState, useEffect } from "react";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Home from "./pages/Home";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  // Set dark theme as default
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="overflow-x-hidden min-h-screen bg-white dark:bg-slate-950 text-black dark:text-white transition-colors duration-300">
      {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;