import styled from 'styled-components'

export const LoadingIndicatorContainer = styled.div`
  border: 8px solid ${({ theme }) => theme.colors.onPrimary};
  border-top: 8px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: 100px;
  height: 100px;
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
