import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Media from './Media.jsx'

const contents = import.meta.glob('../content/*.html', { query: '?raw', import: 'default' })
const getSlug = href => href?.match(/^detail_(.+)\.html(?:#.*)?$/i)?.[1]?.toLowerCase()

function renderNode(node, key) {
  if (node.nodeType === Node.TEXT_NODE) return node.textContent
  if (node.nodeType !== Node.ELEMENT_NODE) return null
  const tag = node.tagName.toLowerCase()
  if (tag === 'script' || tag === 'style') return null
  const children = Array.from(node.childNodes).map((child, index) => renderNode(child, index))
  const props = { key }
  for (const { name, value } of node.attributes) {
    if (name === 'class') props.className = value
    else if (name === 'for') props.htmlFor = value
    else if (name === 'tabindex') props.tabIndex = Number(value)
    else if (name === 'style' || name.startsWith('on')) continue
    else props[name] = value
  }
  if (tag === 'img') return <Media key={key} src={props.src?.startsWith('image/') ? `/${props.src}` : props.src} alt={props.alt || ''} className={props.className || ''} />
  if (tag === 'a') {
    const slug = getSlug(props.href)
    const body = children.length ? children : props.href
    if (slug) return <Link key={key} to={`/work/${slug}`} className={props.className}>{body}</Link>
    if (props.href?.startsWith('http')) return <a key={key} href={props.href} target="_blank" rel="noreferrer" className={props.className}>{body}</a>
    return <a key={key} href={props.href} className={props.className}>{body}</a>
  }
  if (tag === 'h1') return null // The page header owns the sole h1.
  return React.createElement(tag, props, ...children)
}

export default function RichContent({ slug }) {
  const [source, setSource] = useState('')
  useEffect(() => {
    let active = true
    setSource('')
    contents[`../content/${slug}.html`]?.().then(html => { if (active) setSource(html) })
    return () => { active = false }
  }, [slug])
  const nodes = useMemo(() => {
    if (!source) return []
    const doc = new DOMParser().parseFromString(`<main>${source}</main>`, 'text/html')
    return Array.from(doc.body.firstElementChild.childNodes).map((node, i) => renderNode(node, i))
  }, [source])
  return <div className={`story-content ${slug === 'rawrndry' ? 'rawrndry-story' : ''} ${slug === 'bside' ? 'bside-story' : ''}`}>{nodes}</div>
}
