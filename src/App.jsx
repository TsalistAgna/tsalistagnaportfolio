import { useEffect } from 'react'
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom'
import Navigation from './components/Navigation.jsx'
import Footer from './components/Footer.jsx'
import ProjectPreview from './components/ProjectPreview.jsx'
import RichContent from './components/RichContent.jsx'
import Media from './components/Media.jsx'
import projects from './data/projects.json'
import caseStudies from './data/caseStudies.json'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    const slug = pathname.startsWith('/work/') ? pathname.split('/')[2] : null
    document.title = slug && caseStudies[slug] ? `${caseStudies[slug].title} — Tsalist Agna` : pathname === '/work' ? 'Product Work — Tsalist Agna' : 'Tsalist Agna — Product Design & Project Management'
    if (hash) { requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })) }
    else window.scrollTo({ top: 0 })
  }, [pathname, hash])
  return null
}

function SectionHeader({ index, eyebrow, title, right }) {
  return <div className="section-heading"><div><span className="eyebrow">{index} / {eyebrow}</span><h2 className="font-display text-4xl leading-[1.08] font-medium tracking-tight md:text-6xl">{title}</h2></div>{right}</div>
}

function Home() {
  return <>
    <section className="site-shell hero relative"><div className="hero-kicker"><span className="status-dot" /> Tsalist Agna, or Nana <span className="hero-kicker-line" /> Product designer</div>
      <div className="relative z-10"><h1 className="hero-title">Designing products.<br /><span className="hero-title-soft">Managing the process.</span><br />Making ideas <span className="hero-underline">real.</span></h1>
        <div className="hero-bottom"><p className="max-w-[37rem] text-lg leading-relaxed text-ink-muted md:text-xl">I work across product design, project management, and implementation. I like shaping useful ideas, organizing the work, and understanding how the product gets built.</p>
          <Link className="pill-button pill-dark" to="/#selected">Explore my work <span aria-hidden="true">↘</span></Link></div></div>
      <div className="hero-portrait"><Media src="/image/profile_pixel.png" alt="Portrait of Tsalist Agna" loading="eager" /></div><span className="hero-spark" aria-hidden="true">✳</span><div className="hero-side-note">THOUGHTFUL BY DESIGN · HANDS ON BY NATURE</div>
    </section>
    <section className="site-shell intro-strip" aria-label="How I work"><span>01 / FIND THE REAL PROBLEM</span><span>02 / MAKE CLEAR DECISIONS</span><span>03 / DESIGN TO EXECUTION</span></section>
    <section id="selected" className="site-shell section-space"><SectionHeader index="01" eyebrow="SELECTED WORK" title={<>Products I’ve<br />worked on.</>} />
      <div className="project-grid">{projects.map((p,i) => <ProjectPreview key={p.slug} project={p} index={i} featured={i === 0} />)}</div>
      <div className="mt-12"><Link className="text-link" to="/work">See the project index ↗</Link></div>
    </section>
    <section id="approach" className="approach-band"><div className="site-shell section-space"><SectionHeader index="02" eyebrow="HOW I WORK" title={<>From question<br />to something useful.</>} /><div className="approach-grid">
      <div><span className="approach-number">01</span><h3>Understand the why.</h3><p>Research, user needs, and the actual problem come before polished screens.</p></div>
      <div><span className="approach-number">02</span><h3>Choose what matters.</h3><p>Think through the journey, priorities, and constraints that shape a product.</p></div>
      <div><span className="approach-number">03</span><h3>Make it buildable.</h3><p>Prototype, collaborate, and use technical understanding to move from design toward implementation.</p></div>
    </div></div></section>
    <section id="about" className="site-shell section-space about-grid"><div><span className="eyebrow">03 / A LITTLE ABOUT ME</span><h2 className="font-display mt-5 text-5xl leading-[1.04] font-medium tracking-tight md:text-7xl">Curious about<br />the whole thing<span className="text-deep-accent">.</span></h2></div><div className="about-copy"><p>Hi, I’m Tsalist Agna, or Nana. I work across product design, project management, and development. I like understanding what people need, deciding what matters most, and seeing how an idea works in the real world.</p><p>Knowing how products are built helps me prototype, collaborate with developers, and make design decisions with implementation in mind.</p><Link to="/work" className="text-link">See the product work ↗</Link></div></section>
    <section className="site-shell capabilities"><div className="capability-top"><span className="eyebrow">04 / CAPABILITIES</span><span>Design, coordination, and an understanding of the build.</span></div><div className="capability-grid"><div><h3>Product &amp; UI/UX Design</h3><p>Understanding problems, mapping flows, and designing clear interfaces for apps, games, and websites.</p></div><div><h3>Project Management</h3><p>Organizing tasks, priorities, and collaboration from idea toward execution.</p></div><div><h3>Technical Implementation</h3><p>Prototyping and building with an awareness of feasibility and development constraints.</p></div></div><div className="tools-line"><span className="eyebrow">MY STACK</span><span>Project Manager · Figma &amp; Sketch · SwiftUI · React · JavaScript · WordPress</span></div></section>
  </>
}

