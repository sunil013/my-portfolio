import styled from 'styled-components'

export const Navbar = styled.nav`
  background-color: transparent;
  min-height: 10vh;
  //   background-color: yellow;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;
  //   z-index: 99;
  //   color: #343434;
  //   top: 0;
  //   z-index: 100;
  //   position: fixed;
  //   width: 100%;
`
export const NavbarTopContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: auto;
  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
export const NavLogo = styled.img`
  height: 60px;
  width: 80px;
  @media screen and (max-width: 630px) {
    height: 50px;
    width: 60px;
  }
`
export const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const NavItemsContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  align-items: center;
  margin-right: 10px;
`
export const NavItem = styled.li`
  list-style-type: none;
  font-family: 'DM Sans';
  //   font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  margin-left: 20px;
  cursor: pointer;
  //   color: ${props => (props.darkTheme ? '#666666' : '#A7A7A7')};
  color: ${props => {
    const {darkTheme} = props
    const color = darkTheme ? '#666666' : '#A7A7A7'
    const activeColor = darkTheme ? '#e2e8f0' : '#000000'
    return props.isActive ? activeColor : color
  }};
  @media screen and (min-width: 1400px) {
    margin-left: 25px;
  }
  &:hover {
    color: ${props => (props.darkTheme ? '#e2e8f0' : '#000000')};
  }
`
export const NavIconsContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  align-items: center;
`
export const NavIconItem = styled.li`
  list-style-type: none;
  height: 30px;
  width: 30px;
  border-radius: 15px;
  background-color: ${props => (props.darkTheme ? '#A7A7A7' : '#666666')};
  color: ${props => (props.darkTheme ? '#191919' : '#ffffff')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  cursor: pointer;
  &:hover {
    background-color: #0062d3;
    color: #fff;
    transition: all 500ms ease;
  }
`
export const NavMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  //   height: 100%;
  width: 50vw;
  margin-top: 85px;
  margin-right: 10px;
  max-width: 300px;
  border-radius: 13px;
  //   z-index: -1; #6c757d #d3d3d3#03dac5
  background: rgba(255, 255, 255, 0.25);
  // background: ${props => (props.darkTheme ? '#191919' : '#F5F5F5')}
  //   background: #d8eff8;
  top: 0;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  //   left: ${props => (props.isActive ? '0%' : '-110%')};
  right: ${props => (props.isActive ? '0%' : '210%')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const NavMobileListContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const NavMobileItem = styled.li`
  list-style-type: none;
  font-family: 'DM Sans';
  //   font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  //   line-height: 26px;#7BB5FF
  //   color: ${props => (props.darkTheme ? '#666666' : '#A7A7A7')};
  color: ${props => {
    const {darkTheme} = props
    const color = darkTheme ? '#e2e8f0' : '#5A5A5A'
    const activeColor = darkTheme ? '#7AFFAF' : '#008B74'
    return props.isActive ? activeColor : color
  }};
  cursor: pointer;
  margin-bottom: 15px;
  &:hover {
    color: ${props => (props.darkTheme ? '#7AFFAF' : '#008B74')};
  }
`
export const NavMobileMenuButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 25px;
  color: ${props => (props.darkTheme ? '#cccccc' : '#000000')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const NavMobileIcons = styled.li`
  list-style-type: none;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background-color: ${props => (props.darkTheme ? '#A7A7A7' : '#666666')};
  color: ${props => (props.darkTheme ? '#191919' : '#ffffff')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  margin-right: 15px;
  cursor: pointer;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  margin-left: 30px;
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
  @media screen and (max-width: 849px) {
    margin-left: 15px;
  }
`
export const MobileMenuThemeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
