import styled from "@emotion/styled";
import { Menu } from 'antd'

export const MenuTitle = styled.div`
  color:${props => props.theme.textSecondary};
  padding: 18px 12px;
`

export const MenuItem = styled(Menu.Item)`
  a {
    justify-content: space-between;
    display: flex;
  }
  min-width: 170px;
`




