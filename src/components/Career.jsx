import bitechLogo from '../assets/career/betech.png'

const careers = [
  {
    company: '비테크',
    period: '2025.12.08 ~ 재직중',
    href: 'https://home.bestever.tech/',
    logo: bitechLogo,
  },
]

export default function Career() {
  return (
    <section id="career">
      <div className="section-wrap">
        <div className="intro-s1">
          <p className="h3-img">
            <img src="https://github.com/user-attachments/assets/07616636-2742-4f71-b3a3-fe44736a1195" alt="" width="40px" />
          </p>
          <h3 className="intro-h3 career-h3">캐리어</h3>
        </div>
        <div className="intor-s2">
          <div className="career-wrap footer-wrap">
            {careers.map((career) => (
              <a href={career.href} target="_blank" rel="noreferrer" key={career.company}>
                <div>
                  <img src={career.logo} alt="" width="80px" className="footer-wrap-img" />
                </div>
                <div className="footer-wrap-a">{career.company}</div>
                <div className="footer-wrap-p"><span>{career.period}</span></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
