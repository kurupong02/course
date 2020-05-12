import styled from '@emotion/styled'

export const Content = styled.div`
  .ql-editor {
    min-height: ${(props) => props.minHeight}px;
    margin-top: 2;
    cursor: text;
    p {
      word-break: normal;
    }
  }
`
