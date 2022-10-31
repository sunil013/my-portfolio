import styled from 'styled-components'

export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => (props.darkTheme ? '#191919' : '#F5F5F5')};
`
export const ContactContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  padding-top: 30px;
  margin: auto;
  //   display: flex;
  //   align-items: center;
  //   justify-content: space-between;
  min-height: 90vh;
  //   color: #0062d3;
  @media screen and (min-width: 768px) {
    padding-top: 60px;
  }
`
export const HireMeHead = styled.h1`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  // line-height: 70px;
  // text-align: center;
  letter-spacing: -1px;
  color: ${props => (props.darkTheme ? '#CCCCCC' : '#1e0e62')};
  margin: 0px;
  @media screen and (max-width: 767px) {
    font-size: 30px;
  }
`
export const ContactText = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  margin-top: 10px;
  color: #666666;
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`
export const ContactTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
export const ContactTopTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  order: 1;
  @media screen and (min-width: 768px) {
    padding-right: 30px;
    width: 50%;
    flex-shrink: 0;
    order: 0;
  }
`
export const ContactImage = styled.img`
  width: 90%;
  @media screen and (max-width: 767px) {
    max-width: 400px;
    align-self: center;
    margin-bottom: 30px;
  }
  @media screen and (min-width: 768px) {
    width: 350px;
  }
  @media screen and (min-width: 1000px) {
    width: 450px;
  }
  @media screen and (min-width: 1300px) {
    width: 500px;
  }
`
export const FindMeHead = styled.h3`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  margin: 0px;
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
`
export const ContactIconsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 15px;
  gap: 20px;
`

export const SocialIconContainer = styled.a`
  //   background-color: #cccccc;
  //   color: #000000;
  //   color: #ffffff;
  height: 36px;
  text-decoration: none;
  width: 36px;
  border-radius: 18px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //   margin-right: 20px;
  //   &:hover {
  //     // box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
  //     //   rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
  //     //   rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  //     // height: 40px;
  //     // width: 40px;
  //     // margin-right: 16px;
  //     box-shadow: 0px 0px 20px 2px #6632a8;
  //     background-color: #ffffff;
  //     color: #6632a8;
  //     // box-shadow: 0px 20px 30px -10px #fadadd;
  //   }
`
export const NumberEmail = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  color: ${props => (props.darkTheme ? '#ffffff' : '#098282')};
  @media screen and (max-width: 767px) {
    font-size: 19px;
  }
`
export const ResumeButton = styled.a`
  width: 150px;
  height: 38px;
  background-color: #098282;
  color: #ffffff;
  border-radius: 5px;
  border: none;
  text-decoration: none;
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  &:hover {
    box-shadow: 1px 1px 2px 3px #098282;
    // background-color: transparent;
    // border: #098282 solid 1px;
  }
`
