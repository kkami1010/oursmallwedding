/**
 * Pastel Dream Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "규배",
    nameEn: "Groom",
    father: "최돈화",
    mother: "이연숙",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "현영",
    nameEn: "Bride",
    father: "김주형",
    mother: "김명희",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-10-10",
    time: "12:00",
    venue: "엔젤스데이",
    hall: "전체 대관",
    address: "경기 김포시 김포한강4로 113 신한프라자 12층",
    tel: "031-985-4005"
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "평생을 함께하고 싶은 사람을 만나\n새로운 시작을 하게 되었습니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다.\n\n※ 축하 화환은\n정중히 사양하오니 너른 양해 부탁드립니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "어느덧 4년이라는 시간을 함께했습니다.\n\n사진 찍히는 것도,\n많은 사람들 앞에 서는 것도\n쑥스러운 저희는\n결혼식 없이 둘만의 시작을 생각하기도 했습니다.\n\n하지만\n지금까지 저희를 아껴주시고\n응원해 주신 소중한 분들께\n감사한 마음을 전하고 싶어\n작지만 따뜻한 결혼식을 준비하게 되었습니다.\n\n함께해 주시는 모든 분들의 축복을\n마음 깊이 간직하며,\n앞으로도 서로를 아끼고 사랑하며 살아가겠습니다."
  },

  // ── 오시는 길 ──
  mapLinks: {
    kakao: "https://kko.to/oTh-2yKunm",
    naver: "https://naver.me/xtgp729t"
  },

  // RSVP: set enabled to true after adding your Google/Naver form URL.
  rsvp: {
    enabled: true,
    title: "참석 여부",
    description: "원활한 식사 준비를 위해\n참석 여부와 식사 인원을\n알려주시면 감사하겠습니다.",
    buttonLabel: "참석 여부 전달하기",
    url: "https://naver.me/GkIyD2D8"
  },

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "최규배", bank: "국민은행", number: "000-000-000000" },
      { role: "아버지", name: "최돈화", bank: "신한은행", number: "000-000-000000" },
      { role: "어머니", name: "이연숙", bank: "우리은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "김현영", bank: "국민은행", number: "000-000-000000" },
      { role: "아버지", name: "김주형", bank: "기업은행", number: "000-000-000000" },
      { role: "어머니", name: "김명희", bank: "농협은행", number: "000-000-000000" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "규배 ♥ 현영 결혼합니다",
    description: "2026년 10월 10일 토, 소중한 분들을 초대합니다."
  }
};
