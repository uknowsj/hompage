import { Grid, TextBox, TitleBox, Marginer } from 'elements';
import React from 'react'
const TextCard = (props) => {
  const { 
    title_size, text_size, title, text, 
    inner_margin, outer_margin } = props;
  
  return (
    <Grid margin={outer_margin}>
      <TitleBox size={title_size}>{title}</TitleBox>
      <Marginer margin={inner_margin}/>
      <TextBox size={text_size}>{text}</TextBox>
    </Grid>
  )
}

TextCard.defaultProps = {
  title_size: "med",
  text_size: "1.6rem",
  title: 'title',
  text: 'text',
  inner_margin: '15px',
  outer_margin: 0,
}

export default TextCard
