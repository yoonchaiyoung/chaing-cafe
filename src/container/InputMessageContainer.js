import React, { useCallback, useRef } from "react";
import InputMessageComponent from "../components/InputMessageComponent";

const InputMessageContainer = ({ setUserMessage, setMessages, messages }) => {
  // useRef() : 엘리먼트 1개를 특정하기 위해 사용
  const inputRef = useRef();

  // 보내기 버튼을 클릭하거나, 엔터키가 눌렸을 때의 작동을 하나의 함수로 작성.
  const userProcess = () => {
    // 1. 입력창에 입력된 텍스트를 가져오기
    const sentence_q = inputRef.current.value;
    inputRef.current.value = "";
    // 원래는 state를 활용했었음.

    // 메시지 리스트에 사용자가 입력한 메시지 추가
    const newMessages = messages.concat({
      text: sentence_q,
      isUser: true,
    });
    // state는 항상 교체!

    setMessages(newMessages);
    // 화면에 사용자가 입력한 메세지를 반영하기 위해

    // 그런데 아직 데이터를 보내지는 X

    setUserMessage(sentence_q);
    // 서버에 보낼 메세지를 세팅
  };

  // 버튼클릭 및 엔터키 눌렀을 때의 이벤트 작성
  const handleSendBtnClickd = useCallback(() => {
    userProcess();
  }, [messages]);
  // messages가 바뀔때마다 다시 만들어야 하기 때문에
  // dependency : messages

  const handleOnEnterKeyDown = useCallback(
    (e) => {
      // event 객체 필요
      if (e.keyCode === 13) {
        // 눌린 키가 13번이면 (엔터키이면)
        userProcess();
      }
    },
    [messages]
  );

  return (
    <InputMessageComponent
      handleSendBtnClickd={handleSendBtnClickd}
      handleOnEnterKeyDown={handleOnEnterKeyDown}
      inputRef={inputRef}
    />
  );
};

export default InputMessageContainer;
