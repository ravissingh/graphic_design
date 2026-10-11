import Link from 'next/link';

export default function ContactPage() {
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
            <span className="eyebrow">Contact us</span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4.3rem)', letterSpacing: '-0.05em', margin: '1rem 0' }}>Tell us about your next design project.</h1>
            <p>
              Whether you need a refined visual identity, a conversion-focused landing page, or campaign assets that actually move people, we’d love to hear what you are building.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container contact-grid">
            <aside className="contact-card">
              <span className="eyebrow">Get in touch</span>
              <h2 style={{ marginTop: '1rem', fontSize: 'clamp(2rem, 4vw, 2.7rem)', letterSpacing: '-0.05em' }}>Let’s build something sharp.</h2>

              <div className="contact-list" style={{ marginTop: '2rem' }}>
                <div className="contact-item">
                  <div className="icon-badge">@</div>
                  <div>
                    <strong>Email</strong>
                    <div className="meta"><a href="mailto:hello@northstarstudio.design">hello@northstarstudio.design</a></div>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="icon-badge">☎</div>
                  <div>
                    <strong>Phone</strong>
                    <div className="meta"><a href="tel:+15550144">+1 (555) 014-44</a></div>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="icon-badge">◎</div>
                  <div>
                    <strong>Location</strong>
                    <div className="meta">New York • Remote worldwide</div>
                  </div>
                </div>
              </div>
            </aside>

            <div className="form-card">
              <form>
                <div className="form-grid">
                  <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" placeholder="Your name" />
                  </div>

                  <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="hello@company.com" />
                  </div>

                  <div>
                    <label htmlFor="company">Company</label>
                    <input id="company" name="company" type="text" placeholder="Company or brand" />
                  </div>

                  <div>
                    <label htmlFor="budget">Budget range</label>
                    <select id="budget" name="budget">
                      <option value="">Select a range</option>
                      <option>$2k - $5k</option>
                      <option>$5k - $10k</option>
                      <option>$10k - $25k</option>
                      <option>$25k+</option>
                    </select>
                  </div>

                  <div className="full">
                    <label htmlFor="project">Project type</label>
                    <input id="project" name="project" type="text" placeholder="Brand identity, landing page, campaign design..." />
                  </div>

                  <div className="full">
                    <label htmlFor="message">Project details</label>
                    <textarea id="message" name="message" placeholder="Tell us about your goals, timeline, and what you want to achieve." />
                  </div>
                </div>

                <div className="form-actions">
                  <button type="submit" className="button">Send inquiry</button>
                </div>
              </form>
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
