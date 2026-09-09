import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "../../components/Footer";
import { crochetPatterns } from "../data";
import { CrochetCarousel } from "./CrochetCarousel";

export function generateStaticParams() {
  return crochetPatterns.map((pattern) => ({ slug: pattern.slug }));
}

export default async function CrochetPatternPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pattern = crochetPatterns.find((item) => item.slug === slug);

  if (!pattern) {
    notFound();
  }

  return (
    <div className="crochet-page-shell">
      <div className="crochet-top-bar">
        <div className="crochet-breadcrumbs">
          <Link href="/crochet" className="crumb-link">
            crochet
          </Link>
          <span className="crumb-separator">&gt;</span>
          <span className="crumb-current">{pattern.title}</span>
        </div>
      </div>

      <div className="crochet-detail">
        <div className="crochet-detail-header">
          <h1>{pattern.title}</h1>
        </div>

        <div className="crochet-content">
          <CrochetCarousel images={pattern.images} title={pattern.title} />

          <div className="crochet-body">
            {pattern.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <Link href="/crochet" className="contact-link">
            ← Back to crochet patterns
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
