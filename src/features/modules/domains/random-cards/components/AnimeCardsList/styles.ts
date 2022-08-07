import styled from 'styled-components'

export const ListContainer = styled.div`
  display: flex;
  width: 100%;
  overflow-y: auto;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 48px;
  padding-bottom: 100px;

  @media only screen and (max-width: 600px) {
    & {
      justify-content: flex-start;
      flex-direction: column;
      flex-wrap: nowrap;
    }
  }
`
