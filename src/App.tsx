import React from "react";
import { SegmentedControls } from "./lib";

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
      <div style={{ marginTop: "100px" }}></div>
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

export default App;
