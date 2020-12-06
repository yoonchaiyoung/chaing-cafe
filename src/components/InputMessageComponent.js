import React from "react";
import styled from "styled-components";

// 입력창
const InputTextArea = styled.input`
  padding: 0.5rem;
  resize: none;
  border: none;
  border-radius: 5px 0px 0px 5px;
  // 왼쪽위 오른쪽위 오른쪽아래 왼쪽아래  // 둥근정도
  // 왼쪽이 둥글게
  width: 100%;
  height: 100%;
  :focus {
    // input이 focus되면 파란줄이 뜸
    outline: 0;
    // 파란줄을 없애줌
  }
`;

// 보내기 버튼
const MessageSendButton = styled.div`
  display: flex;
  width: 150px;
  border-radius: 0px 5px 5px 0px;
  // 이번에는 오른쪽이 둥글게
  height: 100%;
  cursor: pointer;
  background-color: gray;
  justify-content: center;
  align-items: center;
  /* div라서 왼쪽위로 보내기 라는 글씨가 붙음
  justify-content, align-items 를 설정 -> 보내기 글씨가 가운데로 온다. */
`;

// 입력창, 보내기 버튼 2개를 담을 컨테이너
const InputBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  margin-top: 0.8rem;
`;

const InputMessageComponent = ({
  handleSendBtnClickd,
  handleOnEnterKeyDown,
  inputRef,
}) => {
  return (
    <InputBoxContainer>
      <InputTextArea ref={inputRef} onKeyDown={handleOnEnterKeyDown} />
      {/* inputRef 창 자체를 표현
      현재 잡고있는 레퍼런스를 current 라고 함
      그 value를 가져오겠다? 전체 value를 가져오겠다. */}
      <MessageSendButton onClick={handleSendBtnClickd}>
        보내기
      </MessageSendButton>
    </InputBoxContainer>
  );
};

export default InputMessageComponent;
