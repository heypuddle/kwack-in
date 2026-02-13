function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        {title ? <h2 style={{ margin: 0, letterSpacing: '-0.02em' }}>{title}</h2> : null}
        <div style={{ marginTop: title ? '1.25rem' : 0 }}>{children}</div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      {/* 1) HERO */}
      <section className="hero" id="top">
        <div className="container">
          <div className="split">
            <div>
              <span className="kicker">Upcoming AI tool for small businesses</span>
              <h1 className="h1">Your Next Employee Isn’t Human.</h1>
              <p className="lede">
                Meet a friendly AI assistant that helps run your business alongside you—answering
                customers, sending emails, scheduling, and handling the repetitive admin work.
              </p>

              <div className="btnRow">
                <a className="btn btnPrimary" href="#waitlist">
                  Join the Waitlist
                </a>
                <a className="btn btnSecondary" href="#what-it-can-do">
                  See What It Can Do
                </a>
              </div>

              <div className="trust">Built for busy owners. No setup headaches.</div>
            </div>

            <aside className="mock" aria-label="Product preview">
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                <div className="pill">AI Employee</div>
                <div className="pill">24/7 • Fast • Reliable</div>
              </div>

              <div className="row">
                <div>
                  <div style={{ fontWeight: 700 }}>Customer texts</div>
                  <div className="small">“Yep—confirmed for Tuesday at 2pm.”</div>
                </div>
                <div style={{ color: 'var(--accent)', fontWeight: 700 }}>Sent</div>
              </div>
              <div className="row">
                <div>
                  <div style={{ fontWeight: 700 }}>Invoice follow-up</div>
                  <div className="small">Gentle reminder + payment link.</div>
                </div>
                <div style={{ color: 'var(--accent)', fontWeight: 700 }}>Done</div>
              </div>
              <div className="row">
                <div>
                  <div style={{ fontWeight: 700 }}>Schedule update</div>
                  <div className="small">Moved appointment, notified customer.</div>
                </div>
                <div style={{ color: 'var(--accent)', fontWeight: 700 }}>Booked</div>
              </div>

              <div style={{ marginTop: '1rem', color: 'var(--muted)', fontSize: '.95rem' }}>
                Connect email, calendar, and inbox—then let it take the first pass at the busywork.
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 2) WHAT IT DOES */}
      <Section id="what-it-can-do" title="What it does">
        <div className="grid grid-3">
          <div className="card">
            <h3>Replies instantly</h3>
            <p>Handles customer texts and questions in seconds.</p>
          </div>
          <div className="card">
            <h3>Sends emails + follow-ups</h3>
            <p>Quotes, reminders, updates—without you chasing threads.</p>
          </div>
          <div className="card">
            <h3>Schedules appointments</h3>
            <p>Books and reschedules while respecting your availability.</p>
          </div>
          <div className="card">
            <h3>Pays bills + tracks expenses</h3>
            <p>Stays on top of recurring tasks and basic bookkeeping.</p>
          </div>
          <div className="card">
            <h3>Organizes tasks + reminders</h3>
            <p>Turns chaos into a clean, prioritized daily plan.</p>
          </div>
          <div className="card">
            <h3>Works 24/7</h3>
            <p>No sick days. No missed messages. Just consistent help.</p>
          </div>
        </div>
      </Section>

      {/* 3) HOW IT WORKS */}
      <Section id="how-it-works" title="How it works">
        <div className="grid grid-3">
          <div className="card">
            <h3>1) Connect your tools</h3>
            <p>Email, calendar, inbox—set it up in minutes.</p>
          </div>
          <div className="card">
            <h3>2) Tell it what to automate</h3>
            <p>Approve workflows like “reply, schedule, follow up.”</p>
          </div>
          <div className="card">
            <h3>3) Watch it handle the busywork</h3>
            <p>You stay in control while the assistant does the boring parts.</p>
          </div>
        </div>
      </Section>

      {/* 4) WHO IT’S FOR */}
      <Section id="who-its-for" title="Who it’s for">
        <div className="grid grid-3">
          {[ 
            'Contractors',
            'Real estate agents',
            'Online sellers',
            'Small retail shops',
            'Clinics & salons',
            'Anyone running a business alone',
          ].map((t) => (
            <div key={t} className="card">
              <h3>{t}</h3>
              <p>Built for the “I’m doing everything myself” phase.</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5) SOCIAL PROOF */}
      <Section id="social-proof" title="Early access is limited.">
        <div className="grid grid-3">
          <div className="card">
            <h3>“Saved me 10 hours a week.”</h3>
            <p>– Sarah M., Small Business Owner</p>
          </div>
          <div className="card">
            <h3>“I stopped missing leads.”</h3>
            <p>– Jordan K., Contractor</p>
          </div>
          <div className="card">
            <h3>“It feels like having a real assistant.”</h3>
            <p>– Priya N., Solo Founder</p>
          </div>
        </div>
      </Section>

      {/* 6) PRICING TEASER */}
      <Section id="pricing" title="Pricing">
        <div className="card" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'grid', gap: '.75rem' }}>
            <div style={{ fontSize: '1.15rem', fontWeight: 800 }}>
              Simple pricing. Less than hiring an employee.
            </div>
            <div className="small">
              Get early access and help shape the product. You’ll be the first to know when pricing
              and plans go live.
            </div>
            <div className="btnRow" style={{ marginTop: '.25rem' }}>
              <a className="btn btnPrimary" href="#waitlist">
                Get Early Access
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* 7) FINAL CTA */}
      <Section id="waitlist" title={null}>
        <div className="card" style={{ padding: '2rem' }}>
          <h2 style={{ margin: 0, letterSpacing: '-0.02em' }}>Stop doing everything yourself.</h2>
          <p className="lede" style={{ marginTop: '.75rem' }}>
            Let your AI employee handle the repetitive work while you focus on growth.
          </p>

          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const email = form.email?.value?.trim();
              if (!email) return;
              // Placeholder behavior: open email client with the address.
              window.location.href = `mailto:hello@kwack.in?subject=Kwack%20Waitlist&body=Please%20add%20me%20to%20the%20waitlist:%20${encodeURIComponent(
                email
              )}`;
            }}
          >
            <input
              className="input"
              name="email"
              type="email"
              placeholder="you@business.com"
              autoComplete="email"
              required
            />
            <button className="btn btnPrimary" type="submit">
              Join Waitlist
            </button>
            <a className="btn btnSecondary" href="#top">
              Back to top
            </a>
          </form>

          <div className="trust">No spam. Just launch updates.</div>
        </div>
      </Section>

      <footer className="footer">
        <div className="container">
          <div className="footerRow">
            <div>
              <div style={{ fontWeight: 800, color: 'var(--text)' }}>Kwack (placeholder)</div>
              <div className="small">Contact: hello@kwack.in</div>
            </div>
            <div className="links">
              <a href="#" onClick={(e) => e.preventDefault()}>
                Privacy Policy
              </a>
              <a href="#" onClick={(e) => e.preventDefault()}>
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
