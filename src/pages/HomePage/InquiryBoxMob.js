import React from 'react'
import styled, {css} from 'styled-components'
import { Button } from 'elements/Button'

const CustomButton = styled(Button)`  
  margin-top: 60px;
  border: 1px solid #adb5bd80; 
`
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;

  box-shadow: 6px 6px 12px rgba(0,0,0,0.3);
  border-radius: 16px;

  padding: 40px;

  @media screen and (max-width:768px) {
    width: 100%;
    padding: 40px;
  }
  
`
const StyledInput = styled.input`
  margin: 20px 0;
  width:100%;
  height: 30px;
  ${props => {
    return css`
      width: ${props.width};
      height: ${props.height};
    `
  }};
  border: none;
  border-bottom: 1px solid #adb5bd;

  ::placeholder {
    color: #ced4da;
    transition: .3s ease-out;
    }

  &:focus {
    outline:none;
    border: none;
    border-bottom: 1px solid #343a40;

    ::placeholder {
    color: #343a40;
    }
    transition: .3s ease-out;
  }
`

const TextAreaStyled = styled.textarea`
  width: 100%;
  height: 60px;
  resize: none;
  margin-top: 20px;

  border: none;
  border-bottom: 1px solid #adb5bd;

  ::placeholder {
    color: #ced4da;
    transition: .3s ease-out;
  }
  
  &:focus {
    outline:none;
    border: none;
    border-bottom: 1px solid #343a40;

  }
`
const FlexBox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width:100%;
`

const InquiryBoxMob = ({children}) => {
  return (
   <InputBox>
     <FlexBox align="flex-start">
      {children}
     </FlexBox>
     <StyledInput type="text" name="name" placeholder="이름" />
     <StyledInput type="email" name="email" placeholder="이메일" />
     <StyledInput type="text" name="title" placeholder="제목" />
     <TextAreaStyled content type="text" name="contents" placeholder="내용" />
     <CustomButton>
          문의하기
    </CustomButton>
    </InputBox>
  )
}

export default InquiryBoxMob
