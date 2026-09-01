import programmingIcon from "../assets/icon/programming.png";
import books2Icon from "../assets/icon/books.png";
import bagIcon from "../assets/icon/bag.png";

const languageGroups = [
  {
    icon: "https://cdg-portfolio.com/_next/static/media/language.112e0b13.svg",
    title: "언어",
    items: [
      {
        cls: "java",
        src: "https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white",
      },
      {
        cls: "dart",
        src: "https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=dart&logoColor=white",
      },
      {
        cls: "php",
        src: "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white",
      },
      {
        cls: "html",
        src: "https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
      },
      {
        cls: "js",
        src: "https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
      },
      {
        cls: "css",
        src: "https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white",
      },
      {
        cls: "react",
        src: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
      },
      {
        cls: "nextjs",
        src: "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white",
      },
    ],
  },
  {
    icon: books2Icon,
    title: "프레임워크",
    items: [
      {
        cls: "spring",
        src: "https://img.shields.io/badge/SpringBoot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white",
      },
      {
        cls: "flutter",
        src: "https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white",
      },
    ],
  },
  {
    icon: "https://cdg-portfolio.com/_next/static/media/dev-ops.bba7bfe0.svg",
    title: "데이터베이스",
    items: [
      {
        cls: "mysql",
        src: "https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white",
      },
      {
        cls: "mariadb",
        src: "https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white",
      },
      {
        cls: "redis",
        src: "https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white",
      },
      {
        cls: "h2",
        src: "https://img.shields.io/badge/H2%20Database-003B57?style=for-the-badge&logo=h2&logoColor=white",
      },
    ],
  },
  {
    icon: bagIcon,
    title: "개발프로그램",
    items: [
      {
        cls: "vscode",
        src: "https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white",
      },
      {
        cls: "sublimetext",
        src: "https://img.shields.io/badge/SublimeText-FF9800?style=for-the-badge&logo=sublimetext&logoColor=white",
      },
      {
        cls: "intellij",
        src: "https://img.shields.io/badge/IntelliJIDEA-000000?style=for-the-badge&logo=intellijidea&logoColor=white",
      },
      {
        cls: "eclipse",
        src: "https://img.shields.io/badge/Eclipse-2C2255?style=for-the-badge&logo=eclipse&logoColor=white",
      },
    ],
  },
];

export default function Languages() {
  return (
    <section id="languages">
      <div className="section-wrap">
        <div className="intro-s1">
          <p className="h3-img">
            <img src={programmingIcon} alt="" width="40px" />
          </p>
          <h3 className="intro-h3 languages-h3">스킬</h3>
        </div>
        <div className="intor-s2 languages">
          {languageGroups.map((group) => (
            <div className="languages-wrap" key={group.title}>
              <div className="languages-wrap-h1">
                <img
                  alt="Language 아이콘"
                  loading="lazy"
                  width="32"
                  height="32"
                  decoding="async"
                  src={group.icon}
                />
                <span>{group.title}</span>
              </div>
              <ul className="languages-wrap-ul">
                {group.items.map((item) => (
                  <li key={item.cls}>
                    <img
                      className={`lan-img ${item.cls}`}
                      src={item.src}
                      alt=""
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
