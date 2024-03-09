- Node.js | express
- React |

## next-auth

- next-auth 라이브러리 사용
  Kakao, Discord, GitHub 3가지의 소셜 로그인 사용  
  Kakao 로그인의 경우 https 사용이 어려워 로직 만 구현

## oauth 2.0 Testing

- React, Node 에서 Ouath2.0을 통한 값 가져오기
  component/Git.tsx의 경우
  백엔드에서 passport.js 모듈을 이용해서
  전부 백엔드에서 처리

component/GitOuath.tsx의 경우
이벤트 발생 시 백엔드에 Client_ID, Secret_Key를 응답 받은 후
authorization code를 백엔드에 보냄
이 후 백엔드에서 로직 처리 후 유저의 아이디, 이메일 등 정보를 받아오는 로직

## pizza-routing

- axios 를 통한 api 통신 방법 안내
  PIZZA프로젝트 예시

프론트랑 백엔드 통신 과정 중

주제 : 1페이지에서 요청을 보내고 이 응답을 2페이지에서 표시를 하려 함
그 과정중 데이터를 받는 동안 로딩페이지를 표시

방법 1: 사용자가 1페이지에서 요청을 보내고, 이에 대한 응답을 받는 동안 로딩 페이지를 표시
응답을 받으면, 받은 데이터와 함께 2페이지로 이동합니다. ( useNavigate에 스테이트를 담아서 2페이지 로 전달)
데이터를 받는 동안 사용자에게 로딩 상태를 보여주고, 데이터를 받은 후에 다음 페이지로 이동합니다.

방법 2: 사용자가 1페이지에서 네비게이션 만 관리하고 2페이지로 이동
2페이지에서 useEffect 또는 컴포넌트 렌더링 시에 axios 또는 다른 비동기 작업을 수행하여 데이터를 요청
데이터를 받는 동안 로딩 페이지를 표시
데이터를 받은 후에 2페이지에 대한 내용을 화면에 렌더링

저는 2를 선호 함미다~
