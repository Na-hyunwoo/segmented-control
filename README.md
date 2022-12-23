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

## 사용법
```js

const App = () => {
  return (
    <>
      <SegmentedControls
        options={[
          { value: "one", disabled: true },
          { value: "two" },
          { value: "three" },
        ]}
        defaultIndex={1}
        setValue={(val) => console.log(val)}
        size={"large"}
        name={"one"}
      />
      <SegmentedControls
        options={[
          { value: "one", disabled: true },
          { value: "two" },
          { value: "three" },
          { value: "four" },
        ]}
        defaultIndex={1}
        setValue={(val) => console.log(val)}
        size={"small"}
        name={"two"}
      />
    </>
  );
};

```

## 결과물

![](https://velog.velcdn.com/images/dusdjeks/post/4d2bf199-0679-4e01-8a36-7f08960d65f9/image.gif)


## 속성
|Name|Type|Default|Description|
|---|---|---|---|
|options|`{ value: string, disabled?: boolean }[]`||Enter the label of segments
|setValue|`Dispatch<SetStateAction<string>>`||callback on input change, passed the value string. Called once initially with the default value on mount. 
|size|`large or small`||Enter the size of component you want
|name|`string`||Enter name of the radio <input>s
|defaultIndex|`number`||You could set default value through this property


options: {
  value: string;
  disabled?: boolean;
}[];
setValue: Dispatch<SetStateAction<string>>;
size: "large" | "small";
name: string;
defaultIndex: number;