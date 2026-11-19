import { Navigation } from "./components/Navigation";

const Arrow = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M4 10h11M11 5l5 5-5 5" />
  </svg>
);

const Check = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="m5 10 3.2 3.2L15.5 6" />
  </svg>
);

export default function Home() {
  return (
    <main>
      <Navigation />

      <section className="hero">
        <div className="hero-copy">
          <a className="announcement" href="#">
            <span>New</span>
            Nexa AI is here
            <b><Arrow /></b>
          </a>

          <h1>Turn your ideas into <em>impact.</em></h1>
          <p className="hero-lede">
            The intelligent workspace where ambitious teams plan, create,
            and ship exceptional work together.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#">Start for free <Arrow /></a>
            <a className="button button-secondary" href="#">
              <span className="play">▶</span> Watch demo
            </a>
          </div>

          <div className="proof">
            <span><Check /> Free 14-day trial</span>
            <span><Check /> No credit card</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Nexa workspace preview">
          <div className="glow glow-one" />
          <div className="glow glow-two" />
          <div className="app-window">
            <aside className="sidebar">
              <div className="mini-brand"><span className="brand-dot" /> Nexa</div>
              <div className="workspace-label">Workspace</div>
              <div className="side-item active">
                <span className="side-icon">⌂</span> Home
              </div>
              <div className="side-item"><span className="side-icon">◫</span> Projects</div>
              <div className="side-item"><span className="side-icon">◎</span> Insights</div>
              <div className="side-item"><span className="side-icon">♢</span> Automations</div>
              <div className="sidebar-bottom">
                <span className="avatar">AM</span>
                <div><strong>Alex Morgan</strong><small>Product team</small></div>
              </div>
            </aside>

            <div className="workspace">
              <header className="workspace-header">
                <div>
                  <small>Workspace / Overview</small>
                  <h2>Good morning, Alex</h2>
                </div>
                <div className="header-actions">
                  <button aria-label="Search">⌕</button>
                  <button className="notify" aria-label="Notifications">◉</button>
                  <span className="avatar coral">AM</span>
                </div>
              </header>

              <div className="metrics">
                <article>
                  <div className="metric-head"><span>Active projects</span><b>•••</b></div>
                  <strong>12</strong>
                  <div className="trend">↗ 18% <span>from last month</span></div>
                </article>
                <article>
                  <div className="metric-head"><span>Tasks completed</span><b>•••</b></div>
                  <strong>248</strong>
                  <div className="trend">↗ 24% <span>from last month</span></div>
                </article>
                <article>
                  <div className="metric-head"><span>Team velocity</span><b>•••</b></div>
                  <strong>94%</strong>
                  <div className="trend">↗ 8% <span>from last month</span></div>
                </article>
              </div>

              <div className="dashboard-grid">
                <article className="chart-card">
                  <div className="card-head">
                    <div><strong>Project overview</strong><small>Tasks completed this week</small></div>
                    <button>Last 7 days⌄</button>
                  </div>
                  <div className="chart">
                    <div className="chart-lines"><i /><i /><i /><i /></div>
                    <svg viewBox="0 0 460 150" preserveAspectRatio="none" aria-label="Tasks completion chart">
                      <defs>
                        <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#4f46e5" stopOpacity=".22" />
                          <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path className="area" d="M0 128 C45 118 58 88 92 96 C125 104 135 64 170 73 C205 82 220 48 255 58 C290 68 308 32 342 43 C376 54 394 20 460 25 L460 150 L0 150 Z" />
                      <path className="line" d="M0 128 C45 118 58 88 92 96 C125 104 135 64 170 73 C205 82 220 48 255 58 C290 68 308 32 342 43 C376 54 394 20 460 25" />
                      <circle cx="342" cy="43" r="5" />
                    </svg>
                    <div className="chart-labels"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div>
                  </div>
                </article>

                <article className="activity-card">
                  <div className="card-head"><strong>Recent activity</strong><a href="#">View all</a></div>
                  <div className="activity">
                    <span className="activity-avatar purple">MJ</span>
                    <p><strong>Maya Johnson</strong><br />Completed <b>Homepage redesign</b><small>12 min ago</small></p>
                  </div>
                  <div className="activity">
                    <span className="activity-avatar orange">RK</span>
                    <p><strong>Ryan Kim</strong><br />Added 3 new tasks<small>34 min ago</small></p>
                  </div>
                  <div className="activity">
                    <span className="activity-avatar green">SL</span>
                    <p><strong>Sofia Lee</strong><br />Uploaded 2 files<small>1 hour ago</small></p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="logo-strip" aria-label="Trusted companies">
        <p>Trusted by innovative teams worldwide</p>
        <div className="logos">
          <span><i className="logo-symbol orbit" /> Northstar</span>
          <span><i className="logo-symbol prism" /> Prism</span>
          <span><i className="logo-symbol vertex" /> Vertex</span>
          <span><i className="logo-symbol layers" /> Layers</span>
          <span><i className="logo-symbol arc" /> Arcwise</span>
        </div>
      </section>
    </main>
  );
}
