import styled from 'styled-components'

export const HomeSection = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => (props.darkTheme ? '#191919' : '#F5F5F5')};
`
export const HomeContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 90vh;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 50px;
  }
`
export const HomeTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    order: 1;
    margin-top: 30px;
    align-self: flex-start;
  }
`
export const HomeHiHeading = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 45px;
  line-height: 70px;
  letter-spacing: -1px;
  /* Solid Heading */
  color: ${props => (props.darkTheme ? '#D9D9D9' : '#42446e')};
  margin: 0px;
  //   animation: 2s slide-right;
  //   @keyframes slide-right {
  //     from {
  //       margin-left: -100%;
  //     }
  //     to {
  //       margin-left: 0%;
  //     }
  //   }
  @media screen and (max-width: 767px) {
    font-size: 28px;
    line-height: 1.2;
  }
  @media screen and (max-width: 1200px) {
    font-size: 40px;
    line-height: 1.3;
  }
`
export const HomeSpanEle = styled.span`
  //   font-family: 'Poppins';
  //   font-style: normal;
  font-weight: 600;
  font-size: 50px;
  animation-name: wave;
  animation-duration: 2.1s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block; */
  margin: 0px;
  @keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
  @media screen and (max-width: 767px) {
    font-size: 30px;
    line-height: 1.2;
  }
  @media screen and (max-width: 1200px) {
    font-size: 42px;
    line-height: 1.3;
  }
`

export const HomeNameHeading = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 70px;
  letter-spacing: -1px;
  /* Gradient Heading */
  background: linear-gradient(90deg, #13b0f5 -2.06%, #e70faa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0px;
  // text-fill-color: transparent;
  //   animation: 4s slide-right;
  //   @keyframes slide-right {
  //     from {
  //       margin-left: -100%;
  //     }
  //     to {
  //       margin-left: 0%;
  //     }
  //   }
  @media screen and (max-width: 767px) {
    font-size: 30px;
    line-height: 1.3;
  }
  @media screen and (max-width: 1200px) {
    font-size: 46px;
    line-height: 1.3;
  }
`

export const HomeTagLineHeading = styled.h2`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 58px;
  line-height: 70px;
  letter-spacing: -1px;
  margin: 0px;
  color: ${props => (props.darkTheme ? '#D9D9D9' : '#42446e')};
  //   animation: floatText 5s infinite alternate ease-in-out;
  //   @webkit-keyframes floatText {
  //     from {
  //       left: 00%;
  //     }
  //     to {
  //       left: 100%;
  //     }
  //   }
  //   animation: 1s infinite normal slidein;
  //   transform: scale(0.94);
  //   animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
  //   @keyframes scale {
  //     100% {
  //       transform: scale(1);
  //     }
  //   }
  //   -webkit-animation: slide 0.5s forwards;
  //   -webkit-animation-delay: 2s;
  //   animation: slide 0.5s forwards;
  //   animation-delay: 2s;
  //   @-webkit-keyframes slide {
  //     100% {
  //       left: 0;
  //     }
  //   }

  //   @keyframes slide {
  //     100% {
  //       left: 0;
  //     }
  //   }
  //   animation: 4s slide-right;
  //   @keyframes slide-right {
  //     from {
  //       margin-left: -100%;
  //     }
  //     to {
  //       margin-left: 0%;
  //     }
  //   }
  @media screen and (max-width: 767px) {
    font-size: 34px;
    line-height: 1.3;
  }
  @media screen and (max-width: 1200px) {
    font-size: 46px;
    line-height: 1.3;
  }
`

export const HomeImageContainer = styled.div`
  background-color: transparent;
  border-radius: 170px;
  //   padding: 1px;
  //   border: linear-gradient(180deg, #e70faa 0%, #00c0fd 100%) solid 2px;
  //   border: #676888 solid 2px;
  padding: 0px;
  @media screen and (max-width: 767px) {
    order: 0;
  }
`
export const HomeImage = styled.img`
  width: 320px;
  height: 320px;
  margin-bottom: 0px;
  //   border-radius: 170px;
  //   border: linear-gradient(180deg, #E70FAA 0%, #00C0FD 100%) 5px solid;
  //  border-image-source: linear-gradient(180deg, #E70FAA 0%, #00C0FD 100%);
  //   animation: 4s slide-left;
  // }
  // @keyframes slide-left {
  //   from {
  //     margin-left: 200%;
  //   }
  //   to {
  //     margin-left: 0%;
  //   }
  // }
  @media screen and (max-width: 767px) {
    width: 280px;
    height: 280px;
    // border-radius: 170px;
  }
  @media screen and (min-width: 1300px) {
    width: 360px;
    height: 360px;
    // border-radius: 170px;
  }
`
