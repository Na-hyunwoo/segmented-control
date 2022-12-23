## 실행 환경

불필요한 노드를 최소화 하기 위해 webpack으로 React + Typescript + Styled Components + Storybook을 세팅했습니다. 그리고 간단한 lint, prettier 설정도 추가했습니다.

label과 input을 연결해웹 접근성을 고려한 개발을 하였습니다. 

framer-motion 라이브러리를 사용하여 애니메이션을 적용하였습니다. 

## 실행 방법

1. package install

- npm i (or yarn)

2. run dev server

- npm run dev (or yarn dev)를 통해 구현된 컴포넌트를 localhost:3000에서 확인하실 수 있습니다.

3. build

- npm run build (or yarn build)

# input-chips
Contributions of any kind welcome!
## Motivation
This project provides a input with chips. It is inspired by [material-ui-chip-input](https://www.npmjs.com/package/material-ui-chip-input)

But this package is deprecated, and I wanted a different design.

I thought the form with chips inside the input was inappropriate and it was strange that the position of the placeholder kept changing.

If you want to try the component yourself instead of watching a gif, head over to the [storybook](https://63961733d24ff60abfa4c861-lfrqimfugu.chromatic.com/?path=/story/inputchips--input-chips-with-title) for a live demo !

## Installation

```js
npm i input-chips
```

## Point Of Focus
- Pretty UI 

- Easy use

- Eliminate the bug from material-ui-chip-input where Korean is entered twice
![](https://velog.velcdn.com/images/dusdjeks/post/77db6d3b-6be7-4c3c-9ec3-8a0c5b093add/image.gif)

- Improving developer experience through tsdoc and storybook

## [npm address](https://www.npmjs.com/package/input-chips)

## Usage

```js

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return state.includes(action.keyword) ? state : [...state, action.keyword];
    case "DELETE":
      return state.filter((existing) => existing !== action.keyword);
    default: 
      return state;
  }
}

const App = () => {

  const [ keywords, dispatch ] = useReducer(reducer, []);

  const handleAdd = ( keyword: string ) => {
    dispatch({type: "ADD", keyword: keyword});
  }

  const handleDelete = ( keyword: string ) => {
    dispatch({type: "DELETE", keyword: keyword});
  }

  return (
    <InputChips 
      id={id}
      title={title} 
      tip={tip}
      placeholder={inputChips.placeholder}
      keywords={keywords}
      onDelete={handleDelete}
      onAdd={handleAdd}
    />
  );
}

export default App;

```

## Result

![](https://velog.velcdn.com/images/dusdjeks/post/4d2bf199-0679-4e01-8a36-7f08960d65f9/image.gif)


## Properties
|Name|Type|Default|Description|
|---|---|---|---|
|id|`string`||String key for input-label coupling
|title|`string`||Enter your input label
|tip|`string`||Enter tip for using input. It's located next to title.
|placeholder|`string`||Enter the placeholder showed by input
|keywords|`string[]`||It will return pretty chips
|onAdd|`function(arg0: string)`||This will send you a keyword, so you should manage it using hook like useState.
|onDelete|`function(arg0: string)`||This will send you a keyword, so you should manage it using hook like useState.
|disabled|`boolean`||True if you want to make disable input
|autoFocus|`bool`||A Boolean attribute which, if present, indicates that the input should automatically have focus when the page has finished loading
|maxLength|`number`||It defines the maximum number of characters
|minLength|`number`||It defines the minimum number of characters
|name|`string`||A string specifying a name for the input control.
|readonly|`boolean`||A Boolean attribute which, if present, indicates that the user should not be able to edit the value of the input.
|required|`boolean`||Required is a Boolean attribute which, if present, indicates that the user must specify a value for the input before the owning form can be submitted.
|border|`string`||You can customize your input border. 
|background|`string`||You can customize your input background and chip background. 
