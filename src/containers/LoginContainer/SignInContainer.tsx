import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpApi from "../../apis/signup-api";
import SignIn from "../../templates/Login/SideIn";

const SignInContainer: React.FC = () => {
  const navigate = useNavigate();

  // 각 입력 필드에 대한 상태(state) 정의
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMsg, setModalMsg] = useState("");

  // 아이디 입력 필드 변경 이벤트 핸들러
  const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };

  // 비밀번호 입력 필드 변경 이벤트 핸들러
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // 공백 여부를 확인하는 함수
  const isNotBlank = (value: string) => {
    return value.trim() !== "";
  };
  // state 값들을 검사하여 공백 여부를 확인하는 함수
  const areFieldsNotBlank = () => {
    return isNotBlank(id) && isNotBlank(password);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // 페이지 리로드 방지
    event.preventDefault();
    if (areFieldsNotBlank()) {
      try {
        // API 호출
        const response = await SignUpApi.postLogin({
          memberId: id,
          password: password,
        });
        console.log("로그인 성공:", response);
        alert("로그인 성공");
      } catch (error) {
        // 오류 처리
        console.error("로그인 실패:", error);
        alert("로그인 실패");
      }
    } else {
      setModalMsg("모든 정보를 입력해주세요");
      //모달 open
      setModalOpen(true);
    }
  };

  //모달 닫기
  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <SignIn
      modalOpen={modalOpen}
      modalMsg={modalMsg}
      onIdChange={handleIdChange}
      onPasswordChange={handlePasswordChange}
      handleSubmit={handleSubmit}
      handleModalClose={handleModalClose}
    />
  );
};

export default SignInContainer;
