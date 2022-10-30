import styled from 'styled-components'

export const TechnologiesSection = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => (props.darkTheme ? '#191919' : '#F5F5F5')};
`

export const TechnologiesContainer = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1200px;
  margin: auto;
  padding-top: 10px;
  @media screen and (min-width: 768px) {
    margin-top: 20px;
  }
`
export const TopTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const TopTextHeading = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  // line-height: 26px;
  margin-bottom: 10px;
  color: ${props => (props.darkTheme ? '#CCCCCC' : '#42446e')};
`
export const TopText = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  margin: 0px;
  // line-height: 26px;
  color: ${props => (props.darkTheme ? '#A7A7A7' : '#666666')};
`
export const TechItemsContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 45px;
  flex-wrap: wrap;
  margin-top: 25px;
  @media screen and (max-width: 767px) {
    gap: 30px;
  }
`
export const TechItem = styled.li`
  list-style-type: none;
  width: 120px;
  //   margin-right: 50px;
  margin-bottom: 25px;
  @media screen and (max-width: 500px) {
    width: 80px;
    // margin-right: 10px;
    margin-bottom: 15px;
  }
  @media screen and (max-width: 767px) {
    width: 100px;
    // margin-right: 10px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 1000px) {
    width: 110px;
    // margin-right: 35px;
    margin-bottom: 25px;
  }
`
export const TechImage = styled.img`
  width: 80%;
  &:hover {
    transform: scale(1.04);
    transition: all ease-in-out 0.3s;
  }
`
