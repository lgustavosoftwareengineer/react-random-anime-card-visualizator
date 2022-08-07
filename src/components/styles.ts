import { ResponsiveTextMediaQuery } from 'src/styles'
import { css } from 'styled-components'

export const InputCSS = css`
  margin-bottom: 20px;
  border-radius: 6px;
  padding: 20px;
  font-size: 1em;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);

  ${ResponsiveTextMediaQuery}
`
