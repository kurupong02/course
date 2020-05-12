import styled from '@emotion/styled'
import { Typography } from 'antd'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.cardBorder};
  border-radius: 8px;
  cursor: pointer;
  background-color: ${(props) => props.theme.cardBackground};

  .ant-typography-ellipsis-multiple-line {
    height: 40px;
    margin-top: 10px;
    color: ${(props) => props.theme.textNote};
  }

  :hover {
    box-shadow: 3px 3px 10px #0000001a;
  }
`
export const Title = styled(Typography.Text)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 50px;
  color: ${(props) => props.theme.textTitle};
  font-size: 16px;
`
