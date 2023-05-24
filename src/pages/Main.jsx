import React, { useState } from "react";
import styled from "styled-components";
import data from "./data.json";
import { useNavigate } from "react-router-dom";

const Background = styled.div`
  position: relative;
  height: 844px;
  background: #902443;
`;

const WhiteBox = styled.div`
  position: relative;
  margin: auto;
  height: 571px;
  width: 25%;
  top: 10%;
  border-radius: 10px;
  background: #ffffff;
  boxshadow: 1px black;
  box-shadow: 0px 0px 4px 2px rgba(100, 100, 0.25);
`;

const Icon = styled.div`
  position: relative;
  margin: auto;
  padding-top: 15%;
  height: 120px;
  width: 120px;
  left: 2%;
`;

const Title = styled.div`
  position: absolute;
  width: 340px;
  height: 48px;
  top: 280px;
  margin-top: -35%;
  left: -3%;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 1000;
  font-size: 20px;
  line-height: 24px;
  text-align: center;

  color: #5e162b;
`;

const Name = styled.div`
  position: absolute;
  width: 12px;
  height: 0px;
  left: 40px;
  top: 48%;

  border: 5px solid #dc7190;
  transform: rotate(90deg);
`;

const NameText = styled.div`
  position: absolute;
  width: 50px;
  height: 26px;
  left: 55px;
  top: 47%;

  font-family: "SUIT";
  font-style: normal;
  font-weight: 550;
  font-size: 20px;
  line-height: 20px;
  text-align: center;

  color: #000000;
`;

const Namebox = styled.input`
  position: absolute;
  width: 250px;
  height: 35px;
  left: 40px;
  top: 52%;

  background: #cd99a6;
  border-radius: 50px;
`;

const Phone = styled.div`
  position: absolute;
  width: 12px;
  height: 0px;
  left: 40px;
  top: 65%;

  border: 5px solid #dc7190;
  transform: rotate(90deg);
`;

const PhoneText = styled.div`
  position: absolute;
  width: 100px;
  height: 26px;
  left: 55px;
  top: 64%;

  font-family: "SUIT";
  font-style: normal;
  font-weight: 550;
  font-size: 20px;
  line-height: 20px;
  text-align: center;

  color: #000000;
`;

const Phonebox = styled.input`
  position: absolute;
  width: 250px;
  height: 35px;
  left: 40px;
  top: 69%;

  background: #cd99a6;
  border-radius: 50px;
`;

const Button = styled.div`
  position: absolute;
  width: 93px;
  height: 36px;
  left: 115px;
  top: 470px;

  background: #902443;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: 20px;
`;

const ButtonText = styled.div`
  padding-top: 4px;
`;

const Footer = styled.div`
  position: absolute;
  width: 300px;
  height: 29px;
  left: 3%;
  top: 620px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 29px;
  /* identical to box height */

  text-align: center;

  color: #ffffff;
`;

const Main = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const discriminate = () => {
    let foundMatch = false;

    for (let i = 0; i < data.length; i++) {
      if (
        data[i].name === name &&
        data[i].phone === phoneNumber &&
        data[i].pass === 1
      ) {
        navigate("/Pass", { state: data[i].name });
        foundMatch = true;
        break;
      } else if (
        data[i].name === name &&
        data[i].phone === phoneNumber &&
        data[i].pass === 0
      ) {
        navigate("/Fail");
        foundMatch = true;
        break;
      }
    }

    if (!foundMatch) {
      // 등록되지 않은 성함/번호에 대한 처리
      alert(
        "등록되지 않은 성함/번호입니다. 성함과 번호를 다시 한 번 확인해주세요!"
      );
    }
  };

  return (
    <Background>
      <WhiteBox>
        <Icon>
          {/*로고 이미지*/}
          <img
            src={`${process.env.PUBLIC_URL}/images/ddwu_logo 1.png`}
            alt="logo"
            width="110px"
          />
        </Icon>
        <Title>
          동덕여자대학교 멋쟁이사자처럼
          <br />
          11기 아기사자 합격자 발표
        </Title>
        <Name></Name>
        <NameText>성함</NameText>
        <Namebox type="text" value={name} onChange={handleNameChange}></Namebox>

        <Phone></Phone>
        <PhoneText>전화번호</PhoneText>
        <Phonebox
          type="text"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        ></Phonebox>

        <Button type="submit" onClick={discriminate}>
          <ButtonText>입력</ButtonText>
        </Button>
        <Footer>DONGDUK x LIKELION</Footer>
      </WhiteBox>
    </Background>
  );
};

export default Main;
