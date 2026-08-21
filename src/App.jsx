import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Masthead from './components/Masthead.jsx'
import Intro from './components/Intro.jsx'
import Languages from './components/Languages.jsx'
import Projects from './components/Projects.jsx'
import Career from './components/Career.jsx'
import Footer from './components/Footer.jsx'
import TopButton from './components/TopButton.jsx'
import IntroPopup from './components/IntroPopup.jsx'
import IntroRecallButton from './components/IntroRecallButton.jsx'

export default function App() {
  const [introOpen, setIntroOpen] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem('jjw-intro-popup-dismissed') === 'true'
    if (!dismissed) setIntroOpen(true)
  }, [])

  return (
    <>
      <Header />
      <Masthead />
      <Intro />
      <Languages />
      <Projects />
      <Career />
      <Footer />
      <TopButton />
      <IntroRecallButton onClick={() => setIntroOpen(true)} />
      <IntroPopup open={introOpen} onClose={() => setIntroOpen(false)} />
    </>
  )
}
