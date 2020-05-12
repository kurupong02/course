import styled from '@emotion/styled'
import { Collapse as CollapseAntd } from 'antd'

export const CollapseCustom = styled(CollapseAntd)`
  .ant-collapse-item {
    border-left: 6px solid #fff;
  }

  .ant-collapse-item-active {
    border-left: 6px solid ${({ color }) => color};
  }
`
