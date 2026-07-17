import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "@/pages/Home";
import Methodology from "@/pages/Methodology";
import ScrollToHash from "./components/routing/ScrollToHash";

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/methodology"
          element={<Methodology />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;