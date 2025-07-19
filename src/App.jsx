import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import NotFound from "./pages/NotFound";
import Technology from "./pages/Technology";
import { useEffect, useState } from "react";

function App() {
  const [info, setinfo] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setinfo(data));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="destination"
            element={<Destination destinationData={info?.destinations} />}
          />
          <Route path="crew" element={<Crew crewData={info?.crew} />} />
          <Route
            path="technology"
            element={<Technology technologyData={info?.technology} />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
