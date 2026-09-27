import { useState } from 'react'

export default function Media({ src, alt, className = '', loading = 'lazy' }) {
  const [failed, setFailed] = useState(false)
  if (!src || failed) return <div className={`media-placeholder ${className}`} role="img" aria-label={alt || 'Project image unavailable'}><span className="media-placeholder-mark" aria-hidden="true">✳</span><span>{alt || 'Project visual'}</span></div>
  return <img src={src} alt={alt || ''} className={className} loading={loading} onError={() => setFailed(true)} />
}
