import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <section className="section not-found">
      <div className="container">
        <h1 className="section-title">Page not found.</h1>
        <Link to="/" className="btn btn-primary">
          Back home
        </Link>
      </div>
    </section>
  );
}
