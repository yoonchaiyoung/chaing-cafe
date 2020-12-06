// axios 설정
// api 제작

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
  // 만약 AWS 서버에 올리게 되면 이 baseURL 주소만 바꿔주면 됨.
});

export const chatApi = {
  sendMessage: async (sentence_q) => {
    // 비동기 함수

    // 자바스크립트에서 FormData 만들기
    const form = new FormData();
    form.append("sentence_q", sentence_q);
    // 이 데이터를 POST 방식으로 보내면 됨

    const response = await api.post("/user_query", form);
    // localhost:5000/user_query 라는 주소로 데이터를 보냈었음
    // form의 데이터를.

    const response_message = response.data["result"];
    // 카페 메시지는 result 라는 변수에 들어있었음

    return response_message;
  },
};
