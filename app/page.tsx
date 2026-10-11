import Link from 'next/link';

const services = [
  {
    icon: '01',
    title: 'Brand Identity Design',
    description:
      'Logo systems, visual language, typography, and brand guidelines that give your business a memorable market presence.',
  },
  {
    icon: '02',
    title: 'Marketing Collateral',
    description:
      'Campaign-ready brochures, flyers, presentations, social assets, and digital banners designed to convert attention into action.',
  },
  {
    icon: '03',
    title: 'Web & UI Design',
    description:
      'High-impact landing pages and user experiences that balance clarity, performance, and strong storytelling.',
  },
];

const projects = [
  { title: 'Aster & Co.', type: 'Brand refresh', accent: 'one' },
  { title: 'Harbor Studio', type: 'Campaign system', accent: 'two' },
  { title: 'Solstice Goods', type: 'Packaging design', accent: 'three' },
];

const stats = [
  { value: '120+', label: 'brands launched' },
  { value: '8 yrs', label: 'design experience' },
  { value: '96%', label: 'client retention' },
  { value: '40k+', label: 'assets delivered' },
];

export default function HomePage() {
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
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Creative strategy meets craft</span>
              <h1>Design that gives your brand a sharper voice.</h1>
              <p>
                We build visually compelling identities, campaigns, and digital experiences for businesses that want to look premium, feel credible, and grow faster.
              </p>

              <div className="cta-row">
                <Link href="/contact" className="button">
                  Start your project
                </Link>
                <Link href="/about" className="button-secondary">
                  Learn more
                </Link>
              </div>

              <div className="social-proof" aria-label="Client trust indicators">
                <span>Trusted by founders</span>
                <span>Brand-first thinking</span>
                <span>Fast turnaround</span>
              </div>
            </div>

            <div className="hero-visual" aria-label="Design portfolio preview">
              <div className="visual-card">
                <div className="project-preview">
                  <div className="preview-graphic" />
                  <div className="preview-window">
                    <div className="window-top">
                      <div className="window-dots">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="window-badges">
                        <span>Brand</span>
                        <span>Campaign</span>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gap: '1rem' }}>
                      <div style={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1.1 }}>
                        Bold ideas.
                        <br />
                        Better presence.
                      </div>
                      <div style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '18rem' }}>
                        Clean systems, strategic visuals, and unforgettable messaging built for growing brands.
                      </div>
                    </div>
                  </div>

                  <div className="dashboard">
                    <div className="metric-row">
                      <span className="meta">Engagement</span>
                      <span className="metric">+82%</span>
                    </div>
                    <div className="metric-row">
                      <span className="meta">Lead Quality</span>
                      <span className="metric">4.9/5</span>
                    </div>
                    <div className="metric-row">
                      <span className="meta">Launch Time</span>
                      <span className="metric">3 wks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">What we do</span>
                <h2>Creative services built to move brands forward.</h2>
              </div>
              <p>From your first impression to your ongoing marketing engine, we help you look polished, consistent, and unmistakably you.</p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article key={service.title} className="card">
                  <div className="card-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">Selected work</span>
                <h2>Recent projects that made an impact.</h2>
              </div>
            </div>

            <div className="portfolio-grid">
              {projects.map((project) => (
                <article key={project.title} className="card portfolio-item">
                  <div className={`project-art ${project.accent}`} aria-hidden="true" />
                  <div style={{ marginTop: '1rem' }}>
                    <div className="meta" style={{ marginBottom: '0.5rem' }}>{project.type}</div>
                    <h3>{project.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="stat-grid">
              {stats.map((stat) => (
                <div key={stat.label} className="card stats-card">
                  <strong>{stat.value}</strong>
                  <span className="meta">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">Why teams choose us</span>
                <h2>A design process built for clarity and momentum.</h2>
              </div>
            </div>

            <div className="timeline">
              <article className="card">
                <div className="card-icon">1</div>
                <h3>Discover</h3>
                <p>We unpack your goals, audience, and positioning to define the creative direction.</p>
              </article>
              <article className="card">
                <div className="card-icon">2</div>
                <h3>Design</h3>
                <p>We shape a powerful visual system that looks premium and feels aligned with your business.</p>
              </article>
              <article className="card">
                <div className="card-icon">3</div>
                <h3>Refine</h3>
                <p>Feedback is folded into the design, making the final output sharper and more effective.</p>
              </article>
              <article className="card">
                <div className="card-icon">4</div>
                <h3>Launch</h3>
                <p>We prepare the assets and guidance needed to roll out confidently across every channel.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="testimonial">
              <p>
                “Northstar Studio transformed how our brand is perceived. Their thoughtful design system helped us look more established, more premium, and more aligned with the customers we wanted to attract.”
              </p>
              <div className="quote-person">
                <div className="avatar">AM</div>
                <div>
                  <strong>Alicia Moreno</strong>
                  <div className="meta">Founder, Aster & Co.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="cta-panel">
              <div>
                <span className="eyebrow">Let’s build the next chapter</span>
                <h2>Need a stronger brand presence?</h2>
              </div>
              <Link href="/contact" className="button">
                Talk to our studio
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
              <a href="tel:+15550144">+1 (555) 014-44</a>
              <span>New York • Remote worldwide</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
