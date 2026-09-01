import studyIcon from "../assets/icon/study.png";
import githubIcon from "../assets/icon/github.png";
import velogIcon from "../assets/icon/images.jpg";

export default function PersonalStudy() {
  return (
    <section id="personal-study">
      <div className="section-wrap">
        <div className="intro-s1">
          <p className="h3-img">
            <img src={studyIcon} alt="" width="40px" />
          </p>
          <h3 className="intro-h3 personal-study-h3">개인 공부</h3>
        </div>
        <div className="intor-s2">
          <div className="footer-wrap">
            <a href="https://github.com/dhdhfkk1119">
              <div>
                <img
                  src={githubIcon}
                  alt=""
                  width="80px"
                  className="footer-wrap-img"
                />
              </div>
              <div className="footer-wrap-a">[깃허브] 프로젝트 사이트</div>
            </a>
            <a href="https://velog.io/@dhdhfkk1119/posts">
              <div>
                <img
                  src={velogIcon}
                  alt=""
                  width="80px"
                  className="footer-wrap-img velog"
                />
              </div>
              <div className="footer-wrap-a">[Vlog] 개발 및 공부 블로그</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
