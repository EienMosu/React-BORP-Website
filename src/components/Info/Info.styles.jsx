import styled from "styled-components";

export const Container = styled.div`
  width: 99vw;
  height: 550px;
  display: flex;
  background-color: ${(props) => (props ? props.background : "white")};
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
  margin-right: ${(props) => props.marginRight};
  margin-left: ${(props) => props.marginLeft};
`;

export const Image = styled.img`
  width: ${(props) => props.width};
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  text-align: ${props=> (!props.text ? "center" : props.text)};
`;

export const Title = styled.h1`
  font-size: 35px;
  font-weight: 600;
`;

export const Desc = styled.span`
  font-size: 15px;
  font-weight: 300;
  margin: 50px 0px;
  line-height: 25px;
  margin-bottom: 120px;
`;