function Listing() {
  return <main className="site-shell"><div className="listing-hero"><span className="eyebrow">PORTFOLIO / PRODUCT WORK</span><h1 className="font-display max-w-5xl text-6xl leading-[0.98] font-medium tracking-tight md:text-8xl">Products, people<br /><em className="font-normal text-deep-accent">& the process.</em></h1><p className="max-w-xl text-lg text-ink-muted">Apps, games, and websites shaped through research, product design, project management, and implementation.</p>
      <div className="listing-stats"><div><strong>{projects.length}</strong><span>Projects</span></div><div><strong>3+</strong><span>Years Designing</span></div><div><strong>100+</strong><span>Screens Designed</span></div></div></div>
    <section className="section-space pt-0"><SectionHeader index="01" eyebrow="INDEX" title="Product case studies" /><div className="project-grid">{projects.map((p,i) => <ProjectPreview key={p.slug} project={p} index={i} featured={i === 0} />)}</div></section>
  </main>
}

function CaseStudy() {
  const { slug } = useParams()
  const study = caseStudies[slug]
  const project = projects.find(p => p.slug === slug)
  if (!study) return <main className="site-shell py-32"><h1 className="font-display text-6xl">Project not found.</h1><Link className="text-link mt-8 inline-block" to="/work">Back to work ↗</Link></main>
  const related = study.related.filter(p => projects.some(item => item.slug === p.slug) && p.slug !== slug)
  return <main className="site-shell"><div className="case-header"><Link to="/work" className="back-link">← Back to product work</Link><div className="case-heading"><span className="eyebrow">CASE STUDY / {project?.label || project?.category}</span><h1 className="font-display text-6xl leading-[1.02] font-medium tracking-tight md:text-8xl">{study.title}</h1><span className="case-star" aria-hidden="true">✳</span></div></div>
    <div className="case-layout"><aside className="case-sidebar" aria-label="Project information"><span className="eyebrow sidebar-heading">THE DETAILS</span>{study.metadata.map((item,i) => <div className="meta-group" key={`${item.label}-${i}`}><span className="meta-label">{item.label}</span>{item.value && <div className="meta-value">{item.value}</div>}{item.tags.length > 0 && <div className="tag-list">{item.tags.map((tag,j) => <span key={j} className="tag">{tag}</span>)}</div>}{item.links.map((link,j) => <a key={j} className="text-link block mt-2" href={link.href} target="_blank" rel="noreferrer">{link.label || 'View project'} ↗</a>)}</div>)}</aside><article className="min-w-0"><RichContent slug={slug} /></article></div>
    {related.length > 0 && <section className="section-space border-t border-line"><SectionHeader index="→" eyebrow="KEEP EXPLORING" title="Other Projects" /><p className="-mt-8 mb-8 text-ink-muted">Explore more selected works and product case studies.</p><div className="related-grid">{related.map(p => <Link to={`/work/${p.slug}`} key={p.slug} className="related-card"><span className="eyebrow">{p.tags.join(' / ')}</span><h3 className="font-display mt-6 text-3xl font-medium">{p.title} <span aria-hidden="true">↗</span></h3><p className="mt-3 text-ink-muted">{p.description}</p><span className="text-link mt-8 inline-block">View Case Study ↗</span></Link>)}</div></section>}
  </main>
}

export default function App() {
  return <><a className="skip-link" href="#main">Skip to content</a><ScrollManager /><Navigation /><div id="main"><Routes><Route path="/" element={<Home />} /><Route path="/work" element={<Listing />} /><Route path="/work/:slug" element={<CaseStudy />} /><Route path="*" element={<main className="site-shell py-32"><h1 className="font-display text-6xl">Page not found.</h1><Link className="text-link mt-8 inline-block" to="/">Back home ↗</Link></main>} /></Routes></div><Footer /></>
}
