import styled, { css } from 'styled-components'

export const defaultLayout = css`
  width: 100%;
  max-width: 1920px;
  padding: 0 15%;

  @media screen and (max-width:768px) {
    padding: 0 6%;
  }
`

export const ComponentStyle = css`
  ${defaultLayout}
  width: 100%;
  border: 1px solid red;
`