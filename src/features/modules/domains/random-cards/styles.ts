import styled from 'styled-components'

export const LoadingIndicator = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid red;
  border-radius: 50%;
  width: 5vw;
  height: 5vw;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`

export const CardContainer = styled.div`
  padding: 2px 16px;
`
