# 🎯 Focus Flow Lite

**몰입의 흐름을 경험하는 프리미엄 포모도로 타이머**

Focus Flow Lite는 Flow Theory(몰입 이론)에 영감을 받아 디자인된 미니멀하고 우아한 포모도로 타이머 애플리케이션입니다. 집중력을 극대화하고 생산성을 향상시키는 동시에, 아름다운 사용자 경험을 제공합니다.

![Focus Flow Lite](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.0.5-646CFF?style=flat-square&logo=vite&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-5.0.2-orange?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ 주요 기능

- **🎨 프리미엄 디자인**: 다크 모드 기반의 세련된 UI/UX
- **⏱️ 유연한 타이머**: 1분부터 60분까지 자유롭게 조절 가능
- **🎯 목표 설정**: 각 세션마다 명확한 목표를 설정하여 집중력 향상
- **📊 통계 추적**: 완료한 세션 수와 총 집중 시간을 실시간으로 확인
- **🔔 완료 알림**: 세션 완료 시 우아한 모달로 알림
- **💾 데이터 지속성**: LocalStorage를 활용한 자동 저장
- **🎭 부드러운 애니메이션**: 모든 인터랙션에 세심한 애니메이션 적용

## 🛠️ 기술 스택

- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 6.0.5
- **State Management**: Zustand 5.0.2
- **Styling**: Vanilla CSS (CSS Variables, Flexbox, Grid)
- **Storage**: LocalStorage API

## 📦 설치 방법

### 사전 요구사항
- Node.js 18.x 이상
- npm 또는 yarn

### 설치 단계

```bash
# 저장소 클론
git clone https://github.com/aiappstorylab/focus-flow-lite.git

# 프로젝트 디렉토리로 이동
cd focus-flow-lite

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

개발 서버가 실행되면 브라우저에서 `http://localhost:5173`으로 접속하세요.

## 🚀 사용 방법

1. **타이머 시간 설정**: 상단의 `-` / `+` 버튼으로 1~60분 사이의 시간을 설정합니다
2. **목표 입력**: "이번 세션의 목표는?" 입력창에 집중할 작업을 입력합니다
3. **타이머 시작**: 중앙의 시작 버튼을 클릭하여 타이머를 시작합니다
4. **집중 시간**: 타이머가 진행되는 동안 설정한 목표에 집중합니다
5. **완료**: 타이머가 종료되면 완료 모달이 표시되고, 통계가 자동으로 업데이트됩니다

## 📁 프로젝트 구조

```
focus-flow-lite/
├── src/
│   ├── components/
│   │   ├── CircularTimer.jsx      # 원형 타이머 컴포넌트
│   │   ├── DurationControl.jsx    # 시간 조절 컴포넌트
│   │   ├── GoalInput.jsx          # 목표 입력 컴포넌트
│   │   ├── TimerControls.jsx      # 타이머 제어 버튼
│   │   ├── NotificationModal.jsx  # 완료 알림 모달
│   │   └── Statistics.jsx         # 통계 표시 컴포넌트
│   ├── store/
│   │   └── timerStore.js          # Zustand 상태 관리
│   ├── App.jsx                    # 메인 앱 컴포넌트
│   ├── main.jsx                   # 앱 엔트리 포인트
│   └── index.css                  # 글로벌 스타일
├── public/
├── package.json
└── vite.config.js
```

## 🎨 디자인 철학

Focus Flow Lite는 **미니멀리즘**과 **프리미엄 경험**을 결합했습니다:

- **다크 모드**: 눈의 피로를 줄이고 집중력을 높이는 어두운 배경
- **그라데이션**: 생동감 있는 보라-핑크 그라데이션으로 시각적 흥미 제공
- **마이크로 애니메이션**: 모든 인터랙션에 부드러운 전환 효과
- **타이포그래피**: Inter 폰트로 가독성과 현대적 느낌 강조
- **공간감**: 여유로운 여백으로 시각적 안정감 제공

## 📂 워크스페이스 파일

Antigravity로 작업한 주요 파일들입니다:

### 🎯 메인 애플리케이션
- [App.jsx](file:///Users/elzenaro/workspace/notion_stitch_notebooklm/focus-flow-lite/src/App.jsx) - 메인 애플리케이션 컴포넌트
- [App.css](file:///Users/elzenaro/workspace/notion_stitch_notebooklm/focus-flow-lite/src/App.css) - 메인 애플리케이션 스타일
- [main.jsx](file:///Users/elzenaro/workspace/notion_stitch_notebooklm/focus-flow-lite/src/main.jsx) - 앱 엔트리 포인트
- [index.css](file:///Users/elzenaro/workspace/notion_stitch_notebooklm/focus-flow-lite/src/index.css) - 글로벌 스타일 및 CSS 변수

### 🧩 컴포넌트
- [CircularTimer.jsx](file:///Users/elzenaro/workspace/notion_stitch_notebooklm/focus-flow-lite/src/components/CircularTimer.jsx) - 원형 타이머 UI
- [CircularTimer.css](file:///Users/elzenaro/workspace/notion_stitch_notebooklm/focus-flow-lite/src/components/CircularTimer.css)
- [DurationControl.jsx](file:///Users/elzenaro/workspace/notion_stitch_notebooklm/focus-flow-lite/src/components/DurationControl.jsx) - 타이머 시간 조절 (1-60분)
- [DurationControl.css](file:///Users/elzenaro/workspace/notion_stitch_notebooklm/focus-flow-lite/src/components/DurationControl.css)
- [GoalInput.jsx](file:///Users/elzenaro/workspace/notion_stitch_notebooklm/focus-flow-lite/src/components/GoalInput.jsx) - 목표 입력 필드
- [GoalInput.css](file:///Users/elzenaro/workspace/notion_stitch_notebooklm/focus-flow-lite/src/components/GoalInput.css)
- [TimerControls.jsx](file:///Users/elzenaro/workspace/notion_stitch_notebooklm/focus-flow-lite/src/components/TimerControls.jsx) - 시작/일시정지/리셋 버튼
- [TimerControls.css](file:///Users/elzenaro/workspace/notion_stitch_notebooklm/focus-flow-lite/src/components/TimerControls.css)
- [NotificationModal.jsx](file:///Users/elzenaro/workspace/notion_stitch_notebooklm/focus-flow-lite/src/components/NotificationModal.jsx) - 세션 완료 알림 모달
- [NotificationModal.css](file:///Users/elzenaro/workspace/notion_stitch_notebooklm/focus-flow-lite/src/components/NotificationModal.css)
- [Statistics.jsx](file:///Users/elzenaro/workspace/notion_stitch_notebooklm/focus-flow-lite/src/components/Statistics.jsx) - 통계 대시보드
- [Statistics.css](file:///Users/elzenaro/workspace/notion_stitch_notebooklm/focus-flow-lite/src/components/Statistics.css)

### 🗄️ 상태 관리
- [timerStore.js](file:///Users/elzenaro/workspace/notion_stitch_notebooklm/focus-flow-lite/src/store/timerStore.js) - Zustand 기반 타이머 상태 관리 및 LocalStorage 통합

### ⚙️ 설정 파일
- [package.json](file:///Users/elzenaro/workspace/notion_stitch_notebooklm/focus-flow-lite/package.json) - 프로젝트 의존성 및 스크립트
- [vite.config.js](file:///Users/elzenaro/workspace/notion_stitch_notebooklm/focus-flow-lite/vite.config.js) - Vite 빌드 설정
- [index.html](file:///Users/elzenaro/workspace/notion_stitch_notebooklm/focus-flow-lite/index.html) - HTML 엔트리 포인트

### 📝 문서
- [기획서.md](file:///Users/elzenaro/workspace/notion_stitch_notebooklm/focus-flow-lite/기획서.md) - 프로젝트 기획서 및 개발 로드맵
- [Antigravity_history.md](file:///Users/elzenaro/workspace/notion_stitch_notebooklm/focus-flow-lite/Antigravity_history.md) - Antigravity 개발 히스토리

### 🎨 Stitch 디자인 파일
- [main_dashboard_variant1.html](file:///Users/elzenaro/workspace/notion_stitch_notebooklm/stitch_designs/main_dashboard_variant1.html)
- [main_dashboard_variant2.html](file:///Users/elzenaro/workspace/notion_stitch_notebooklm/stitch_designs/main_dashboard_variant2.html)
- [statistics_screen.html](file:///Users/elzenaro/workspace/notion_stitch_notebooklm/stitch_designs/statistics_screen.html)

## 🤝 기여하기

기여는 언제나 환영합니다! 다음 단계를 따라주세요:

1. 이 저장소를 Fork 합니다
2. Feature 브랜치를 생성합니다 (`git checkout -b feature/AmazingFeature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치에 Push 합니다 (`git push origin feature/AmazingFeature`)
5. Pull Request를 생성합니다

## 📄 라이센스

이 프로젝트는 MIT 라이센스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

```
MIT License

Copyright (c) 2026 AI App Story Lab

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 👨‍💻 개발자

**AI App Story Lab**
- GitHub: [@aiappstorylab](https://github.com/aiappstorylab)

## 🙏 감사의 말

- Flow Theory에 영감을 준 Mihaly Csikszentmihalyi
- 포모도로 기법을 개발한 Francesco Cirillo
- React, Vite, Zustand 커뮤니티

---

**Focus Flow Lite**로 몰입의 흐름을 경험하세요! 🚀
