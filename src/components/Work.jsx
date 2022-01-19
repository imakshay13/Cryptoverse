import React from "react";
import { Progress } from "antd";

const Work = () => (
  <div
    style={{ display: "flex", flexDirection: "column", margin: "15vw 50%  " }}
  >
    <Progress type="circle" percent={40} width={100} status="exception" />
    <strong>Work in Progress</strong>
  </div>
);

export default Work;
