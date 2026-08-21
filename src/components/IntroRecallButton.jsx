import { useState } from 'react'
import logo from '../assets/logo/logo.png'

export default function IntroRecallButton({ onClick }) {
  const [hover, setHover] = useState(false)

  return (
    <div
      className="intro-recall"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={`intro-recall-bubble${hover ? ' visible' : ''}`}>자기소개 다시보기</div>
      <button className="intro-recall-btn" onClick={onClick} aria-label="자기소개 다시보기">
        <img src={logo} alt="" />
      </button>
    </div>
  )
}
