import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { accounts, projects } from './data'

const repoUrl = 'https://github.com/siddchauhan77/clay-gtm-portfolio'

function Arrow({ direction = 'right' }) {
  const rotate = direction === 'left' ? 'rotate(180 12 12)' : undefined
  return (
    <svg aria-hidden="true" className="arrow-icon" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M14 7l5 5-5 5" transform={rotate} />
    </svg>
  )
}

function Header() {
  const links = [
    ['/', 'Overview'],
    ['/lead-list', 'Lead List'],
    ['/account-brief', 'Account Brief'],
    ['/gtm-plan', 'GTM Plan'],
  ]
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" to="/" aria-label="Clay GTM Portfolio home">
          <strong>Clay GTM Portfolio</strong>
          <span>by Sidd Chauhan</span>
        </Link>
        <nav aria-label="Primary navigation">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/'}>{label}</NavLink>
          ))}
        </nav>
        <a className="header-repo" href={repoUrl} target="_blank" rel="noreferrer">
          GitHub <Arrow />
        </a>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <div className="shell footer-main">
        <div className="brand footer-brand">
          <strong>Clay GTM Portfolio</strong>
          <span>Ideas to execution, with evidence.</span>
        </div>
        <div className="footer-status">
          <span className="status-dot" /> Strategy complete. Distribution pending.
        </div>
      </div>
      <div className="shell footer-meta">
        <span>© 2026 Sidd Chauhan</span>
        <a href={repoUrl} target="_blank" rel="noreferrer">View source</a>
      </div>
    </footer>
  )
}

function Layout({ children }) {
  const { pathname } = useLocation()
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main" key={pathname}>{children}</main>
      <Footer />
    </>
  )
}

function Overview() {
  return (
    <Layout>
      <section className="shell hero overview-hero">
        <div className="hero-copy">
          <h1>From account data to GTM decisions.</h1>
          <p>Three Clay projects combined into one execution sprint: 25 accounts sourced, 8 researched, 5 prioritized, one account brief, and one GTM plan.</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/lead-list">View the case study <Arrow /></Link>
            <a className="text-link" href={repoUrl} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          </div>
        </div>
        <figure className="hero-visual">
          <img src="/assets/gtm_execution_sprint_journey.png" alt="Visual map of the Clay GTM execution sprint" />
        </figure>
      </section>

      <section className="rule-section shell decision-section">
        <div className="section-intro split-intro">
          <h2>The decision funnel</h2>
          <p>A focused path from broad market research to five accounts ready for deeper GTM planning.</p>
        </div>
        <div className="metric-flow" aria-label="25 accounts sourced, 8 accounts researched, 5 accounts prioritized">
          <Metric value="25" label="Accounts sourced" note="Built a market-aware list using Clay." />
          <Arrow />
          <Metric value="8" label="Accounts researched" note="Added company, signal, intent, and founder context." />
          <Arrow />
          <Metric value="5" label="Accounts prioritized" note="Selected the best fit for outreach and GTM planning." />
        </div>
      </section>

      <section className="rule-section shell projects-section">
        <div className="section-intro split-intro">
          <h2>Three projects, one story</h2>
          <p>Each project builds on the last. Data becomes judgment, then narrative, then a commercial test.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <Link className="project-row" key={project.path} to={project.path}>
              <span className="project-number">{project.number}</span>
              <span className={`project-accent ${project.tone}`} />
              <img src={project.image} alt="" loading="lazy" decoding="async" />
              <span className="project-copy">
                <strong>{project.title}</strong>
                <span>{project.summary}</span>
              </span>
              <Arrow />
            </Link>
          ))}
        </div>
      </section>

      <section className="rule-section shell status-section">
        <div className="section-intro split-intro">
          <h2>What is complete. What comes next.</h2>
          <p>Research and strategy are complete. Outreach and market outcomes are not presented as finished work.</p>
        </div>
        <div className="status-grid">
          <StatusColumn title="Complete" tone="lime" items={['25 accounts sourced and enriched', '8 accounts researched', '5 accounts prioritized', 'Wooqer account brief', 'Side-hustle GTM plan', 'Campaign landing page']} />
          <StatusColumn title="Next" tone="blue" pending items={['Personalized outreach', 'Follow-ups', 'Replies and objections', 'Calls and referrals', 'Paid pilot and revenue', 'Results-based retrospective']} />
        </div>
      </section>
    </Layout>
  )
}

