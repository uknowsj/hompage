// import React from 'react';
// import styled, { css } from 'styled-components';

// const BannerContainer = styled.div`
//   overflow: clip;
//   width: 100vw;
//   position: relative;
// `
// const VideoWrapper = styled.div`
//   position: relative;
//   max-height: 100vh;
  
//   video {
//     position: relative;
//     left: 50%;
//     transform: translateX(-50%);
    
//     width: 1920px;
//   }

//   div { //TextBox
//     position: absolute;
//     left: 50%;
//     top: 50%;
//     transform: translate(-50%,-50%);
//     width: fit-content;
//   }

//   @media screen and (max-width:768px) {
//     video {
//       object-position: -280px -150px;
//       /* width: 1000px; */
//       /* left: 25%;
//       transform: translate(-60%,-33%); */
//     }

//     div {
//       font-size: 3.6rem;
//     }
//   }

// `

// export const VideoBanner = ({src, texts}) => {
//   return (
//     <BannerContainer>
//       <VideoWrapper>
//         <video muted autoPlay loop>
//           <source src={src} type="video/mp4" />
//         </video>
//         <TextBox size={'6.4rem'} weight={'bold'} color={'white'} align={'center'}>
//           {texts}
//         </TextBox>
//       </VideoWrapper>
//     </BannerContainer>
//   )
// }


// const BannerContainer2 = styled.div`

// `


// // export const VideoBanner2 = () => {
// //   return (

// //   )

// // }





// const ImgContainer = styled.div`
//   width: ${({width}) => width};
//   height: inherit;
//   overflow: hidden;
//   img {
//     width: 100%;
//   }
// `

// export const Img = ({ src, alt, width}) => {
//   return (
//     <ImgContainer width={width}>
//       <img src={src} alt={alt} />
//     </ImgContainer>
//   )
// }



// // Text Component
// export const TextStyle = styled.div`
//   ${
//     ({color, size, weight, align, lineHeight}) => {
//       return css`
//         color: ${color||'black'};
//         font-size: ${size||'1.6rem'};
//         font-weight: ${weight||'lighter'};
//         text-align: ${align||'left'};
//         line-height: ${lineHeight||'1.6'};
//       `
//   }}

//   white-space: pre-line;
//   word-break: keep-all;

//   @media screen and (max-width: 1296px) {
//     width: 50%;
//   }
//   @media screen and (max-width: 768px) {
//     width: 80%;
//   }
// `

// export const TextBox = ({ size, weight, color, align, lineHeight, children }) => {
//   return (
//     <TextStyle size={size} weight={weight} color={color} align={align} lineHeight={lineHeight}>
//       { children }
//     </TextStyle>
//   )
// }


// export const TitleStyle = styled.div`
//   font-size: ${({size}) => {
//     if (size === 'med') return '3.6rem';
//     else if (size === 'small') return '2.6rem';
//     else return '4.8rem';
//   }};
//   text-align:${({center}) => center&&'center'};
//   font-weight: 600;

//   letter-spacing: -1px;
//   white-space: pre-wrap;
//   word-break: keep-all;

//   @media screen and (max-width:768px) {
//     font-size: ${({size}) => {
//     if (size === 'med') return '2.2rem';
//     else return '3.6rem';
//   }};
//   }
// `
// export const TitleBox = ({children, size, center}) => {
//   return (
//     <TitleStyle size={size} center={center}>{children}</TitleStyle>
//   )
// }


// //Margin
// const MarginStyle = styled.div`

//   ${({dir, margin}) => css`
//     height: ${dir==='vertical'?margin:0};
//     width: ${dir==='horizontal'?margin:0};
//   `}
// `

// export const Marginer = ({dir,margin}) => {
//   return (
//     <MarginStyle dir={dir} margin={margin}></MarginStyle>
//   )
// }