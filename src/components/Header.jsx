import { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className={scrolled ? 'scroll' : ''}>
      <div className="header">
        <button className="logo" onClick={scrollToTop}>JJW Portfolio</button>
        <nav className="menu">
          <a href="#intro">소개</a>
          <a href="#languages">언어</a>
          <a href="#projects">프로젝트</a>
          <a href="#career">캐리어</a>
        </nav>
      </div>
    </header>
  )
}
