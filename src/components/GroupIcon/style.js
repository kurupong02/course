import styled from '@emotion/styled'

export const GroupIconStyle = styled.div`
  position: relative;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  font-size: 14px;
  .ant-avatar {
    font-size: 18px;
    position: absolute;
    border: 2px solid rgb(255, 255, 255);
  }
  .ant-avatar-string {
    font-size: 15px;
  }
`
