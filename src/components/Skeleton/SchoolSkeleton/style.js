import styled from '@emotion/styled'

export const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 12px 0px;
  padding: 30px;
  text-align: center;
  background-color: ${(props) => props.theme.cardBackground};
  border-radius: 6px;

  .css-1x45xix-skeletonStyles-Skeleton {
    background-color: ${(props) => props.theme.skeletonColor};
    background-image: ${(props) => props.theme.skeletonHighlightColor};
    line-height: inherit;
  }
`
