import styled from 'styled-components'

export const CardContent = styled.div`
  display: flex;
  padding: 20px;
  width: 200px;
  height: 500px;
  flex-direction: column;
  justify-content: space-between;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
  }
`
