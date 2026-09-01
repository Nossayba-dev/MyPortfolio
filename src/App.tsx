import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Nav } from "./components/Nav";
import { PageTransition } from "./components/PageTransition";
import { Home } from "./pages/Home";
import { ProjectDetail } from "./pages/ProjectDetail";
import { ContactPage } from "./pages/ContactPage";
import { NotFound } from "./pages/NotFound";
import { meta } from "./data/copy";
import { useLanguage } from "./lib/LanguageContext";

function App() {
  const location = useLocation();
  const { lang, pick } = useLanguage();

  useEffect(() => {
    document.title = pick(meta.title);
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", pick(meta.description));
    // depends on `lang`, not `pick` — `pick` is a fresh closure every render, `lang`
    // only changes when the language actually does
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

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
