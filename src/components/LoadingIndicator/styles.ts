import styled from 'styled-components'

export const LoadingIndicatorContainer = styled.div`
  border: 4px solid ${({ theme }) => theme.colors.onPrimary};
  border-top: 4px solid ${({ theme }) => theme.colors.primary};
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
