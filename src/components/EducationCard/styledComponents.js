import styled from 'styled-components'

export const EducationCardItem = styled.li`
  list-style-type: none;
  padding-top: 20px;
  padding-bottom: 25px;
  width: 100%;
  max-width: 900px;
  //   border-bottom: #ebeaed solid 2px;
  border-bottom: ${props =>
      props.darkTheme ? 'rgba(235, 234, 237, 0.1)' : 'rgba(235, 234, 237, 1)'}
    solid 2px;
`
export const EducationCardTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const EducationPosition = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 1px;
  //   color: #666666;
  color: ${props => (props.darkTheme ? '#a7a7a7' : '#666666')};
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`
export const EducationType = styled.div`
  height: 28px;
  width: 84px;
  left: 0px;
  top: 0px;
  border-radius: 100px;
  background: #d7ffe0;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  // line-height: 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #018c0f;
`
export const EducationBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  //   padding-top: 10px;
  margin: 0px;
`
export const LocationAndCompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;
  margin: 0px;
  width: 250px;
  @media screen and (max-width: 767px) {
    margin-bottom: 8px;
  }
`
export const LocationName = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 1px;
  //   color: #a7a7a7;
  color: ${props => (props.darkTheme ? '#666666' : '#a7a7a7')};
  margin: 0px;
  padding-left: 8px;
  @media screen and (max-width: 767px) {
    padding-left: 6px;
  }
`
export const DurationContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px;
`

export const EducationDuration = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 1px;
  margin: 0px;
  color: #a7a7a7;
  margin-left: 8px;
  @media screen and (max-width: 767px) {
    font-size: 10px;
  }
`
