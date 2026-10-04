# 바나나 키우기

바나나를 먹이고 놀아주며 키우는 웹 게임(PWA)이에요.

## 파일
| 파일 | 설명 |
|---|---|
| `index.html` | 게임 전체 |
| `manifest.json` | 앱 이름·아이콘·색 등 설치 정보 |
| `sw.js` | 오프라인 실행용 서비스 워커 (게임을 고치면 안의 `VERSION` 숫자를 올려요) |
| `privacy.html` | 개인정보처리방침 (Play 스토어 등록에 필요, 연락받을 이메일을 적어 주세요) |
| `icons/` | 앱 아이콘 |

## GitHub Pages로 공개하기
1. 이 폴더 안의 파일을 모두 저장소(`banana`)의 맨 위(루트)에 올려요.
2. 저장소 **Settings → Pages → Build and deployment**에서 Source를 `Deploy from a branch`, Branch를 `main` / `(root)`로 정하고 Save.
3. 1~2분 뒤 `https://lee-cloud999.github.io/banana/` 에서 게임이 열려요.
4. 개인정보처리방침 주소는 `https://lee-cloud999.github.io/banana/privacy.html` 이에요.

## 게임을 고쳤을 때
`index.html`을 바꿔 올린 뒤 `sw.js`의 `VERSION = 'banana-v1'`을 `banana-v2`처럼 올려야 이미 설치된 기기에서도 새 버전으로 바뀌어요.
