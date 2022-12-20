import { useState } from "react";
import { SegmentedControl } from "./SegmentedControl";

const App = () => {
  return (
    <>
      <SegmentedControl
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
      <SegmentedControl
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

export default App;
