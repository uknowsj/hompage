import styled, { css } from 'styled-components'
import Button,{StyledButton} from 'components/Button'

const InquireContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  height: 540px;
  padding:40px 60px;
  box-shadow: 6px 6px 12px rgba(0,0,0,0.3);
  border-radius: 16px;

  @media screen and (max-width:1296px) {
    width: 100%;
    height: auto;
    padding: 40px 30px;
  }
`
const InquireItem = styled.div`
  display: flex;
  padding-top: 5%;
  width: 100%;
  justify-content: ${({justify}) => justify||'space-between'};
  align-items: center;
  border: 1px solid white;
`
const StyledInput = styled.input`
  margin-left: 10px;
  width:100%;
  ${props => {
    return css`
      width: ${props.width};
      height: ${props.height};
    `
  }};
  border: 1px solid #adb5bd80; 
  &:focus {
    outline:none;
  }
`
const LineInput = styled(StyledInput)`
  border-top-style: hidden;
  background: transparent;
  outline: none;
  border-left-style: hidden;
  border-right-style: hidden;
  border-bottom-style: solid;
  border-bottom-width: 1px;
`


const ItemWrapper = styled.div`
  display: flex;
  width: 100%;
  div:nth-child(1) { 
    font-size: 14px;
    min-width: 50px;
  }
`

const CustomButton = styled(StyledButton)`  
  margin: unset;
  border: 1px solid #adb5bd80; 
`


const InquireBox = () => {
  return(
    <InquireContainer>
      <InquireItem>
        <ItemWrapper>
          <div>이름</div><LineInput />
        </ItemWrapper>
          <div style={{width:'80px'}}></div>
        <ItemWrapper>
          <div>이메일</div><LineInput /> 
        </ItemWrapper>
      </InquireItem>
      <InquireItem>
        <ItemWrapper>
          <div>제목</div><LineInput />
        </ItemWrapper>
      </InquireItem>
      <InquireItem>
        <ItemWrapper>
          <div>메세지</div><StyledInput width={'100%'} height={'250px'}/>
        </ItemWrapper>
      </InquireItem>
      <InquireItem justify={'flex-end'}>
        <CustomButton>
          문의하기
        </CustomButton>
      </InquireItem>
    </InquireContainer>
  )
} 

export default InquireBox