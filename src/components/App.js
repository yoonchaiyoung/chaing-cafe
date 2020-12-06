import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import MessageContainer from "../container/MessageContainer";
import InputMessageContainer from "../container/InputMessageContainer";
import { useEffect, useState } from "react";
import { chatApi } from "../api";

// 원래는 여기에 만들면 안 되는 데 이번에는 App.js에 모든 데이터를 넣겠음
// 화면 가운데에 채팅화면 뜨게 스타일링
const MainContainer = styled.div`
  margin: auto;
  /* margin: auto -> 위, 아래, 양, 옆을 가질 수 있는 최대의 margin을 가지게 된다. */
  max-width: 640px;
  /* 핸드폰까지 같이 고려할 때 */
  height: 80vh;
  /* vh : vertical height : 화면 세로 길이의 80%만 차지하도록. 
  80hw : horizontal width : 화면 가로 길이의 80%만 차지하도록. */
  display: flex;
  flex-direction: column;
  /* 위에 채팅창
  밑에 입력창
  세로로 쌓을 거라서 column */
`;

function App() {
  // 단계A1. 채팅방에 띄워줄 메시지의 목록 -> 메시지들을 위한 배열
  const [messages, setMessages] = useState([
    {
      text: "안녕하세요! 챙 카페입니다🤗",
      isUser: false,
      // 아무것도 안보내도 카페 기본 초기메시지 필요
      // 카페가 말하면 왼쪽, 내가 입력한 값은 오른쪽에 띄워져야 함
      // isUser 필요
    },
  ]);

  // 2. 사용자가 입력한 내용을 관리할 state
  const [userMessage, setUserMessage] = useState("");

  // userMessage가 변경되면 -> 서버에 전송
  useEffect(() => {
    // 전송할 비동기 함수 만들기
    const sendMessage = async () => {
      try {
        if (userMessage !== "") {
          // userMessage가 있을 때만 보냄. 없으면 보내지 않음.
          // 즉, 입력한 내용이 있으면 전송
          const returnMessage = await chatApi.sendMessage(userMessage);

          const newMessages = messages.concat({
            text: returnMessage,
            isUser: false,
          });
          setMessages(newMessages);
        }
      } catch (error) {
        alert(error);
      }
    };

    sendMessage();
  }, [userMessage]);

  return (
    <>
      <GlobalStyles />
      <MainContainer>
        {/* 단계A2. messages는 MessageContainer로 들어감.
        메시지가 넘어가면 setMessages를 통해 상태 messages라는 state가 바뀌어서
        다시 **렌더링** 됨.
        messages에 의해. */}
        <MessageContainer messages={messages} />
        {/* MessageComponent를 바로 호출하는 것이 아닌 부모인 MessageContainer부터 호출한다. */}
        <InputMessageContainer
          setUserMessage={setUserMessage}
          setMessages={setMessages}
          messages={messages}
        />
      </MainContainer>
    </>
  );
}

export default App;
