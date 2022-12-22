## 실행 환경

불필요한 노드를 최소화 하기 위해 webpack으로 React + Typescript + Styled Components + Storybook을 세팅했습니다. 그리고 간단한 lint, prettier 설정도 추가했습니다.

Storybook은 과제를 다 하고 만들 계획이었습니다.

## 실행 방법

1. package install

- npm i (or yarn)

2. run dev server

- npm run dev (or yarn dev)를 통해 구현된 컴포넌트를 localhost:3000에서 확인하실 수 있습니다.

3. build

- npm run build (or yarn build)

## 트러블 슈팅

선택 과제에선 1번 애니메이션을 구현하고자 시도했습니다. 구현 방법은 spring 기반의 라이브러리 중 react-spring을 통해 구현하고자 했습니다. 그 이유는 최근 업데이트가 4일 전 일정도로 아주 활발하게 업데이트 중이었고, tree-shaking을 지원하기 때문에 번들된 파일의 크기를 줄일 수 있겠다고 생각했기 때문입니다.

그러나, 시간이 부족하여 구현하지 못했습니다.

만약 시간이 넉넉했다면, onTouchStart, onTouchEnd라는 html element의 property를 사용하여 이벤트에 따른 애니메이션을 발생시키는 논리로 적용해볼 것 같습니다.

## 느낀점

토스팀이 가지고 있는 디자인 시스템의 일부를 통해 UI 라이브러리를 만들 수 있다는 것이 자극으로 다가왔던 것 같습니다.

이 간단한 라이브러리를 구현하면서 크고 작은 여러 라이브러리 코드를 뒤져보게 되었는데, segmented-control과 관련된 괜찮은 라이브러리가 없다고 느꼈습니다. 그래서 선택 과제에서 구현하지 못한 것들과 부족한 부분들을 보강해서 간단한 UI 라이브러리를 만들어서 배포하면 좋겠다는 생각을 하게되었습니다.
