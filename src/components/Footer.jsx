import { Link } from 'react-router-dom'

export default function Footer() {
  return <footer id="contact" className="site-shell pt-20 pb-8 md:pt-28">
    <div className="footer-panel"><div className="eyebrow text-white/65">OPEN TO A CONVERSATION</div>
      <h2 className="font-display text-5xl leading-[1.02] font-medium tracking-tight md:text-7xl">Have an idea?<br /><em className="font-normal">Let’s build it well.</em></h2>
      <p className="max-w-lg text-white/70">Let’s build something amazing together.</p>
      <a href="mailto:tsalistagna29@gmail.com" className="pill-button pill-light">Get in touch <span aria-hidden="true">↗</span></a>
      <span className="footer-star" aria-hidden="true">✳</span>
    </div>
    <div className="flex flex-wrap items-center justify-between gap-6 pt-8 text-sm text-ink-muted">
      <Link to="/" className="font-display text-xl font-semibold text-ink">nana.</Link>
      <div className="flex flex-wrap gap-5"><a href="https://www.linkedin.com/in/baiq-annisa-tsalist-agna/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/TsalistAgna" target="_blank" rel="noreferrer">GitHub ↗</a></div>
      <span>Made by Tsalist Agna</span>
    </div>
  </footer>
}
