import accountIcon from '../assets/icon/account.png'
import nameIcon from '../assets/icon/name.png'
import calendarIcon from '../assets/icon/calendar.png'
import locationIcon from '../assets/icon/location.png'
import phoneIcon from '../assets/icon/phone-call.png'
import emailIcon from '../assets/icon/email.png'
import graduationIcon from '../assets/icon/graduation-hat.png'

const infoItems = [
  {
    icon: nameIcon,
    label: '이름',
    value: '조정우',
  },
  {
    icon: calendarIcon,
    label: '생년월일',
    value: '99.04.08',
  },
  {
    icon: locationIcon,
    label: '위치',
    value: '부산시 사하구',
  },
  {
    icon: phoneIcon,
    label: '연락처',
    value: '010-5207-6426',
  },
  {
    icon: emailIcon,
    label: '이메일',
    value: 'whwhwjddn123@gmail.com',
  },
  {
    icon: graduationIcon,
    label: '학력',
    value: <>동의대학교<br />(응용소프트웨어학과)</>,
  },
]

export default function Intro() {
  return (
    <section id="intro">
      <div className="intro-wrap section-wrap">
        <div className="intro-s1">
          <p className="h3-img">
            <img src={accountIcon} alt="" width="40px" />
          </p>
          <h3 className="intro-h3">소개</h3>
        </div>
        <div className="intro-s2">
          {infoItems.map((item) => (
            <div className="intro-s2-div" key={item.label}>
              <div className="intro-s2-div-wrap">
                <div className="intro-s2-div-img">
                  <img src={item.icon} alt="" />
                </div>
                <div>
                  <label className="intro-s2-div-wrap-label">{item.label}</label>
                  <div className="intro-s2-div-wrap-font">{item.value}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
