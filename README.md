- Node.js | express
- React | Redux, Next.js, Ts, Js ...

## socket-io-chat

- node + react 소켓 io를 이용한 소켓통신
  - 서버에서 사용하는 채팅방의 목록을 chatRooms[] 문자열 배열로 관리
  - 채팅방의 채팅내역은 프론트에서 리덕스로 관리함
  - 채팅은 소켓통신 연결해제시 스토어를 초기화하여 휘발성으로 사용

## guide-to-react-query

- 리액트 쿼리를 이용한 간단한 투두리스트

## guide-to-socket-io

- node - socket.io
- react - socket.io-client
  모듈을 이용하여 간단한 채팅 앱
  리덕스로 message 관리
- ++ React 18.2 버전은 material-ui/core 라이브러리 버전 호환 안돼 --force로 강제로 이용

## guide-to-ckeditor5

- 게시글 작성을 위한 게시판 CKeditor5 라이브러리를 이용!
  추가로 react-html-parse 라이브러리를 이용해 html의 다양한 태그를
  string으로 받은 후 파싱하여 렌더링
- ++ React 18버전은 파싱 라이브러리 버전이 호환이 안됨 --force로 강제로 이용

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

## recoil-todo

- Redux가아닌 다른 상태 관리 도구를 이용하여
  간단한 투두리스트 생성 삭제 수정 앱!!

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
