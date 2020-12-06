import React from "react";
import styled from "styled-components";
import MessageContainer from "../container/MessageContainer";

// 단계2
const UserMessageContainer = styled.div`
  border-radius: 10px;
  width: 300px;
  background: rgba(248, 218, 74, 1);
  color: black;
  display: flex;
  padding: 0.5rem;
  margin-top: 1.5rem;
  align-self: flex-end;
  // align-item : 자식이 어디에 배치될지
  // align-self : 스스로가 어디에 배치될지
  // flex-end : 오른쪽
  // 시작이 왼쪽, 끝이 오른쪽
`;

const UserMessageComponent = ({ message }) => {
  return (
    <>
      {/* 단계B2. */}
      {/* <UserMessageContainer>아이스 아메리카노 얼마에요?</UserMessageContainer> */}
      <UserMessageContainer>{message}</UserMessageContainer>
    </>
  );
};

export default UserMessageComponent;
