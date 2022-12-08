# React Blog

## 현재 브랜치 셋팅 정보

1. `npx create-react-app ./` : 해당 폴더에 React 설치
2. 불필요한 파일 삭제 / 필요한 이미지 파일 및 더미 데이터 셋팅

## React 실습하기

- 기존 HTML/CSS 파일을 이용하여 React 작업을 해보세요.

1. 컴포넌트 만들기
2. Router를 사용하여 페이지 라우팅 처리하기
3. state 처리를 통해 header 버튼 바꾸기

- logout<br />
  ![logout](https://user-images.githubusercontent.com/54294796/173001212-e5bb171e-f9e7-4816-b96b-ef7e8bd39289.jpg)
- login<br />
  ![login](https://user-images.githubusercontent.com/54294796/173001206-bf815686-0020-4976-bf6a-76277122f7f2.jpg)

4. 더미 데이터를 가져와 게시글, 블로그 정보, 유저정보 뿌려주기

```
전체 데이터 : https://raw.githubusercontent.com/weniv/react-blog/react/public/data.json
// 이렇게 실무에서 모든 데이터가 한 공간에 있지 않습니다.

blog 데이터 : https://raw.githubusercontent.com/weniv/react-blog/react/public/blog.json
//제목과 썸네일, 카테고리, Author 정보가 lite하게 들어있는 데이터입니다. contents는 없습니다.
post 전체 데이터 : https://raw.githubusercontent.com/weniv/react-blog/react/public/posts.json
post 개별 데이터 :
    - https://raw.githubusercontent.com/weniv/react-blog/react/public/post1.json
    - https://raw.githubusercontent.com/weniv/react-blog/react/public/post2.json
    - https://raw.githubusercontent.com/weniv/react-blog/react/public/post3.json
    - https://raw.githubusercontent.com/weniv/react-blog/react/public/post4.json
    - https://raw.githubusercontent.com/weniv/react-blog/react/public/post5.json
    - https://raw.githubusercontent.com/weniv/react-blog/react/public/post6.json

// 해당 데이터는 로그인을 해야만 받아올 수 있는 데이터입니다.(실무에서는요.)
user 데이터 : https://raw.githubusercontent.com/weniv/react-blog/react/public/user.json
```
