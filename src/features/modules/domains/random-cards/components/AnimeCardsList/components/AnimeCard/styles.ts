import styled, { css } from 'styled-components'

import Image from 'next/image'

export const Title = styled.p`
  height: 40px;
  font-size: 1.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 22px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
`

export const CardContainer = styled.div`
  margin: 10px;
`

export const Container = styled.div`
  width: 200px;
  flex-direction: column;
  padding: 20px;
  width: 20vw;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    & {
      width: 80vw;
    }
  }
`
export const CardInnerContainer = styled.div`
  border: 2px dashed ${({ theme }) => `${theme.colors.primary}`};
  border-radius: 5%;
  padding: 20px;
`

export const TextCSS = css`
  height: 20%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`

export const ContentText = styled.p`
  ${TextCSS};
`

type CardNumberProp = {
  alignment?: 'center' | 'end' | 'left' | 'right' | 'start'
  color?: string
}

export const CardNumber = styled.p<CardNumberProp>`
  ${TextCSS}
  color: ${({ color = '' }) => color};
  font-size: 1.5rem;
  font-weight: bold;
  text-align: ${({ alignment = 'center' }) => alignment};
`

export const Header = styled.div``

export const AnimePosterImage = styled(Image)`
  border-radius: 20px;
`
