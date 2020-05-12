import styled from "@emotion/styled";

export const Div = styled.div`
  justify-content: center; 
  display: flex; 
  align-items: center; 
  cursor: pointer;

  div {
    text-align: center;
  }
  .ant-avatar > img {
    padding: 10px;
    background-color: ${props => props.theme.buttonAddColor};
  }

  h3.ant-typography, .ant-typography h3 {
    margin-top: 20px;
    color:  ${props => props.theme.buttonAddColor};
    font-weight: 400;
  }
`

