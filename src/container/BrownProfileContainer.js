import React from "react";
import BrownProfileComponent from "../components/BrownProfileComponent";

const BrownProfileContainer = ({ message }) => {
  // 단계A6. message받아오기

  // 단계 1. component 연결
  return <BrownProfileComponent message={message} />;
};

export default BrownProfileContainer;
