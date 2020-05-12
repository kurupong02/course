import styled from '@emotion/styled'

export const Content = styled.div`
  padding: 30px 0px;
  .ant-typography {
    text-align: center;
  }
  h3.ant-typography,
  .ant-typography h3 {
    font-weight: 300;
  }
`
export const Div = styled.div`
  border: ${(props) => (props.select ? 4 : 0)}px solid
    ${(props) => props.theme.cardSelectBorderColor};
  border-radius: 6px;
  padding: 20px;
  img {
    height: 140px;
    margin-top: 20px;
  }
`
