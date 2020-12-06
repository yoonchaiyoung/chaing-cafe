import React, { useEffect, useRef } from "react";
import MessageComponent from "../components/MessageComponent";

const MessageContainer = ({ messages }) => {
  // 단계A3. 메시지 넘겨주기
  // 단계A5. map으로 풀어주기

  const messageRef = useRef();
  // message가 변경되면 -> 스크롤을 최하단으로 옮기기
  useEffect(() => {
    // messageRef가 지정되었으면
    if (messageRef.current) {
      messageRef.current.scrollTop = messageRef.current.scrollHeight;
    }
  }, [messages]);
  // return <MessageComponent messages={messages} />;
  return <MessageComponent messages={messages} messageRef={messageRef} />;
};

export default MessageContainer;
