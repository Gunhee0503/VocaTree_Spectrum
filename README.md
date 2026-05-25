# 보카트리 Spectrum · VOCA TREE SPECTRUM (PWA)

> 소리의 변화(P ↔ F)로 영어 단어 가족을 잇는 학습 웹앱 · Progressive Web App

보카트리 Essential과 같은 시리즈의 심화 교재입니다. Essential이 *어근 + 접두사* 분석을 다룬다면, Spectrum은 *음운 대응*(예: 게르만 가지의 F와 라틴 가지의 P는 같은 PIE 어근에서 갈라진 짝)을 통해 단어 가족을 잇는 방식으로 어휘를 확장합니다.

## 주요 학습 기능

- **인트로 온보딩 (3장 슬라이드)**
  1. PATTERN — 한국어 고유어/한자어(엄마/모, 아빠/부)에서 영어 일상어/학술어(mother/mater, father/pater)로 다리 놓기
  2. DISCOVERY — PIE에서 게르만 가지로 갈 때 P → F 자음 이동이 일어났음
  3. SPECTRUM — *pele-* 어근의 분광 시각화 + Grimm's Law(그림 형제 트리비아)

- **강 선택 화면 (Lessons)**
  - Lesson 01 P ↔ F (현재 활성)
  - Lesson 02 P ↔ V, 03 T ↔ TH, 04 C/K ↔ H (준비 중)

- **강 표지 (Cover)** — 본 레슨 진입 전 어근 *pele-*의 의미 분기 개요

- **어원 트리 (3갈래)** — 한 어근에서 갈라지는 *세 갈래 의미* + 각 갈래마다 **F·게르만 / P·라틴** 듀얼 표시
  - 갈래 1 채우다 (fill) — fill·full / ple- : complete, accomplish, deplete, implement, plus, supply, replenish, plenty, surplus, complement, compliment
  - 갈래 2 평평하게 펴다 (flat) — flat / pla- : plane, plain, place, plant, implant, transplant, plateau, platitude, platform
  - 갈래 3 접다 (fold) — fold / pli- : apply, complicate, multiply, imply, duplicate, replicate, implicit, explicit, perplex

- **의미 분류 퀴즈** — 단어를 어느 갈래에 속하는지 분류 (10문항)

- **실전 문제**
  - PART 01 어휘 추리력 — 어원 힌트로 단어 뜻 4지선다 추론 (10문항)
  - PART 02 단어 브릿지 — 준비 중
  - PART 03 예문 빈칸 — 준비 중

- **세션 간 진행 상황 저장** — localStorage 활용

## PWA 기능

- 📱 홈 화면 설치 (모바일·데스크톱)
- 🌐 오프라인 작동
- 🎨 앱 아이콘 + 스플래시 (Essential과 같은 V 로고)
- 🚀 서비스 워커 캐시

## 파일 구조

```
.
├── index.html              # 메인 앱 (PWA 진입점, 단일 파일)
├── manifest.json           # PWA 매니페스트
├── sw.js                   # 서비스 워커 (오프라인 캐싱)
├── icons/                  # 앱 아이콘
├── README.md
└── .gitignore
```

## 로컬에서 실행

```bash
python3 -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```

## GitHub Pages로 배포

1. 새 리포지토리 생성 (예: `vocatree-spectrum`)
2. 이 폴더 내용을 모두 업로드
3. **Settings → Pages**에서 `main` 브랜치 `/(root)` 배포
4. 1~2분 후 `https://<username>.github.io/<repo>/` 에서 접근

## 새 강(Lesson) 추가하기

`index.html` 안의 다음 영역을 수정합니다.

### 1) 데이터 정의

기존 `LESSON1_META`, `LESSON1_DATA`, `LESSON1_CLSDATA`, `LESSON1_PART01`과 같은 형식으로 새 강 데이터를 정의합니다.

```javascript
const LESSON2_META = {
  no: 2,
  root: 'habere',
  meaning: 'have / habere',
  ko: '갖다 · 잡다',
  pairLabel: 'P ↔ V',
  status: 'ready'
};
const LESSON2_DATA = { /* word_tree 등 */ };
const LESSON2_CLSDATA = { /* 단어별 의미·예문·어원 */ };
const LESSON2_PART01 = [ /* Part 01 문제 */ ];
```

### 2) LESSONS 레지스트리에 등록

```javascript
const LESSONS = {
  1: { meta: LESSON1_META, data: LESSON1_DATA, classify: LESSON1_CLSDATA, part01: LESSON1_PART01 },
  2: { meta: LESSON2_META, data: LESSON2_DATA, classify: LESSON2_CLSDATA, part01: LESSON2_PART01 },
};
```

### 3) LESSON_COMING에서 해당 항목 제거

엔진 코드는 모두 `LESSONS[currentLessonNo]`를 참조하므로 수정할 필요가 없습니다. 데이터만 추가하면 강 선택 화면·표지·트리·분류 퀴즈·Part 01이 자동 반영됩니다.

## 새 버전 배포 시 주의사항

`sw.js` 상단의 `CACHE_VERSION`을 변경하면 사용자에게 새 버전이 적용됩니다 (예: `'vts-v1'` → `'vts-v2'`).

## 학습자 데이터 (localStorage)

| 키 | 용도 |
| --- | --- |
| `vts_intro_seen` | 인트로 3장 본 기록 |
| `vts_cover_seen_lesson{N}` | 강별 표지 본 기록 |
| `vts_cls_done_lesson{N}` | 강별 분류 퀴즈 완료 기록 |
| `vts_p01_score_lesson{N}` | 강별 Part 01 최고 점수(%) |

## 라이선스

(필요에 따라 추가)
