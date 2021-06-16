import styled, { css } from 'styled-components'

export const DefaultLayout = css`
  width: 100%;
  max-width: 1920px;
  padding: 0 15%;

  @media screen and (max-width:768px) {
    padding: 0 6%;
  }
`

export const ComponentStyle = css`
  ${DefaultLayout}
  padding-top: 110px;
  padding-bottom: 110px;
  width: 100%;
  border: 1px solid red;
`

export const StyledContainer = styled.div`
  ${DefaultLayout}
  display: flex;
  padding: 110px 15%;
  width: 100%;
  min-height: 600px;
  border: 1px solid red;

`

export const Content = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: ${({center})=> center&&'center'};
`

export const Bar = styled.div`
  width: 80px;
  height: 2px;
  background-color: black;
  margin-top: 30px;
`

export const Title = styled.div`
  font-size: 3rem;
  font-weight: 600;
  word-spacing: -5px;
  text-align:${({center}) => center&&'center'};
`

export const MiddleTitle = styled.div`
  font-size: ${props => props.size||'36px'};
  font-weight: 600;
  word-spacing: -5px;
` 

export const TextStyle = styled.div`
  font-size: 1rem;
  font-weight: lighter;
  line-height: 2;
  margin-top: ${props=> props.margin||'36px'};
`
export const Text = ({children, margin}) => {
  return (
    <TextStyle margin={margin}>
      {
        children.map(child => <p>{child}</p>)
      }
    </TextStyle>
  )
}