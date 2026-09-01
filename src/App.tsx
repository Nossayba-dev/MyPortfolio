import { Route, Routes, useLocation } from "react-router-dom";
import { Nav } from "./components/Nav";
import { PageTransition } from "./components/PageTransition";
import { Home } from "./pages/Home";
import { ProjectDetail } from "./pages/ProjectDetail";
import { ContactPage } from "./pages/ContactPage";
import { NotFound } from "./pages/NotFound";

function App() {
  const location = useLocation();

  return (
    <>
      <Nav />
      <main>
        {/* No AnimatePresence/exit: with mode="wait" the next route only mounts once
            the previous one finishes animating out, so a stalled exit animation leaves
            the URL changed with the old page still on screen. The new page fades in. */}
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/projects/:slug"
            element={
              <PageTransition>
                <ProjectDetail />
              </PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransition>
                <ContactPage />
              </PageTransition>
            }
          />
          <Route
            path="*"
            element={
              <PageTransition>
                <NotFound />
              </PageTransition>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
