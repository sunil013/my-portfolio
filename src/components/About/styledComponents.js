import styled from 'styled-components'

export const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => (props.darkTheme ? '#191919' : '#F5F5F5')};
`
export const AboutContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: auto;
  //   display: flex;
  //   align-items: center;
  //   justify-content: space-between;
  min-height: 90vh;
`
export const AboutTopTextContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  max-width: 900px;
`
export const AboutMainHeading = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  margin: 0px;
  // line-height: 52px;
  letter-spacing: -0.4px;
  color: ${props => (props.darkTheme ? '#cccccc' : '#42446e')};
  @media screen and (max-width: 767px) {
    font-size: 30px;
  }
`
export const AboutMainDescription = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  margin-top: 7px;
  // line-height: 26px;
  color: ${props => (props.darkTheme ? '#A7A7A7' : '#666666')};
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`
export const AboutWorkContainer = styled.div`
  margin-top: 28px;
`
export const AboutWorkItemsContainer = styled.ul`
  padding-left: 0px;
  margin-top: 0px;
`
