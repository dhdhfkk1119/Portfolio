import { useEffect, useState } from 'react'
import profile from '../assets/profile/profile.jpg'

const infoItems = [
  { label: '이름', value: '조정우' },
  { label: '생년월일', value: '99.04.08' },
  { label: '위치', value: '부산시 사하구' },
  { label: '연락처', value: '010-5207-6426' },
  { label: '이메일', value: 'whwhwjddn123@gmail.com' },
  { label: '학력', value: '동의대학교 (응용소프트웨어학과)' },
]

export default function IntroPopup({ open, onClose }) {
  const [dontShowAgain, setDontShowAgain] = useState(false)

  useEffect(() => {
    if (!open) return
    function onKeyDown(e) {
      if (e.key === 'Escape') handleClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  })

  if (!open) return null

  function handleClose() {
    if (dontShowAgain) {
      localStorage.setItem('jjw-intro-popup-dismissed', 'true')
    }
    onClose()
  }

  return (
    <div className="intro-popup-overlay" onClick={handleClose}>
      <div className="intro-popup" onClick={(e) => e.stopPropagation()}>
        <button className="intro-popup-close" onClick={handleClose} aria-label="닫기">×</button>
        <div className="intro-popup-body">
          <div className="intro-popup-photo">
            <img src={profile} alt="조정우 프로필 사진" />
          </div>
          <div className="intro-popup-info">
            <h3 className="intro-popup-title">안녕하세요, 조정우입니다</h3>
            <ul className="intro-popup-list">
              {infoItems.map((item) => (
                <li key={item.label}>
                  <span className="intro-popup-label">{item.label}</span>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <h4 className="intro-popup-summary-title">간단한 자기소개</h4>
        <p className="intro-popup-summary">
          고교 웹디자인 기능부에서 개발을 시작해 3년간 프론트엔드·백엔드 실무를 경험하며 지방 기능경기대회 장려상을 수상했습니다.
          이후 대학에서 알고리즘·데이터베이스 등을 체계적으로 학습하고 그린컴퓨터아카데미를 통해 코딩에 대한 이해를 한층 심화시켰습니다.
          현재는 비테크에서 풀스택 개발자로 근무하며, 프론트엔드와 백엔드를 아우르며 사용자에게 실질적인 가치를 전하는 개발자로 성장해 나가고 있습니다.
        </p>
        <label className="intro-popup-checkbox">
          <input
            type="checkbox"
            checked={dontShowAgain}
            onChange={(e) => setDontShowAgain(e.target.checked)}
          />
          더 이상 보지 않기
        </label>
      </div>
    </div>
  )
}
