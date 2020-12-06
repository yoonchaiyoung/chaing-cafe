import React from "react";
// 단계 2. styled import
import styled from "styled-components";

// 단계 3.
const ProfileContainer = styled.div`
  border-radius: 10px;
  width: 300px;
  background: #ffffff;
  color: gray;
  display: flex;
  padding: 0.2rem;
  margin-top: 1rem;
`;

// 단계 5. 이미지 넣기
const ProfileImage = styled.div`
  border-radius: 10px;
  min-height: 65px;
  max-height: 65px;
  min-width: 50px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("profile_img.png");
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;
`;

// 카페 프로필이름
const ProfileName = styled.h1`
  margin-top: 0.1rem;
  color: black;
  font-size: 1rem;
`;

// 카페 메시지 내용
const BrownMessage = styled.div`
  margin-top: 0.5em;
`;

const BrownProfileComponent = ({ message }) => {
  // 단계 4. ProfileContainer 넣기
  return (
    <>
      <ProfileContainer>
        <ProfileImage />
        <TextContainer>
          <ProfileName>알바하는 브라운</ProfileName>
          {/* 단계A7. 넘어오는 message 가져오기 */}
          {/* <BrownMessage>안녕하세요! 챙 카페입니다😀</BrownMessage> */}
          <BrownMessage>{message}</BrownMessage>
        </TextContainer>
      </ProfileContainer>
    </>
  );
};

export default BrownProfileComponent;
