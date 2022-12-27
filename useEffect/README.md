정연님 들어오셨나여? 😍
❤️‍🔥✨ 좋습니다~!!

# 8 useEffect

## 8-1 useEffect의 등장 배경(설하님)

- 마운트 업데이트 언마운트 그림 (https://www.notion.so/React-Hook-useEffect-3dce9b05a5c048a0a944f815009e28c6)

- 클래스 컴포넌트 중 componentDidMount, componentDidUpdate, componentWillUnmount 의 종합 세트가 useEffect이다.

- 클래스 컴포넌트 : 하나의 상태와 관련된 로직이어도 컴포넌트가 마운트 될 때, 언마운트 될 때 나눠서 서로 다른 생명주기 메서드에 작성해야 함

- 함수형 컴포넌트 : 한 컴포넌트 내부에 useEffect훅을 여러 개 사용할 수 있음.
  상태와 상태 관련 로직 중심으로 useEffect훅을 작성할 수 있어 관련 코드들이 함께 모여 있다 (이해하기 쉽다)

## 8-2 useEffect의 동작 방식(설하님)

- 간단한 그림자료

- useEffect(effectCallbak[,depsList]) 등 기본 설명

## 8-3 컴포넌트가 마운트될 때만 실행되는 경우 (지형님)

## 8-4 변수의 상태가 변경될 때 실행되는 경우 (지영님)

## 8-5 clean-up 하는 경우 (정연님)

- setTimeout 예시 사용

## 8-6 성능최적화 방법 (지형님)
