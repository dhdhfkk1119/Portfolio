export default function Footer() {
  return (
    <section id="footer">
      <div className="footer">
        <div className="footer-wrap">
          <a href="https://github.com/dhdhfkk1119">
            <div>
              <img
                src="https://github.com/user-attachments/assets/fd37533d-9b2a-4358-95be-3e1cb590bd76"
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
                src="https://github.com/user-attachments/assets/db437a9f-d376-4202-9bfa-cfa0f4da73ad"
                alt=""
                width="80px"
                className="footer-wrap-img velog"
              />
            </div>
            <div className="footer-wrap-a">[Vlog] 개발 및 공부 블로그</div>
          </a>
        </div>
        <div className="footer-copyright">
          <span>© 2025. JO JOUNG WOO. All rights reserved.</span>
        </div>
      </div>
    </section>
  )
}
