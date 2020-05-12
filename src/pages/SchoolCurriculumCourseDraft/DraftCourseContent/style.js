import styled from '@emotion/styled'
import { Collapse as CollapseAntd } from 'antd'

export const Content = styled.div`
  .ant-collapse {
    border: 0px solid #d9d9d9;
    background-color: #fff;
    border-radius: 10px;
  }

  .ant-collapse-item-active {
    background: #fff;

    border-left-color: #00bf9c;
  }

  .ant-collapse > .ant-collapse-item {
    border-bottom: 0px solid #d9d9d9;
  }

  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    font-size: 16px;
    font-weight: bold;
    padding-left: 50px;
  }

  .ant-collapse
    > .ant-collapse-item
    > .ant-collapse-header
    .ant-collapse-arrow {
    top: 40%;
    left: 30px;
  }

  .ant-collapse-content {
    background-color: transparent;
  }
`

export const CollapseCustom = styled(CollapseAntd)`
  .ant-collapse-item {
    border-left: 6px solid #fff;
  }

  .ant-collapse-item-active {
    border-left: 6px solid ${({ color }) => color};
  }
`
