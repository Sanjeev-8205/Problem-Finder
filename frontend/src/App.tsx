import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { lazy, Suspense } from "react";

import ScrollToHash from "./components/routing/ScrollToHash";
import ScrollToTop from "./components/routing/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const Methodology = lazy(() => import("./pages/Methodology"));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToHash />
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </BrowserRouter>
  );
}

export default App;