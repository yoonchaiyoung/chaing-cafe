// MessagePresenter 역할
// container는 언제나 component를 포함한다.
// MessageContainer의 자식이 MessageComponent

import React from "react";
import styled from "styled-components";
import BrownProfileContainer from "../container/BrownProfileContainer";
import UserMessageContainer from "../container/UserMessageContainer";

const MessagePresentationContainer = styled.div`
  overflow: scroll;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

// 말풍선을 담을 박스
// 말풍선이 여기에 추가되면서 화면에 뜰 것
const MessageComponent = ({ messages, messageRef }) => {
  return (
    <MessagePresentationContainer ref={messageRef}>
      {/* 단계 3. */}
      {/* 단계A4. 메시지를 map으로 가지고 와야함 */}
      {/* <BrownProfileContainer />
      <UserMessageContainer />
      <BrownProfileContainer />
      <UserMessageContainer />
      <BrownProfileContainer />
      <UserMessageContainer /> */}
      {messages.map(
        (message) =>
          // messages를 가져와서 message로 풀어줘야 함
          // 카페인지 나인지 판단필요
          message.isUser ? (
            <UserMessageContainer message={message.text} />
          ) : (
            <BrownProfileContainer message={message.text} />
          )
        // 삼항연산자 이용
      )}
    </MessagePresentationContainer>
  );
};

export default MessageComponent;
