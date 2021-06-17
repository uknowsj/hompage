import React from 'react'
import {Header} from 'components/Header'
import {Title} from 'style/CommonStyle';

const Comp1 = () => {
  return (
    <div>
      <Title>Title of Comp1</Title>
      ...
    </div>
  )
}
const Comp2 = () => {
  return (
    <div>
      <Title>Title of Comp1</Title>
      ...
    </div>
  )
}
//
const MainPage = () => {
  return (
    <div>
      <Header />
      <Comp1 />
      <Comp2 />
    </div>
  )
}

export default MainPage