function Metric({ value, label, note }) {
  return <div className="metric"><strong>{value}</strong><h3>{label}</h3><p>{note}</p></div>
}

function StatusColumn({ title, tone, items, pending = false }) {
  return (
    <div className="status-column">
      <h3><span className={`status-rail ${tone}`} />{title}</h3>
      <ul>
        {items.map(item => <li className={pending ? 'pending' : ''} key={item}><span aria-hidden="true">{pending ? '○' : '✓'}</span>{item}</li>)}
      </ul>
    </div>
  )
}

const scoring = [
  ['01', 'ICP fit', 'Does the company match the target profile?'],
  ['02', 'Trigger strength', 'Is there a recent event creating urgency?'],
  ['03', 'Founder-content opportunity', 'Is there room for buyer education?'],
  ['04', 'Ability to pay', 'Do funding, scale, and signals support a test?'],
  ['05', 'Reachability', 'Is there a plausible path to the buyer?'],
  ['06', 'Portfolio value', 'Does the work build relevant career evidence?'],
]

function LeadList() {
  return (
    <ProjectLayout active="lead-list" title="From 25 accounts to five priorities." subtitle="Clay handled sourcing and enrichment. Human research changed the ranking." aside="A repeatable system for turning a broad market list into a focused set of high-potential accounts.">
      <Section title="Decision pipeline" intro="From a broad universe to a focused set of five.">
        <ol className="pipeline">
          {['Offer', 'ICP', '25 accounts', 'Enrichment', '8 researched', '5 prioritized'].map((item, index) => (
            <li className={index === 5 ? 'active' : ''} key={item}><span>{index + 1}</span><strong>{item}</strong></li>
          ))}
        </ol>
      </Section>

      <Section title="Target account list" intro="The five prioritized accounts from the 25-account list.">
        <AccountTable />
      </Section>

      <Section title="Scoring criteria" intro="Each account was evaluated across six decision criteria.">
        <div className="criteria-grid">
          {scoring.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </Section>

      <Section title="Disqualification logic" intro="Company quality and prospect quality are different questions.">
        <div className="decision-table" role="table" aria-label="Disqualification decisions">
          <div className="decision-row decision-head" role="row"><span>Company</span><span>Decision</span><span>Reason</span></div>
          <div className="decision-row" role="row"><strong>Aligned</strong><span>Benchmark</span><p>Founder-led content was already mature.</p></div>
          <div className="decision-row" role="row"><strong>CloudEagle.ai</strong><span>Benchmark</span><p>Strong founder content already existed.</p></div>
          <div className="decision-row" role="row"><strong>Adept</strong><span className="drop">Dropped</span><p>Leadership context was less clear than the alternatives.</p></div>
        </div>
      </Section>

      <MediaSection image="/assets/clay_mission_1_lead_scoring_workflow.png" alt="Clay lead-scoring workflow illustration">
        <h2>Workflow in Clay</h2>
        <p>Clay supplied the broad list and useful enrichment. The ranking changed after deeper human research on product, growth, founder content, and market context.</p>
        <ol className="number-list"><li>Define offer and ICP</li><li>Source and enrich 25 accounts</li><li>Research eight accounts manually</li><li>Score and finalize five</li></ol>
      </MediaSection>

      <Evidence evidence={['A 25-account list with enrichment signals', 'A documented shortlist and final five', 'Specific reasons to retain, benchmark, or drop accounts']} learning={['Automated data is necessary, not sufficient', 'A strong company is not automatically a strong prospect', 'Disqualification logic improves the credibility of the ranking']} />
      <ProjectNav previous={{ path: '/', title: 'Overview' }} next={projects[1]} />
    </ProjectLayout>
  )
}

function AccountTable() {
  return (
    <div className="table-scroll">
      <table>
        <thead><tr><th>Company</th><th>Employees</th><th>3-mo growth</th><th>12-mo growth</th><th>Status</th><th>Why it stayed</th></tr></thead>
        <tbody>{accounts.map(account => <tr key={account.name}><td><strong>{account.name}</strong></td><td>{account.employees}</td><td>{account.growth3}</td><td>{account.growth12}</td><td>{account.status}</td><td>{account.note}</td></tr>)}</tbody>
      </table>
    </div>
  )
}

function AccountBrief() {
  return (
    <ProjectLayout active="account-brief" title="Turn research into a 90-second decision brief." subtitle="Wooqer became the primary account because expansion created a specific GTM question." aside="Global proof was present. The opportunity was translating it into local relevance and trust for North America.">
      <Section title="Company snapshot" intro="Wooqer is a frontline operations platform for multi-location businesses, especially retail and restaurant chains.">
        <div className="open-grid two-col">
          <TextBlock title="The operating problem" body="Headquarters defines a standard. Execution varies across hundreds of locations. Visibility, compliance, and customer experience suffer." />
          <TextBlock title="Primary buyers" body="Retail operations leaders, COOs, store operations leaders, district managers, and operations-excellence teams." />
        </div>
      </Section>

      <Section title="Why now" intro="The central trigger was Wooqer's North America expansion.">
        <div className="statement">How does Wooqer transfer strong global credibility into U.S. awareness, trust, and pipeline?</div>
        <ol className="horizontal-flow"><li>Global proof</li><li>North America push</li><li>Regional sales motion</li><li>U.S. positioning</li><li>Enterprise conversations</li></ol>
      </Section>

      <MediaSection reverse image="/assets/wooqer_growth_strategy_profile.png" alt="Wooqer growth strategy profile illustration">
        <h2>The GTM hypothesis</h2>
        <p>Turn the founder's operating knowledge, customer insight, global proof, and U.S. market learning into category education for retail operations leaders.</p>
        <ul className="plain-list"><li>The execution gap in multi-location operations</li><li>Global retail lessons applied to the U.S.</li><li>Operator and customer stories</li><li>Building Wooqer North America in public</li></ul>
      </MediaSection>

      <Section title="The 90-second brief" intro="A compact research narrative for fast sales preparation.">
        <blockquote className="brief-quote">Wooqer already has strong global proof. The GTM challenge appears to be translating that credibility into U.S. awareness, trust, and pipeline. Founder-led content could support the expansion by turning operational knowledge, customer stories, and U.S. market learning into useful category education for retail operations leaders.</blockquote>
      </Section>

      <Evidence evidence={['Company and buyer context', 'A concrete expansion trigger', 'A specific account-level GTM hypothesis']} learning={['A trigger matters only when it changes the outreach angle', 'Founder activity changes the recommendation from adoption to orchestration', 'A useful brief ends in a testable hypothesis']} />
      <ProjectNav previous={projects[0]} next={projects[2]} />
    </ProjectLayout>
  )
}

function GtmPlan() {
  return (
    <ProjectLayout active="gtm-plan" title="Turn the research into a commercial test." subtitle="The offer became a 30-day Founder Demand Pilot for B2B SaaS companies with complex products." aside="The plan connects a specific ICP, trigger signals, a scoped offer, outreach, and a measurable learning loop.">
      <Section title="The offer" intro="Founder-Led Demand Content System">
        <div className="offer-statement">Turn founder expertise, customer conversations, and product insight into LinkedIn and newsletter content that supports buyer education, category authority, and sales conversations.</div>
      </Section>

      <Section title="Who it is for" intro="A narrow starting ICP, not a universal content service.">
        <div className="open-grid three-col">
          <TextBlock title="Company" body="B2B SaaS, roughly 20–150 employees, Seed to Series B preferred, U.S. market or active U.S. expansion." />
          <TextBlock title="Problem" body="The product requires education and the founder's useful market knowledge stays trapped in calls, documents, and internal conversations." />
          <TextBlock title="Trigger" body="Expansion, new GTM leadership, funding, hiring, a product launch, repositioning, or repeated buyer-education friction." />
        </div>
      </Section>

      <MediaSection image="/assets/founder_led_demand_content_system.png" alt="Founder-led demand content system illustration">
        <h2>The mechanism</h2>
        <p>AI supports research, extraction, organization, ideation, repurposing, and workflow management. Human judgment owns positioning, stories, editing, account context, and final writing.</p>
        <ol className="number-list"><li>Extract expertise and customer language</li><li>Sharpen the point of view</li><li>Publish on LinkedIn and email</li><li>Learn from commercial signal</li></ol>
      </MediaSection>

      <Section title="30-day pilot" intro="A pricing test with a defined scope. Not a market benchmark.">
        <div className="pilot-layout">
          <div className="pilot-price"><span>30 days</span><strong>$2,000</strong><p>Test price for one focused engagement.</p></div>
          <ul className="deliverables"><li>Founder positioning interview</li><li>Message and content map</li><li>8 LinkedIn posts</li><li>1 newsletter or long-form email</li><li>Customer and sales insight mining</li><li>Performance and learning review</li></ul>
        </div>
      </Section>

      <Section title="Commercial learning loop" intro="The site supports outreach. It does not replace distribution.">
        <ol className="horizontal-flow campaign-flow"><li>15 prospects</li><li>Replies</li><li>Conversations</li><li>Sales call</li><li>Paid pilot</li><li>Retainer test</li></ol>
        <p className="evidence-note">Planning target only. No outreach, response, meeting, pilot, or revenue result is claimed yet.</p>
      </Section>

      <Evidence evidence={['Offer, ICP, and trigger definition', 'A scoped pilot and pricing test', 'Channels, funnel, and measurement plan']} learning={['The first objective is one real client conversation', 'A landing page validates an offer after outreach', 'Revenue evidence begins only after a payment is received']} />
      <ProjectNav previous={projects[1]} />
    </ProjectLayout>
  )
}

function ProjectLayout({ title, subtitle, aside, children }) {
  const { pathname } = useLocation()
  const routeLabel = {
    '/lead-list': 'Lead List + Target Ranking',
    '/account-brief': '90-Second Account Brief',
    '/gtm-plan': 'Side-Hustle GTM Plan',
  }[pathname]
  return (
    <Layout>
      <section className="shell project-hero">
        <div><div className="project-label">{routeLabel}</div><h1>{title}</h1><p>{subtitle}</p></div>
        <aside>{aside}</aside>
      </section>
      <div className="shell project-body">{children}</div>
    </Layout>
  )
}

function Section({ title, intro, children }) {
  return <section className="project-section"><div className="project-section-head"><h2>{title}</h2>{intro && <p>{intro}</p>}</div>{children}</section>
}

function MediaSection({ image, alt, reverse = false, children }) {
  return <section className={`project-section media-section ${reverse ? 'reverse' : ''}`}><figure><img src={image} alt={alt} loading="eager" fetchPriority="high" /></figure><div className="media-copy">{children}</div></section>
}

function TextBlock({ title, body }) {
  return <article className="text-block"><h3>{title}</h3><p>{body}</p></article>
}

function Evidence({ evidence, learning }) {
  return (
    <Section title="Evidence and learning" intro="What the work proves, what changed, and what comes next.">
      <div className="evidence-grid">
        <div><h3>Evidence</h3><ul className="plain-list">{evidence.map(item => <li key={item}>{item}</li>)}</ul></div>
        <div><h3>Learning</h3><ul className="plain-list">{learning.map(item => <li key={item}>{item}</li>)}</ul></div>
      </div>
    </Section>
  )
}

function ProjectNav({ previous, next }) {
  return (
    <nav className="project-nav" aria-label="Project navigation">
      {previous ? <Link to={previous.path}><Arrow direction="left" /><span><small>Previous</small><strong>{previous.title}</strong></span></Link> : <span />}
      {next ? <Link className="next" to={next.path}><span><small>Next</small><strong>{next.title}</strong></span><Arrow /></Link> : <Link className="next" to="/"><span><small>Return to</small><strong>Overview</strong></span><Arrow /></Link>}
    </nav>
  )
}

function NotFound() {
  return <Layout><section className="shell not-found"><h1>Page not found.</h1><Link className="button button-primary" to="/">Return to overview <Arrow /></Link></section></Layout>
}

export default function App() {
  return <Routes><Route path="/" element={<Overview />} /><Route path="/lead-list" element={<LeadList />} /><Route path="/account-brief" element={<AccountBrief />} /><Route path="/gtm-plan" element={<GtmPlan />} /><Route path="*" element={<NotFound />} /></Routes>
}
