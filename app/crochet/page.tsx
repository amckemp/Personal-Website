import Link from "next/link";
import { Footer } from "../components/Footer";
import { crochetPatterns } from "./data";

export default function CrochetPage() {
  return (
    <div className="crochet-page-shell">
      <div className="crochet-top-bar">
        <a className="home-link-only" href="/">
          &gt; Home
        </a>
      </div>

      <div className="hero crochet-hero">
        <div className="crochet-detail-header header">
          <h1>Crochet</h1>
        </div>
      </div>

      <div className="crochet-grid">
        {crochetPatterns.map((pattern) => (
          <Link key={pattern.slug} href={`/crochet/${pattern.slug}`} className="crochet-card">
            <img src={pattern.coverImage} alt={pattern.title} className="crochet-card-image" />
            <div className="crochet-card-title">{pattern.title}</div>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
}
