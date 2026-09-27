import { Link } from 'react-router-dom'
import Media from './Media.jsx'

export default function ProjectPreview({ project, index = 0, featured = false }) {
  return <Link to={`/work/${project.slug}`} className={`project-preview group ${featured ? 'project-preview-featured' : ''}`}>
    <div className={`project-art project-art-${index % 4}`}><div className="project-art-inner"><Media src={project.image} alt={`${project.title} project preview`} /></div><span className="project-count">{String(index + 1).padStart(2, '0')} / {project.type || project.category}</span></div>
    <div className="project-info"><div><p className="eyebrow text-ink-muted">{project.label}</p><h3 className="font-display text-3xl leading-tight font-medium tracking-tight md:text-4xl">{project.title}</h3><p className="mt-3 max-w-xl text-ink-muted">{project.description}</p></div><span className="project-arrow" aria-hidden="true">↗</span></div>
  </Link>
}
