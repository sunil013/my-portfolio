import styled from 'styled-components'

export const ProjectsSection = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => (props.darkTheme ? '#191919' : '#F5F5F5')};
`

export const ProjectsContainer = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1200px;
  margin: auto;
  padding-top: 10px;
  margin-top: 25px;
  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
`
export const ProjectMainHeading = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 26px;
  color: ${props => (props.darkTheme ? '#CCCCCC' : '#42446E')};
`
export const ProjectMainText = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  // line-height: 26px;
  color: ${props => (props.darkTheme ? '#A7A7A7' : '#666666')};
`
export const ProjectItemsContainer = styled.ul`
  padding-left: 0px;
  margin-top: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`
export const ProjectTypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-left: 0px;
  margin-top: 20px;
`
export const ProjectTypeItem = styled.li`
  list-style-type: none;
  margin-right: 35px;
`
export const ProjectTypeButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  font-family: 'Poppins';
  cursor: pointer;
  padding: 0px;
  outline: none;
  color: ${props => (props.darkTheme ? '#f8f8f8' : '#3e4232')};
  border-bottom: ${props => (props.isActive ? '#00C9A7' : 'none')} solid 2px;
`
