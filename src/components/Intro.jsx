const infoItems = [
  {
    icon: 'https://github.com/user-attachments/assets/e4ff547a-3d59-41de-b977-eb74b9f658b6',
    label: '이름',
    value: '조정우',
  },
  {
    icon: 'https://github.com/user-attachments/assets/f8df5d2b-09ca-4513-a8dc-892c269d9026',
    label: '생년월일',
    value: '99.04.08',
  },
  {
    icon: 'https://github.com/user-attachments/assets/3a84cf8f-514d-4e55-a6cd-8424c3e2a609',
    label: '위치',
    value: '부산시 사하구',
  },
  {
    icon: 'https://github.com/user-attachments/assets/d3304b69-691c-4baf-b542-20d3fa13a79b',
    label: '연락처',
    value: '010-5207-6426',
  },
  {
    icon: 'https://github.com/user-attachments/assets/33a2bbb0-f4e9-4cb7-8de8-baa12dccd151',
    label: '이메일',
    value: 'whwhwjddn123@gmail.com',
  },
  {
    icon: 'https://github.com/user-attachments/assets/6a7c4ea4-f16a-4d64-8aac-d2a2a84b7f69',
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
            <img src="https://github.com/user-attachments/assets/0dd52c45-52a5-4781-84b7-771d40c62e83" alt="" width="40px" />
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
