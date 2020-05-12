import styled from '@emotion/styled'
import { Button } from 'antd'

export const AddQuestionButton = styled(Button)`
  font-size: 16px;
  font-weight: 600;
  color: #6f7782;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 130px;
  margin-top: 20px;
  padding: 4px 0px;

  svg {
    margin: 0 10px 1px 0;
  }
`

export const Container = styled.div`
  background: #dedede;
  .more > :last-child {
    position: relative;
    right: 13px;
  }
`

export const Header = styled.div`
  background: ${({ isSelect }) => (isSelect ? '#edf8ff' : '#fff')};
  border-radius: ${({ isDragging }) => (isDragging ? 6 : 0)}px;
  border-radius: ${({ isDragging }) => (isDragging ? 6 : 0)}px;
  border: ${({ isDragging }) => (isDragging ? 1 : 0)}px solid #d9d9d9;
  cursor: pointer;
  border: 1px solid #e8ecee;
  margin-bottom: -1px;
  margin-top: -1px;
  position: unset;
  border-left-width: ${({ isDragging }) => (isDragging ? 1 : 0)}px;
  border-right-width: ${({ isDragging }) => (isDragging ? 1 : 0)}px;
  z-index: 0;
  &:hover {
    background-color: ${({ isSelect }) => (isSelect ? '#edf8ff' : '#f6f8f9')};
    border-color: #cbd4db;
  }

  &:focus {
    background-color: ${({ isSelect }) => (isSelect ? '#edf8ff' : '#f6f8f9')};
    border-color: #14aaf5;
  }

  &:hover .dragging {
    display: ${({ isDragging }) => (isDragging ? 'none' : 'block')};
  }

  &:hover .details {
    display: ${({ isDragging }) => (isDragging ? 'none' : 'block')};
  }

  &:hover .line {
    display: block;
  }

  .more > :last-child {
    position: relative;
    right: 13px;
  }
`

export const Content = styled.div`
  width: 100%;
  height: 35px;
  position: relative;
  padding-left: 50px;
  display: flex;
  align-items: center;
`

export const Drag = styled.div`
  padding: 0px;
  position: absolute;
  left: 0;
  top: 8px;
  font-size: 18px;
  color: #a6a6a6;
  display: ${({ isDragging }) => (isDragging ? 'block' : 'none')};
`

export const Line = styled.div`
  position: absolute;
  top: 35px;
  height: 1px;
  background-color: #cbd4db;
  display: none;
  width: 100%;
  left: 0;
`

export const Details = styled.div`
  padding: 0px;
  position: absolute;
  right: 15px;
  top: 5px;
  display: ${({ isDragging }) => (isDragging ? 'block' : 'none')};
`
