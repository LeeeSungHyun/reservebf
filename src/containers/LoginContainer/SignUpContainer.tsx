import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpApi from "../../apis/signup-api";
import SignUp from "../../templates/Login/SignUp";

const SignUpContainer: React.FC = () => {
  const navigate = useNavigate();

  // 각 입력 필드에 대한 상태(state) 정의
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [customAffiliation, setCustomAffiliation] = useState("");
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  // 이름 입력 필드 변경 이벤트 핸들러
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  // 아이디 입력 필드 변경 이벤트 핸들러
  const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };

  // 비밀번호 입력 필드 변경 이벤트 핸들러
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // 비밀번호 확인 입력 필드 변경 이벤트 핸들러
  const handlePasswordConfirmChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordConfirm(event.target.value);
  };

  // 전화번호 입력 필드 변경 이벤트 핸들러
  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumber(event.target.value);
  };

  // 소속 선택 변경 이벤트 핸들러
  const handleAffiliationChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setAffiliation(event.target.value as string);
  };

  // 기타 소속 입력 필드 변경 이벤트 핸들러
  const handleCustomAffiliationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCustomAffiliation(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // 페이지 리로드 방지
    event.preventDefault();

    const params = {
      name,
      id,
      password,
      phoneNumber,
      affiliation,
      customAffiliation,
    };

    console.log("서버로 보내는 데이터 : " + params);
    console.log("이름" + params.name);
    console.log("아이디" + params.id);
    console.log("비번" + params.password);
    console.log("폰번" + params.phoneNumber);
    console.log("소속" + params.affiliation);
    console.log("소속없을 시 입력" + params.customAffiliation);

    //모달 open
    setSuccessModalOpen(true);

    // try {
    //   // API 호출
    //   const response = await SignUpApi.postSignUp({
    //     params,
    //     headers: {}, // 헤더가 필요하다면 여기에 추가
    //   });
    //   debugger;

    //   // API 응답 처리
    //   console.log("회원가입 성공:", response);
    //   // 원하는 작업 수행...
    // } catch (error) {
    //   // API 호출 실패 시 예외 처리
    //   console.error("회원가입 실패:", error);
    //   // 원하는 작업 수행...
    // }
  };

  //모달 닫기
  const handleModalClose = () => {
    setSuccessModalOpen(false);
    // 로그인 페이지로 이동
    navigate("/signIn"); // signIn 페이지로 이동
  };

  return (
    <SignUp
      name={name}
      id={id}
      password={password}
      passwordConfirm={passwordConfirm}
      phoneNumber={phoneNumber}
      affiliation={affiliation}
      customAffiliation={customAffiliation}
      successModalOpen={successModalOpen}
      onNameChange={handleNameChange}
      onIdChange={handleIdChange}
      onPasswordChange={handlePasswordChange}
      onPasswordConfirmChange={handlePasswordConfirmChange}
      onPhoneNumberChange={handlePhoneNumberChange}
      onAffiliationChange={handleAffiliationChange}
      onCustomAffiliationChange={handleCustomAffiliationChange}
      handleSubmit={handleSubmit}
      handleModalClose={handleModalClose}
    />
  );
};

export default SignUpContainer;
