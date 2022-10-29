import styled from 'styled-components'

export const ProjectCardItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  //   box-shadow: 2px 2px 100px rgba(0, 0, 0, 0.2);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 20px;
  width: 100%;
  margin-bottom: 30px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
      rgba(0, 0, 0, 0.05) 0px 5px 10px;
    transform: scale(1.03);
    transition: all ease-in-out 0.2s;
  }
  @media screen and (min-width: 620px) {
    width: 48%;
  }
  @media screen and (min-width: 910px) {
    width: 32%;
    margin-bottom: 35px;
  }
`
export const ProjectCardImage = styled.img`
  width: 100%;
  height: 250px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  //   &:hover {
  //     transform: scale(1.05) rotate(0deg);
  //   }
`
export const ProjectCardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: ${props => (props.darkTheme ? '#363636' : '#FFFFFF')};
`
export const ProjectCardTitle = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  margin: 0px;
  // line-height: 26px;
  color: ${props => (props.darkTheme ? '#cccccc' : '#000000')};
`
export const ProjectCardDescription = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  margin-top: 12px;
  // line-height: 26px;
  color: ${props => (props.darkTheme ? '#A7A7A7' : '#666666')};
`
export const ProjectStackHead = styled.h3`
  font-family: 'Poppins';
  //   font-style: normal;
  font-weight: 500;
  font-size: 18px;
  // line-height: 26px;
  margin-top: 0px;
  color: ${props => (props.darkTheme ? '#CCCCCC' : '#42446E')};
`
export const ProjectStacks = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
`
export const ProjectLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 12px;
`
export const ProjectSourceContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ProjectLink = styled.a`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  margin-left: 5px;
  text-decoration: none;
  color: ${props => (props.darkTheme ? '#FFFFFF' : '#000000')};
  background: linear-gradient(
      to right,
      rgba(100, 200, 200, 1),
      rgba(100, 200, 200, 1)
    ),
    linear-gradient(
      to right,
      rgba(255, 0, 0, 1),
      rgba(255, 0, 180, 1),
      rgba(0, 100, 200, 1)
    );
  background-size: 100% 3px, 0 3px;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms;
  &:hover {
    background-size: 0 3px, 100% 3px;
  }
`
