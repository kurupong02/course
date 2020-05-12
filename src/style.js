import styled from '@emotion/styled'

export const Content = styled.div`
  . ant-layout,
  .ant-layout * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .ant-layout-sider {
    background: ${(props) => props.theme.sideberBackground};
  }

  .ant-layout {
    background: ${(props) => props.theme.background};
  }

  .ant-menu.ant-menu-dark,
  .ant-menu-dark .ant-menu-sub {
    background-color: transparent;
  }

  .ant-menu.ant-menu-dark .ant-menu-item-selected {
    background-color: ${(props) => props.theme.sideberBackgroundSelected};
  }

  .ant-menu-dark .ant-menu-item-selected .anticon {
    color: ${(props) => props.theme.sideberIconSelected};
  }

  .ant-menu-dark .ant-menu-item-selected .anticon + span {
    color: ${(props) => props.theme.sideberIconSelected};
  }

  .ant-menu-dark .anticon {
    color: ${(props) => props.theme.sideberIcon};
  }

  .ant-menu-dark .ant-menu-item .anticon + span {
    color: ${(props) => props.theme.sideberIcon};
  }

  .ant-layout-header {
    background: ${(props) => props.theme.headerBackground};
    border-bottom: 1px solid ${(props) => props.theme.line};
    padding: 0 30px;
  }

  .ant-page-header-heading-title {
    color: ${(props) => props.theme.headerTextTitle};
  }

  .ant-divider {
    color: ${(props) => props.theme.textNote};
  }

  .ant-divider-dashed {
    border-color: ${(props) => props.theme.borderColor};
    border-width: 1px 0 0;
  }

  .ant-descriptions-item-label {
    color: ${(props) => props.theme.textNote};
  }

  .ant-descriptions-row > th {
    padding-bottom: 1px;
  }

  .ant-btn-primary {
    background-color: ${(props) => props.theme.btnBackground};
    border-color: ${(props) => props.theme.btnBackground};
    border-radius: 4px;
  }

  .ant-btn-primary: hover {
    opacity: 0.8;
  }

  h4.ant-typography,
  .ant-typography h4 {
    color: ${(props) => props.theme.blue1};
  }

  .ant-layout-header {
    height: 72px;
  }

  .ant-breadcrumb {
    font-size: 13px;
    font-weight: 600;
    line-height: normal;
  }

  .ant-drawer-right.ant-drawer-open .ant-drawer-content-wrapper {
    border-left: 1px solid #e8ecee;
    border-top: 1px solid #e8ecee;
    box-shadow: 0 5px 20px 0 rgba(21, 27, 38, 0.08);
  }

  .ant-form-item-label > label {
    color: ${(props) => props.theme.gray2};
  }

  .label {
    color: ${(props) => props.theme.gray2};
  }
`
