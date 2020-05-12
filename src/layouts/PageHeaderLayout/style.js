import styled from '@emotion/styled'

export const Content = styled.div`
  background-color: ${(props) => props.theme.background};
  .ant-tabs-bar {
    margin: 0;
  }

  .ant-tabs-tab {
    padding: 10px 20px;
  }

  .ant-tabs-nav .ant-tabs-tab:hover {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background-color: rgb(73, 114, 255);
    color: #fff;
  }

  .ant-tabs-nav .ant-tabs-tab a:hover {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background-color: rgb(73, 114, 255);
    color: #fff;
  }

  .ant-tabs-nav .ant-tabs-tab-active {
    color: rgb(73, 114, 255);
  }

  .ant-tabs-ink-bar {
    background-color: rgb(73, 114, 255);
  }

  .ant-page-header-ghost {
    padding: 16px 24px 0px 24px;
  }

  .ant-tabs-bar {
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
  }
`
