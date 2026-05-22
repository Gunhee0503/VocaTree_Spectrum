# 보카트리 Spectrum — 인트로 프로토타입

> 소리의 변화(P ↔ F)로 영어 단어 가족을 잇는 학습 웹앱 · Progressive Web App
>
> **이 zip은 색상 톤 비교용 프로토타입 두 가지(A안 · B안)를 함께 담은 패키지입니다.**

## 두 가지 색상 안

| 안 | 콘셉트 | P 갈래(라틴계) | F 갈래(게르만계) | 특징 |
|---|---|---|---|---|
| **A안** | 프리즘 보조색 | 보랏빛 `#7a5a8c` | 푸른빛 `#3a6b7c` | "분광" 콘셉트 시각적으로 강함, 두 갈래 즉각 구분 |
| **B안** | 골드 단색조 | 진한 골드 `#8b6520` | 옅은 골드 `#c9a35e` | Essential과의 시리즈 일관성 최대, 차분함 |

두 안의 **HTML 내용·구조·인트로 텍스트는 완전히 동일**합니다. 오직 CSS 색상 변수와 그 파생 표현만 다릅니다.

## 폴더 구조

```
.
├── vocatree-spectrum-A/    # A안: 프리즘 보조색
│   ├── index.html
│   ├── manifest.json
│   ├── sw.js
│   └── icons/
└── vocatree-spectrum-B/    # B안: 골드 단색조
    ├── index.html
    ├── manifest.json
    ├── sw.js
    └── icons/
```

## 로컬에서 비교하기

```bash
# A안
cd vocatree-spectrum-A && python3 -m http.server 8001
# 브라우저에서 http://localhost:8001 접속

# 새 터미널에서 B안
cd vocatree-spectrum-B && python3 -m http.server 8002
# 브라우저에서 http://localhost:8002 접속
```

## GitHub Pages로 둘 다 배포하기 (가장 간편한 비교 방법)

1. 새 리포지토리 생성 (예: `vocatree-spectrum-preview`)
2. zip 내용 전체를 그대로 업로드
3. **Settings → Pages**에서 `main` 브랜치 `/(root)` 배포
4. 1~2분 후 두 URL에서 각각 확인:
   - `https://<username>.github.io/<repo>/vocatree-spectrum-A/`
   - `https://<username>.github.io/<repo>/vocatree-spectrum-B/`

## 인트로 3슬라이드 구성

1. **PATTERN** — 한국어 이중 어휘(엄마/모, 아빠/부)에서 영어 이중 어휘(mother/mater, father/pater)로 다리 놓기. P/F 분리 질문 던지기.
2. **DISCOVERY** — PIE에서 게르만 가지로 갈 때 P → F 자음 이동이 일어남. 두 자매 언어가 영어 안에서 다시 합류.
3. **SPECTRUM** — *pele-* 어근 분광 시각화(fill/full vs complete/supply). 마지막에 Grimm's Law / 그림 형제 트리비아.

## 다음 단계

색상 안 결정 후 → 결정된 안 위에 Lesson 1 (P/F 챕터 본문) 추가 → Essential 앱과 동일한 PWA 구조로 완성.
