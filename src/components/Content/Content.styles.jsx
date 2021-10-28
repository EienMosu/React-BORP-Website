import styled from "styled-components";

export const Container = styled.div`
  width: 99vw;
  height: 780px;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 60%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Left = styled.div`
  display: flex;
  align-items: flex-end;
  margin-right: 200px;
  margin-left: 50px;
`;

export const Image = styled.img`
  width: 400px;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin-right: 50px;
`;

export const Title = styled.h1`
  font-size: 45px;
  font-weight: 600;
`;

export const Desc = styled.span`
  font-size: 15px;
  font-weight: 300;
  margin: 50px 0px;
  line-height: 25px;
`;

export const Anchor = styled.a`
  color: gray;
  text-decoration: none;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  width: 200px;
  height: 60px;
  margin-right: 40px;
  margin-bottom: 100px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  background-color: #2b2b2b;
  border: none;
  border-radius: 7px;
  cursor: pointer;
`;
