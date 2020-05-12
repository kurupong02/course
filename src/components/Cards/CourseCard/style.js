import styled from '@emotion/styled'
import { Avatar, Typography } from 'antd'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.cardBorder};
  border-radius: 8px;
  cursor: pointer;
  background-color: ${(props) => props.theme.cardBackground};

  .ant-typography-ellipsis-multiple-line {
    height: 40px;
    margin-top: 0px;
    color: ${(props) => props.theme.textNote};
  }

  :hover {
    box-shadow: 3px 3px 10px #0000001a;
  }
`

export const BackgroundImage = styled.div`
  height: 180px;
  background-image: ${(props) => `url(${props.src})`};
  background-position: center;
  background-size: cover;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`

export const ProfileImage = styled(Avatar)`
  position: absolute;
  right: 20px;
  top: 160px;
`

export const IconWithText = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  .ant-typography {
    color: ${(props) => props.theme.textSub};
  }
  img {
    margin-right: 5px;
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

export const Footer = styled.div`
  justify-content: space-between;
  display: flex;
`
