import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background-color: #ffffffcf;
`;

export const Wrapper = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Logo = styled.img`
  width: 150px;
`;

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Status = styled.h3`
  font-size: 14px;
  font-weight: 400;
`;

export const LiveStatus = styled.span`
  font-size: 14px;
  font-weight: 300;
  color: #21a721;
  margin-left: 10px;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
`;

export const Links = styled.a`
  color: #6d6d6d;
  text-decoration: none;
  font-size: 12px;
  font-weight: 700;
  margin-right: 20px;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;
