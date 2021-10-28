import styled from "styled-components";

export const Container = styled.div`
  width: 99vw;
  height: 550px;
  display: flex;
  justify-content: center;
  background-color: #e6e6e6;
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
`;

export const Image = styled.img`
  width: 280px;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Player = styled.iframe `
  width: 600px;
  height: 350px;
  border-radius: 30px;
  margin-bottom: 80px;
`