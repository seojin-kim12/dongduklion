import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Background = styled.div`
  position: relative;
  height: 844px;
  background: #fae4ea;
`;

const WhiteBox = styled.div`
  position: relative;
  width: 32%;
  height: 571px;
  top: 10%;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 0px 4px 2px rgba(100, 100, 100, 0.25);
  border-radius: 5px;
`;

const Title = styled.div`
  position: absolute;
  width: 195px;
  height: 80px;
  left: 101px;
  top: 85px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 43px;
  text-align: center;

  color: #000000;
`;

const Letter = styled.div`
  position: relative;
  margin-left: 30.5%;
  margin-top: -3.5%;
`;

const ContentBox = styled.div`
  position: relative;
  top: 7%;
  margin: auto;
`;

const Logo = styled.div`
  position: relative;
  margin: auto;
  height: 43px;
  width: 43px;
  padding-top: 10px;
  padding-left: -5%;
  margin-left: 170px;
`;

const Name = styled.div`
  position: absolute;
  width: 203px;
  height: 23px;
  left: -29px;
  top: 200px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: #0075ff;
`;

const Names = styled.span`
  position: absolute;
  width: 203px;
  height: 23px;
  left: 50px;
  top: 200px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: black;
`;

const N = styled.span`
  position: absolute;
  width: 203px;
  height: 23px;
  left: 73px;
  top: 200px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;

  color: black;
`;

const TextBox = styled.div`
  position: absolute;
  width: 380px;
  height: 250px;
  left: 19px;
  top: 257px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.01em;

  color: #000000;
`;

const Pass = () => {
  const location = useLocation();
  const name = location.state;

  return (
    <Background>
      <WhiteBox>
        <ContentBox>
          <Title>
            합격을
            <br />
            축하합니다!
          </Title>
          <Logo>
            <img
              src={`${process.env.PUBLIC_URL}/images/ddwu_logo 5.png`}
              alt="logo"
              width="60px"
            />
            <Name>{name}</Name>
            <Names>님</Names>
            <N>은</N>
          </Logo>
          <TextBox>
            동덕여대 멋사 11기에 최종합격 하셨습니다! 🎉
            <br />
            긴 선발 과정에 참여하시느라 고생 많으셨습니다.
            <br />
            자세한 사항은 discord를 통해 안내드리겠습니다.
            <br />
            <br />
            https://discord.gg/BSHH7mck
            <br />
            <br />
            3월 17일까지 디스코드에 들어와주세요!
            <br />
            <br />
            3/26(일) 동덕 멋사 OT에서 만나요~
            <br />
            *장소 추후 안내 예정
          </TextBox>
        </ContentBox>
      </WhiteBox>
      <Letter>
        <img
          src={`${process.env.PUBLIC_URL}/images/envelope.png`}
          alt="logo"
          width="500px"
        />
      </Letter>
    </Background>
  );
};

export default Pass;
