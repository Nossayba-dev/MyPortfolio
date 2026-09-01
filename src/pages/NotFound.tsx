import { Link } from "react-router-dom";
import { notFound as copy } from "../data/copy";
import { useLanguage } from "../lib/LanguageContext";

export function NotFound() {
  const { pick } = useLanguage();
  return (
    <section className="section not-found">
      <div className="container">
        <h1 className="section-title">{pick(copy.title)}</h1>
        <Link to="/" className="btn btn-primary">
          {pick(copy.backHome)}
        </Link>
      </div>
    </section>
  );
}
