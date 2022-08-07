import styled, { css } from 'styled-components'

export const Title = styled.p`
  height: 40px;
  font-size: 1.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const ContainerCSS = css`
  width: 200px;
  flex-direction: column;
`

export const Container = styled.div`
  ${ContainerCSS}
  padding: 20px;
  justify-content: space-between;
  text-align: center;
`

export const LoadingContainer = styled.div`
  ${ContainerCSS}
  justify-content: center;
  align-items: center;
`

export const ContentText = styled.p`
  height: 20%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`

export const Header = styled.div``
