import { useEffect } from 'react'

export default function ProjectDetailPopup({ project, slideIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!project) return
    function onKeyDown(e) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [project, onClose, onPrev, onNext])

  if (!project) return null

  const slides = project.detail.slides
  const slide = slides[slideIndex]

  return (
    <div className="project-popup-overlay" onClick={onClose}>
      <div className="project-popup" onClick={(e) => e.stopPropagation()}>
        <button className="project-popup-close" onClick={onClose} aria-label="닫기">×</button>
        <h3 className="project-popup-title">{project.title}</h3>

        <div className="project-popup-slide-area">
          {slides.length > 1 && (
            <button className="project-popup-nav prev" onClick={onPrev} aria-label="이전">‹</button>
          )}

          <div className="project-popup-slide">
            {slide.type === 'image' && (
              <img className="project-popup-image" src={slide.src} alt={project.title} />
            )}
            {slide.type === 'info' && (
              <div className="project-popup-info">
                <h4 className="project-popup-heading">{slide.heading}</h4>
                {slide.quote && (
                  <blockquote className="project-popup-quote">{slide.quote}</blockquote>
                )}
                {slide.rows && (
                  <dl className="project-popup-rows">
                    {slide.rows.map(([label, value]) => (
                      <div className="project-popup-row" key={label}>
                        <dt>{label}</dt>
                        <dd>{value}</dd>
                      </div>
                    ))}
                  </dl>
                )}
                {slide.bullets && (
                  <ul className="project-popup-bullets">
                    {slide.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
                {slide.cta && (
                  <a
                    className="project-popup-cta"
                    href={slide.cta.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {slide.cta.label}
                  </a>
                )}
              </div>
            )}
          </div>

          {slides.length > 1 && (
            <button className="project-popup-nav next" onClick={onNext} aria-label="다음">›</button>
          )}
        </div>

        {slides.length > 1 && (
          <div className="project-popup-dots">
            {slides.map((_, i) => (
              <span key={i} className={`project-popup-dot${i === slideIndex ? ' active' : ''}`} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
