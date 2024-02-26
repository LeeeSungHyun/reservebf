import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpApi from "../../apis/signup-api";
import SignUp from "../../templates/Login/SignUp";

const SignUpContainer: React.FC = () => {
  const navigate = useNavigate();

  // 각 입력 필드에 대한 상태(state) 정의
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [idCheck, setIdCheck] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [customAffiliation, setCustomAffiliation] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMsg, setModalMsg] = useState("");

  // 이름 입력 필드 변경 이벤트 핸들러
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  // 아이디 입력 필드 변경 이벤트 핸들러
  const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);

    // 아이디 입력 변경 하는 순간 중복확인 값 F
    setIdCheck(false);
  };

  // 비밀번호 입력 필드 변경 이벤트 핸들러
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setPasswordsMatch(event.target.value === passwordConfirm);
  };

  // 비밀번호 확인 입력 필드 변경 이벤트 핸들러
  const handlePasswordConfirmChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordConfirm(event.target.value);
    setPasswordsMatch(event.target.value === password);
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

  // 공백 여부를 확인하는 함수
  const isNotBlank = (value: string) => {
    return value.trim() !== "";
  };
  // state 값들을 검사하여 공백 여부를 확인하는 함수
  const areFieldsNotBlank = () => {
    return (
      isNotBlank(name) &&
      isNotBlank(id) &&
      isNotBlank(password) &&
      isNotBlank(passwordConfirm) &&
      isNotBlank(phoneNumber) &&
      isNotBlank(affiliation)
    );
  };

  // 유효성검사
  const validation = () => {
    if (!idCheck) {
      setModalMsg("아이디 중복확인을 해주세요");
      return false;
    } else if (!passwordsMatch) {
      setModalMsg("비밀번호 확인이 일치하지 않습니다");
      return false;
    } else if (!areFieldsNotBlank()) {
      setModalMsg("모든 정보를 입력해주세요");
      return false;
    } else {
      setModalMsg(
        "회원가입이 신청되었습니다. 관리자 승인 후 로그인이 가능합니다."
      );
      return true;
    }
  };

  const idCheckOnClick = async () => {
    // DB 계정 조회 후 중복여부 확인
    try {
      if (isNotBlank(id)) {
        console.log(id);
        const response = await SignUpApi.getUser(id);

        if (response.data.data !== 0) {
          setIdCheck(false);
          alert("아이디가 존재합니다.");
        } else {
          setIdCheck(true);
          alert("사용 가능한 아이디입니다.");
        }
      } else {
        alert("아이디를 입력해주세요");
      }
    } catch (error) {
      // API 호출 실패 시 예외 처리
      setIdCheck(false);
      console.error("회원조회 실패:", error);
      alert("회원조회 실패 : " + error);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // 페이지 리로드 방지
    event.preventDefault();
    if (validation()) {
      try {
        // API 호출
        const response = await SignUpApi.postSignUp({
          name: name,
          memberId: id,
          password: password,
          phone: phoneNumber,
          team: affiliation,
        });
        // API 응답 처리
        console.log("회원가입 성공:", response);
        // 원하는 작업 수행...
      } catch (error) {
        // API 호출 실패 시 예외 처리
        console.error("회원가입 실패:", error);
        // 원하는 작업 수행...
      }

      //모달 open
      setModalOpen(true);
    } else {
      //모달 open
      setModalOpen(true);
    }
  };

  //모달 닫기
  const handleModalClose = () => {
    setModalOpen(false);
    // 로그인 페이지로 이동
    if (validation()) {
      navigate("/signIn"); // signIn 페이지로 이동
    }
  };

  return (
    <SignUp
      name={name}
      id={id}
      password={password}
      passwordConfirm={passwordConfirm}
      passwordsMatch={passwordsMatch}
      phoneNumber={phoneNumber}
      affiliation={affiliation}
      customAffiliation={customAffiliation}
      modalOpen={modalOpen}
      modalMsg={modalMsg}
      onNameChange={handleNameChange}
      onIdChange={handleIdChange}
      onPasswordChange={handlePasswordChange}
      onPasswordConfirmChange={handlePasswordConfirmChange}
      onPhoneNumberChange={handlePhoneNumberChange}
      onAffiliationChange={handleAffiliationChange}
      onCustomAffiliationChange={handleCustomAffiliationChange}
      handleSubmit={handleSubmit}
      handleModalClose={handleModalClose}
      idCheck={idCheck}
      idCheckOnClick={idCheckOnClick}
    />
  );
};

export default SignUpContainer;
