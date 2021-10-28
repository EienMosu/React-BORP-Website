import styled from "styled-components";

export const Container = styled.div`
  width: 99vw;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #292929;
`;

export const Wrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Left = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Image = styled.img`
  width: 200px;
`;

export const Middle = styled.div `
    display: flex;
    align-items: center;
`

export const Copyright = styled.span `
    font-size: 16px;
    color: white;
    margin-bottom: 50px;
`

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const List = styled.ul `
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`

export const Icons = styled.li `
    margin-bottom: 50px;
    margin-right: 20px;
`
