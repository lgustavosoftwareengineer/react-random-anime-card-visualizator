import Image from 'next/image'
import styled from 'styled-components'

export const Name = styled.p`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.onPrimary};
  margin-right: 20px;
`

export const Avatar = styled(Image)`
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.onPrimary};
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
`
