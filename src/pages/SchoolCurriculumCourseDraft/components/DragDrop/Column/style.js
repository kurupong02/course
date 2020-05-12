import styled from '@emotion/styled'

export const Container = styled.div`
  background: #dedede;
  border-radius: 6px;
  .more > :last-child {
    position: relative;
    right: 13px;
  }
`
export const Header = styled.div`
  background: #fff;
  border-radius: ${({ isDragging }) => (isDragging ? 6 : 0)}px;
  border-radius: ${({ isDragging }) => (isDragging ? 6 : 0)}px;
  border: ${({ isDragging }) => (isDragging ? 1 : 0)}px solid #d9d9d9;
`

export const Drag = styled.div`
  padding: 0px;
  position: absolute;
  left: 0;
  top: 14px;
  font-size: 18px;
  color: #a6a6a6;
  display: none;
`

export const Card = styled.div`
  border-top: 8px solid #bdc8ff;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  min-height: 1px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 rgba(21, 27, 38, 0.15);
  padding: 15px;
`
