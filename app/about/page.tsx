import Link from 'next/link';

const values = [
  {
    title: 'Strategy first',
    description: 'Every design decision starts with clarity around the audience, positioning, and commercial goal.',
  },
  {
    title: 'Beautifully practical',
    description: 'We create work that is compelling to look at and easy to use across the channels that matter most.',
  },
  {
    title: 'Built to scale',
    description: 'Our systems are deliberately structured so your brand stays consistent as you grow and evolve.',
  },
];

const expertise = [
  'Brand strategy and positioning',
  'Logo design and identity systems',
  'Marketing and campaign design',
  'Packaging and print design',
  'Landing page and web UI design',
  'Creative direction for launches',
];

export default function AboutPage() {
  return (
    <>
      <header className="site-header">
        <div className="container navbar">
          <Link href="/" className="brand" aria-label="Northstar Studio home">
            <span className="brand-mark">N</span>
            <span>Northstar Studio</span>
          </Link>

          <nav className="nav-links" aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <Link href="/contact" className="button">
            Book a call
          </Link>
        </div>
      </header>

      <main>
        <section className="page-hero">
          <div className="container page-hero-inner">
            <span className="eyebrow">About our studio</span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4.3rem)', letterSpacing: '-0.05em', margin: '1rem 0' }}>We build memorable brand experiences for ambitious businesses.</h1>
            <p>
              Northstar Studio helps founders, small teams, and growing companies bring sharper strategy and more confident visuals into the market. We work with brands that want to look elevated, feel consistent, and connect faster with the people they serve.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container story-grid">
            <div>
              <span className="eyebrow">Our story</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.05em' }}>Design should do more than look good.</h2>
              <p>
                Our studio began with a simple belief: strong creative work should help businesses tell a clearer story, build trust faster, and stand apart in crowded markets. We create visual systems that merge strategy, storytelling, and modern design thinking.
              </p>
              <p>
                From startup identity work to campaign production and digital experiences, we collaborate closely with clients to make sure every output carries meaning and moves the business forward.
              </p>
            </div>
            <div className="story-visual" aria-label="Visual about section" />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">Why we work this way</span>
                <h2>Our values shape every project.</h2>
              </div>
            </div>

            <div className="values-grid">
              {values.map((value) => (
                <article key={value.title} className="card">
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">Core strengths</span>
                <h2>Capabilities designed for modern brands.</h2>
              </div>
            </div>

            <div className="expertise-grid">
              {expertise.map((item) => (
                <div key={item} className="card">
                  <h3 style={{ marginBottom: 0 }}>{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="cta-panel">
              <div>
                <span className="eyebrow">Ready to create something memorable?</span>
                <h2>Let’s shape a brand that people remember.</h2>
              </div>
              <Link href="/contact" className="button">
                Start the conversation
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <Link href="/" className="brand" style={{ marginBottom: '0.9rem' }}>
              <span className="brand-mark">N</span>
              <span>Northstar Studio</span>
            </Link>
            <p>Strategic graphic design and digital experiences for brands ready to stand out.</p>
          </div>

          <div>
            <strong style={{ display: 'block', marginBottom: '0.7rem', color: 'var(--text)' }}>Explore</strong>
            <div className="footer-links">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <strong style={{ display: 'block', marginBottom: '0.7rem', color: 'var(--text)' }}>Contact</strong>
            <div className="footer-links">
              <a href="mailto:hello@northstarstudio.design">hello@northstarstudio.design</a>
              <a href="tel:+916309377662">+91 6309377662</a>

              <span>New York • Remote worldwide</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
