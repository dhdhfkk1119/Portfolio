import { useState } from 'react'
import analysisIcon from '../assets/icon/analysis.png'
import markitCover from '../assets/project/markit_place/list-1.png'
import takeBreathCover from '../assets/project/take_breath/list-1.png'
import sellierList1 from '../assets/project/sellier/list-1.png'
import sellierList2 from '../assets/project/sellier/list-2.png'
import sellierList3 from '../assets/project/sellier/list-3.png'
import sellierList4 from '../assets/project/sellier/list-4.png'
import sellierList5 from '../assets/project/sellier/list-5.png'
import ProjectDetailPopup from './ProjectDetailPopup.jsx'

const badge = (label, color, logo, logoColor = 'white') =>
  `https://img.shields.io/badge/${label}-${color}?style=for-the-badge&logo=${logo}&logoColor=${logoColor}`

const projects = [
  {
    title: '셀리에(Sellier)',
    period: '비테크 회사 개발',
    heading: '중고 명품의 매입·감정·판매 전 과정을 통합 운영하는 프리미엄 리세일 플랫폼',
    bullets: [
      '실시간 시세 그래프와 실거래가 기반 가격 정보 제공',
      '위탁판매 / 즉시판매 선택 및 역제안(경매식 입찰) 시스템',
      '셀리에 랩 정품 감정 리포트 및 상세 컨디션 진단',
      '상품·모델·브랜드별 관심상품(찜)과 피드 팔로우 기능',
      '구매 리뷰 작성 및 마일리지 적립',
      '프리미엄 발렉스 배송, 안전 배송, 부티크 픽업 지원',
    ],
    links: [],
    skills: [
      badge('Java', '007396', 'java'),
      badge('SpringBoot', '6DB33F', 'springboot'),
      badge('MySQL', '4479A1', 'mysql'),
      badge('React', '20232A', 'react', '61DAFB'),
      badge('Next.js', '000000', 'nextdotjs'),
    ],
    companyMade: true,
    hidden: false,
    detail: {
      slides: [
        { type: 'image', src: sellierList1 },
        { type: 'image', src: sellierList2 },
        { type: 'image', src: sellierList3 },
        { type: 'image', src: sellierList4 },
        { type: 'image', src: sellierList5 },
      ],
    },
  },
  {
    title: 'takeBreath(한숨)',
    period: '2025.10.22 ~ 2025.11.11 (5인 팀 프로젝트 · 팀장)',
    heading: '익명 커뮤니티와 전문 상담 연계로 직장 내 괴롭힘 회복을 돕는 멘탈 케어 플랫폼',
    bullets: [
      '익명 기반 커뮤니티와 전문 상담사 매칭으로 심리적 회복 지원',
      'WebSocket·STOMP 기반 1:1 실시간 상담 채팅',
      '기록실 작성(이미지·녹음 첨부) 및 PDF 다운로드 기능',
      '포트원 연동 결제·환불, 포인트 히스토리 관리',
      '커뮤니티 게시물 신고 시 단계별 정지 처리',
      '어드민 페이지에서 상담사 승인·신고 검수·통계 대시보드 관리',
    ],
    links: [
      { label: '전체 코드 파일 소개 FrontEnd', text: '[Front Flutter]', href: 'https://github.com/dhdhfkk1119/take_breath_front.git' },
      { label: '전체 코드 파일 소개 BackServer', text: '[Back SpringBoot]', href: 'https://github.com/dhdhfkk1119/take_breath_server.git' },
    ],
    moreInfoHref: 'https://github.com/dhdhfkk1119/take_breath_front.git',
    skills: [
      badge('SpringBoot', '6DB33F', 'springboot'),
      badge('Flutter', '02569B', 'flutter'),
      badge('Dart', '0175C2', 'dart'),
      badge('Java', '007396', 'java'),
      badge('MySQL', '4479A1', 'mysql'),
    ],
    hidden: false,
    detail: {
      slides: [
        { type: 'image', src: takeBreathCover },
        {
          type: 'info',
          heading: '선정 배경',
          bullets: [
            '직장 내 대인관계, 업무 스트레스, 부당 대우 등으로 심리적 어려움을 겪어도 생계 때문에 직장을 떠나지 못하고 혼자 감내하는 경우가 많음',
            '가족·지인에게도 털어놓기 어려워 상담을 미루다 우울감·번아웃·업무 능력 저하로 이어지는 문제 인식',
            '익명 공간에서 경험을 나누고, 동시에 전문 상담사와 대화할 수 있는 신뢰 기반 멘탈 케어 앱으로 takeBreath를 기획',
          ],
        },
        {
          type: 'info',
          heading: '프로젝트 개요',
          rows: [
            ['프로젝트', '한숨(Take_Breath)'],
            ['설명', '익명 커뮤니티 + 전문 상담 연계로 직장 내 괴롭힘 회복과 안전한 경험 공유를 지원하는 신뢰 기반 앱'],
            ['개발기간', '2025.10.22 ~ 2025.11.11'],
            ['개발인원', '5인 팀 프로젝트 (백엔드 2 · 프론트 1 · 풀스택 2) — 팀장'],
          ],
        },
        {
          type: 'info',
          heading: '개발 환경',
          bullets: [
            '백엔드 — Java 21, SpringBoot, JPA(ORM), MySQL 8.0',
            '프론트엔드 — Dart, Flutter 3.27.4 SDK, RiverPod(2.3.6) 상태관리, freezed 모델',
            '빌드/의존성 — Gradle(Groovy), pubspec.yaml',
            '협업 도구 — Git, Jira',
          ],
        },
        {
          type: 'info',
          heading: '주요 기능',
          bullets: [
            '회원가입 — 아이디/이메일 가입, 이메일 인증(Google SMTP), 약관 동의',
            '로그인 — 일반/이메일 로그인 + 소셜 로그인(Google Firebase·네이버)',
            '실시간 채팅 — WebSocket·STOMP 기반 1:1 채팅',
            '기록실 — 이미지·녹음 첨부 작성, 수정/삭제, PDF 다운로드',
            '커뮤니티 게시물 — 등록/수정/삭제, 신고 시 단계별 정지',
            '결제(포트원) — 포인트 충전/환불, 포인트 히스토리 관리',
            '웹 어드민 — 신고 검수, 상담사 승인, 시청각 자료(YouTube API), 통계 대시보드',
          ],
        },
        {
          type: 'info',
          heading: '실행 방법',
          bullets: [
            'server 레포 클론 후 IDE(IntelliJ, VSCode, Eclipse 등)에서 실행',
            '서버 구동 상태에서 Flutter 앱 실행',
          ],
        },
      ],
    },
  },
  {
    title: 'Markit_Place - [RestFul]',
    period: '2025.08/25 ~ 2025.09/26 (7인 팀 프로젝트)',
    heading: 'Ai 기술을 활용한 실시간 GPS 중고 거래 커뮤니티 플렛폼',
    bullets: [
      'BackServer SpringBoot 와 FrontFlutter 를 연동 해서 구현',
      '중고거래 상품 등록 및 커뮤니티 게시글 등록 수정및 삭제',
      'flutter 스크롤 페이징 처리 가능',
      '상품 및 게시물 좋아요 댓글 기능',
      '상품 정보로 1:1 채팅 기능 구현 채팅방에서 상품 결제하기(Toss Api)',
      '마이페이지 프로필 수정 구매내역 게시물 좋아요 등 관리 가능',
    ],
    links: [
      { label: '전체 코드 파일 소개 BackServer', text: '[Back SpringBoot]', href: 'https://github.com/dhdhfkk1119/market_place_server.git' },
      { label: '전체 코드 파일 소개 FrontEnd', text: '[Front Flutter]', href: 'https://github.com/dhdhfkk1119/markit_place_front' },
    ],
    skills: [
      badge('SpringBoot', '6DB33F', 'springboot'),
      badge('Flutter', '02569B', 'flutter'),
      badge('Dart', '0175C2', 'dart'),
      badge('Java', '007396', 'java'),
    ],
    hidden: false,
    moreInfoHref: 'https://github.com/dhdhfkk1119/markit_place_front',
    detail: {
      slides: [
        { type: 'image', src: markitCover },
        {
          type: 'info',
          heading: '선정 배경',
          quote: '"불필요한 물건에 새로운 가치를 부여하고, 이웃 간의 신뢰를 기반으로 한 소통 중심 거래 플랫폼을 만들자."',
          bullets: [
            '중고거래 플랫폼이 늘어나며 실시간 위치 기반 소통과 신뢰 있는 커뮤니티의 중요성이 커지는 추세',
            '기존 서비스의 한계 — 거래 안정성 부족, 신고·제재 시스템 미흡, 커뮤니티 기능 부재',
            'AI + GPS + 커뮤니티를 결합해 더 안전하고 신뢰성 있는 중고 거래 생태계를 목표로 개발',
            "'MarkIt' — GPS 기반 위치 표시·보상의 기술적 정체성",
            "'Place' — 단순 거래를 넘어 사람이 모이는 커뮤니티 공간, 위치 기반 소셜 커머스 생태계 지향",
          ],
        },
        {
          type: 'info',
          heading: '프로젝트 개요',
          rows: [
            ['프로젝트', 'Markit_Place'],
            ['설명', 'AI 기술을 활용한 실시간 GPS 중고 거래 커뮤니티 플랫폼'],
            ['개발기간', '2025.08.25 ~ 2025.09.26 (7인 팀 프로젝트)'],
            ['Front 환경', 'Dart · Flutter 3.27.4 · Gradle(Groovy) · pubspec.yaml'],
          ],
        },
        {
          type: 'info',
          heading: '주요 기능',
          bullets: [
            '회원가입 — 아이디/이메일 가입, 이메일 인증, 약관 동의',
            '로그인 — 일반/이메일 로그인 + 소셜 로그인(네이버·구글)',
            '실시간 채팅 — WebSocket·STOMP 기반 1:1 채팅',
            '상품 등록 — 등록/수정/삭제, 신고 시 정지 처리',
            '커뮤니티 게시물 — 등록/수정/삭제, 신고 시 작성 제한',
            '거래·유저 관리 — 구매 후기, 매너 평점, 칭찬하기',
            '웹 어드민 — 공지사항·QnA·신고 내역 관리',
          ],
        },
        {
          type: 'info',
          heading: '실행 방법',
          bullets: [
            'server 레포 클론 후 IDE(IntelliJ, VSCode, Eclipse 등)에서 실행',
            '서버 구동 상태에서 Flutter 앱 실행',
          ],
        },
      ],
    },
  },
  {
    title: 'SpringBoot_Cloud Rest - [CSR형식]',
    period: '2025.06/24 ~ 2025.07/07 (4인 팀 프로젝트)',
    heading: '온라인 구인/구직 플랫폼 (사람인 과 유사)',
    bullets: [
      'SSR 형식으로 만든 코드를 CSR 형식으로 다시 코드 작성',
      'AOP를 사용해서 로그인시 JWT토큰 있는지 유무 검사 및 전역 외예 처리',
      '일반 유저 및 기업 유저 회원 분리 로그인 상태 분리',
      '찜하기 기능 JSON를 사용해서 새로고침 없이 데이터 및 페이징 처리가능',
      '일반 유저 이력서 작성 및 등록 수정 입사지원하기',
      '기업 유저 공고 등록 및 입사지원 한 인원 이력서 열람 가능',
      '공고 등록시 스킬 태그랑 유저 이력서 스킬태그로 서로 비슷한 공고 매칭',
      '공고 좋아요 및 대표이력서 설정',
    ],
    links: [
      { label: '전체 코드 및 개발 환경 소개', text: '[깃허브]', href: 'https://github.com/sonjiyoon12/cloud_rest_project.git' },
    ],
    skills: [
      badge('SpringBoot', '6DB33F', 'springboot'),
      badge('Java', '007396', 'java'),
    ],
    hidden: false,
  },
  {
    title: 'SpringBoot_Join - [SSR형식]',
    period: '2025.06/24 ~ 2025.07/07 (4인 팀 프로젝트)',
    heading: '온라인 구인/구직 플랫폼 (사람인 과 유사)',
    bullets: [
      '일반 유저 및 기업 유저 회원 분리 로그인 상태 분리',
      'AOP를 사용해서 로그인시 세션 정보가 있는지 유무 검사 및 전역 외예 처리',
      '찜하기 기능 JSON를 사용해서 새로고침 없이 데이터 및 페이징 처리가능',
      '일반 유저 이력서 작성 및 등록 수정 입사지원하기',
      '기업 유저 공고 등록 및 입사지원 한 인원 이력서 열람 가능',
      '공고 등록시 스킬 태그랑 유저 이력서 스킬태그로 서로 비슷한 공고 매칭',
      '공고 좋아요 및 대표이력서 설정',
    ],
    links: [
      { label: '전체 코드 파일 및 시현 영상', text: '[깃허브]', href: 'https://github.com/dhdhfkk1119/mini_project_resume' },
    ],
    skills: [
      badge('SpringBoot', '6DB33F', 'springboot'),
      badge('JSON', '000000', 'json'),
      badge('HTML5', 'E34F26', 'html5'),
      badge('AJAX', '02569B', 'javascript'),
      badge('CSS3', '1572B6', 'css3'),
      badge('JavaScript', 'F7DF1E', 'javascript', 'black'),
    ],
    hidden: false,
  },
  {
    title: 'SpringBoot_OneS',
    period: '2024.04 ~ 2025.05 (1인 개인 프로젝트)',
    heading: '개인 개발의 역량을 늘리기 SNS 플랫폼 구축',
    bullets: [
      '기존의 쓰레드 , 트위터 와 유사한 기능을 구축',
      '찜하기 기능 JSON를 사용해서 새로고침 없이 데이터 처리가능',
      '기본적인 게시물 등록 및 댓글 , 삭제 가능함',
      '일반관리자 및 어드민 관리자를 구별(회원가입 유저 승인)',
      '어드민 페이지 일반유저 승인 및 계정삭제 , 게시물관리',
      '일반유저 페이지 게정탈퇴 및 회원정보 확인',
    ],
    links: [
      { label: '자세한 코드 설명', text: '벨로그', href: 'https://velog.io/@dhdhfkk1119/%EC%8A%A4%ED%94%84%EB%A7%81%EB%B6%80%ED%8A%B8-%EC%86%8C%EA%B0%9C%ED%8C%85-%EB%B0%8F-SNS-%EC%82%AC%EC%9D%B4%ED%8A%B8' },
      { label: '전체 코드 파일 및 시현 영상', text: '깃허브', href: 'https://github.com/dhdhfkk1119/OneS.git' },
    ],
    skills: [
      badge('SpringBoot', '6DB33F', 'springboot'),
      badge('JSON', '000000', 'json'),
      badge('HTML5', 'E34F26', 'html5'),
      badge('AJAX', '02569B', 'javascript'),
      badge('CSS3', '1572B6', 'css3'),
      badge('JavaScript', 'F7DF1E', 'javascript', 'black'),
    ],
    hidden: false,
  },
  {
    title: 'SpringBoot_DOGSHOP',
    period: '2024.03 ~ 2025.04 (1인 개인 프로젝트)',
    heading: '개인 개발의 역량을 늘리기 위해 애완용품 쇼핑몰 사이트 구축',
    bullets: [
      '기존의 쇼핑몰 사이트를 모방하여 유사하게 기능을 구현',
      'SpringBoot security를 사용해서 보안에 용이함',
      '찜하기 기능 JSON를 사용해서 새로고침 없이 데이터 처리가능',
      '기본적인 CRUD 기능 및 상품을 사고 등록 기능',
      '장바구니 및 관리자 , 일반 회원 구별',
    ],
    links: [
      { label: '자세한 코드 설명', text: '노션', href: 'https://www.notion.so/1afccc56b31e8013b325d0fb88095146?pvs=4' },
      { label: '전체 코드 파일 및 시현 영상', text: '[깃허브]', href: 'https://github.com/dhdhfkk1119/DOGSHOP.git' },
    ],
    skills: [
      badge('SpringBoot', '6DB33F', 'springboot'),
      badge('JSON', '000000', 'json'),
      badge('HTML5', 'E34F26', 'html5'),
      badge('AJAX', '02569B', 'javascript'),
      badge('CSS3', '1572B6', 'css3'),
      badge('JavaScript', 'F7DF1E', 'javascript', 'black'),
    ],
    hidden: true,
  },
  {
    title: 'PHP_WEB',
    period: '2024.10 ~ 2025.01 (1인 개인 프로젝트)',
    heading: '개인 개발의 역량을 늘리기 위해 쇼핑몰 사이트 구축',
    bullets: [
      '기존의 쇼핑몰 사이트를 모방하여 유사하게 기능을 구현',
      '찜하기 기능 Ajax를 사용해서 새로고침 없이 데이터 처리가능',
      '기본적인 CRUD 기능 및 상품을 사고 등록 기능',
      '장바구니 및 관리자 , 일반 회원 구별',
    ],
    links: [
      { label: '자세한 정보', text: 'https://github.com/dhdhfkk1119/PHP_web', href: 'https://github.com/dhdhfkk1119/PHP_web' },
    ],
    skills: [
      badge('PHP', '777BB4', 'php'),
      badge('MySQL', '4479A1', 'mysql'),
      badge('HTML5', 'E34F26', 'html5'),
      badge('AJAX', '02569B', 'javascript'),
      badge('CSS3', '1572B6', 'css3'),
      badge('JavaScript', 'F7DF1E', 'javascript', 'black'),
    ],
    hidden: true,
  },
  {
    title: 'Free_item',
    period: '2024.04 ~ 2024.05 (2인 팀 프로젝트)',
    heading: '서울시에 무료 장난감 대여 사이트의 정보를 담은 WEB',
    bullets: [
      '서울 각 시에서 무료로 대여해주는 장난감사이트의 정보를 제작한 웹 사이트에 담음',
      "Python의 패키지인 bs4 언어를 사용해서 실시간 크롤링 기능",
      '상품 클릭시 대여 하는 기존 서울시 사이트로 이동',
    ],
    links: [
      { label: '자세한 정보', text: 'https://github.com/dhdhfkk1119/Free_item.git', href: 'https://github.com/dhdhfkk1119/Free_item.git' },
    ],
    skills: [
      badge('Python', '3776AB', 'python'),
      badge('html5', 'E34F26', 'html5'),
      badge('BeautifulSoup', '8A2BE2', 'python'),
      badge('MySQL', '4479A1', 'mysql'),
    ],
    hidden: true,
  },
  {
    title: 'DEU_CHATBOT',
    period: '2023.09 ~ 2023.12(4인 팀 프로젝트)',
    heading: '대학생활중에 궁금한 것에 대한 질문에 답변을 해주는 챗봇',
    bullets: [
      '기존 다른 대학교의 챗봇 기능과 유사하며 반응형 웹 방식',
      '초기 화면은 자주 묻는 질문 9가지 정보를 제시 클릭시 정해진 답변 제공',
      '질문지 외에도 질문시 유사한 답변을 제시',
      '질문을 이해 못했거나 잘못된 질문에는 예외 처리 기능 및 답변',
    ],
    links: [
      { label: '자세한 정보', text: 'https://github.com/dhdhfkk1119/DEU_CHATBOT_DeuBuddy.git', href: 'https://github.com/dhdhfkk1119/DEU_CHATBOT_DeuBuddy.git' },
    ],
    skills: [
      badge('Python', '3776AB', 'python'),
      badge('HTML5', 'E34F26', 'html5'),
      badge('CSS3', '1572B6', 'css3'),
      badge('Jupyter', 'F37626', 'jupyter'),
    ],
    hidden: true,
  },
  {
    title: 'Web_deubook',
    period: '2022.09 ~ 2022.12 (4인 팀 프로젝트)',
    heading: '동의대학교에서 더이상 사용하지 않은 중고책을 판매',
    bullets: [
      '회원 가입 , 책 등록 및 판매 , 찜하기 , 좋아요 기능',
      '판매자 와 구매자 실시간 채팅 기능 DM과 기능이 유사.',
    ],
    links: [
      { label: '자세한 정보', text: 'https://github.com/dhdhfkk1119/web-deubook.git', href: 'https://github.com/dhdhfkk1119/web-deubook.git' },
    ],
    skills: [
      badge('PHP', '777BB4', 'php'),
      badge('MySQL', '4479A1', 'mysql'),
      badge('HTML5', 'E34F26', 'html5'),
      badge('AJAX', '02569B', 'javascript'),
      badge('CSS3', '1572B6', 'css3'),
      badge('JavaScript', 'F7DF1E', 'javascript', 'black'),
    ],
    hidden: true,
  },
]

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const [activeIndex, setActiveIndex] = useState(null)
  const [slideIndex, setSlideIndex] = useState(0)

  const activeProject = activeIndex === null ? null : projects[activeIndex]

  function closeDetail() {
    setActiveIndex(null)
  }
  function prevSlide() {
    if (!activeProject) return
    const total = activeProject.detail.slides.length
    setSlideIndex((i) => (i - 1 + total) % total)
  }
  function nextSlide() {
    if (!activeProject) return
    const total = activeProject.detail.slides.length
    setSlideIndex((i) => (i + 1) % total)
  }

  return (
    <section id="projects">
      <div className="section-wrap">
        <div className="intro-s1">
          <p className="h3-img">
            <img src={analysisIcon} alt="" width="45px" />
          </p>
          <h3 className="intro-h3">프로젝트</h3>
        </div>
        <div className="intor-s2 projects-wrap">
          {projects.map((project, index) => {
            const primaryHref = project.links[0]?.href
            const openPrimary = () => {
              if (project.detail) {
                setActiveIndex(index)
                setSlideIndex(0)
                return
              }
              if (primaryHref) window.open(primaryHref, '_blank', 'noopener,noreferrer')
            }
            return (
              <div
                className={`projects-wrap-ul${project.hidden && !showAll ? ' hidden' : ''}`}
                key={project.title}
                role="link"
                tabIndex={0}
                onClick={openPrimary}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    openPrimary()
                  }
                }}
              >
                <h4 className="projects-wrap-ul-h4">{project.title}</h4>
                <div className="projects-wrap-ul-h4-div">{project.period}</div>
                <div className="projects-wrap-ul-div">
                  <h5 className="projects-wrap-ul-h5">{project.heading}</h5>
                  <ul>
                    {project.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
                {project.links.map((link) => (
                  <div className="projects-wrap-link" key={link.href}>
                    <span>{link.label}</span>{' '}
                    <a href={link.href} onClick={(e) => e.stopPropagation()}>{link.text}</a>
                  </div>
                ))}
                <div className="projects-wrap-skills">
                  {project.skills.map((src, i) => (
                    <img key={i} src={src} alt="" />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
        {!showAll && (
          <div className="projects-wrap-more">
            <button id="showMoreBtn" onClick={() => setShowAll(true)}>더보기</button>
          </div>
        )}
      </div>
      <ProjectDetailPopup
        project={activeProject}
        slideIndex={slideIndex}
        onClose={closeDetail}
        onPrev={prevSlide}
        onNext={nextSlide}
      />
    </section>
  )
}
