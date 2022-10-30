import {Component} from 'react'
import {Link} from 'react-router-dom'
import {FiMenu} from 'react-icons/fi'
// import {CgPlayList} from 'react-icons/cg'
import {IoMdClose} from 'react-icons/io'
import {BsFillMoonStarsFill, BsFillSunFill} from 'react-icons/bs'
import PortfolioContext from '../../context/PortfolioContext'
import './index.css'
import {
  Navbar,
  NavbarContainer,
  NavLogo,
  NavLinksContainer,
  NavItemsContainer,
  NavItem,
  //   NavIconsContainer,
  //   NavIconItem,
  NavbarTopContainer,
  NavMobileContainer,
  NavMobileListContainer,
  NavMobileItem,
  NavMobileMenuButton,
  //   NavMobileIcons,
  ThemeButton,
  MobileMenuThemeContainer,
} from './styledComponents'

class Header extends Component {
  state = {showNavbar: false}

  onClickOpenBar = () => {
    this.setState({
      showNavbar: true,
    })
  }

  onClickCloseBar = () => {
    this.setState({
      showNavbar: false,
    })
  }

  render() {
    const {showNavbar} = this.state
    const pathName = window.location.pathname
    const homeActive = pathName === '/'
    const aboutActive = pathName === '/about'
    const technologiesActive = pathName === '/technologies'
    const contactActive = pathName === '/contact'
    const projectsActive = pathName === '/projects'
    return (
      <PortfolioContext.Consumer>
        {value => {
          const {darkTheme, onChangeTheme} = value
          return (
            <Navbar>
              <NavbarTopContainer>
                <NavbarContainer>
                  <Link to="/">
                    <NavLogo
                      //   src="https://res.cloudinary.com/sunil013/image/upload/v1667062763/Photo_1667062315823_kfjqo5.png"
                      src="https://res.cloudinary.com/sunil013/image/upload/v1667062763/Photo_1667062407475_aafbe5.png"
                      alt="logo"
                    />
                  </Link>
                  <NavLinksContainer>
                    <NavItemsContainer>
                      <Link to="/" className="nav-tab-links">
                        <NavItem darkTheme={darkTheme} isActive={homeActive}>
                          Home
                        </NavItem>
                      </Link>
                      <Link to="/about" className="nav-tab-links">
                        <NavItem darkTheme={darkTheme} isActive={aboutActive}>
                          About
                        </NavItem>
                      </Link>
                      <Link to="/technologies" className="nav-tab-links">
                        <NavItem
                          darkTheme={darkTheme}
                          isActive={technologiesActive}
                        >
                          Technologies
                        </NavItem>
                      </Link>
                      <Link to="/projects" className="nav-tab-links">
                        <NavItem
                          darkTheme={darkTheme}
                          isActive={projectsActive}
                        >
                          Projects
                        </NavItem>
                      </Link>
                      <Link to="/contact" className="nav-tab-links">
                        <NavItem darkTheme={darkTheme} isActive={contactActive}>
                          Contact
                        </NavItem>
                      </Link>
                    </NavItemsContainer>
                    {/* <NavIconsContainer>
                      <NavIconItem darkTheme={darkTheme}>
                        <AiOutlineTwitter size={24} />
                      </NavIconItem>
                      <NavIconItem darkTheme={darkTheme}>
                        <FaLinkedinIn size={20} />
                      </NavIconItem>
                      <NavIconItem darkTheme={darkTheme}>
                        <FiGithub size={22} />
                      </NavIconItem>
                    </NavIconsContainer> */}
                    <ThemeButton
                      darkTheme={darkTheme}
                      type="button"
                      onClick={() => {
                        onChangeTheme()
                      }}
                    >
                      {darkTheme ? (
                        <BsFillSunFill size={27} />
                      ) : (
                        <BsFillMoonStarsFill size={27} />
                      )}
                    </ThemeButton>
                  </NavLinksContainer>
                  <MobileMenuThemeContainer>
                    <ThemeButton
                      darkTheme={darkTheme}
                      type="button"
                      onClick={() => {
                        onChangeTheme()
                      }}
                    >
                      {darkTheme ? (
                        <BsFillSunFill size={25} />
                      ) : (
                        <BsFillMoonStarsFill size={25} />
                      )}
                    </ThemeButton>
                    {showNavbar ? (
                      <NavMobileMenuButton
                        type="button"
                        onClick={this.onClickCloseBar}
                        darkTheme={darkTheme}
                      >
                        <IoMdClose className="menu-icon" />
                      </NavMobileMenuButton>
                    ) : (
                      <NavMobileMenuButton
                        type="button"
                        onClick={this.onClickOpenBar}
                        darkTheme={darkTheme}
                      >
                        <FiMenu className="menu-icon" />
                      </NavMobileMenuButton>
                    )}
                  </MobileMenuThemeContainer>
                </NavbarContainer>
                {showNavbar && (
                  <NavMobileContainer
                    className="mobile-nav-show"
                    isActive={showNavbar}
                    darkTheme={darkTheme}
                  >
                    <NavMobileListContainer className="mobile-bar-list">
                      <Link to="/" className="nav-tab-links">
                        <NavMobileItem
                          darkTheme={darkTheme}
                          isActive={homeActive}
                        >
                          Home
                        </NavMobileItem>
                      </Link>
                      <Link to="/about" className="nav-tab-links">
                        <NavMobileItem
                          darkTheme={darkTheme}
                          isActive={aboutActive}
                        >
                          About
                        </NavMobileItem>
                      </Link>
                      <Link to="/technologies" className="nav-tab-links">
                        <NavMobileItem
                          darkTheme={darkTheme}
                          isActive={technologiesActive}
                        >
                          Technologies
                        </NavMobileItem>
                      </Link>
                      <Link to="/projects" className="nav-tab-links">
                        <NavMobileItem
                          darkTheme={darkTheme}
                          isActive={projectsActive}
                        >
                          Projects
                        </NavMobileItem>
                      </Link>
                      <Link to="/contact" className="nav-tab-links">
                        <NavMobileItem
                          darkTheme={darkTheme}
                          isActive={contactActive}
                        >
                          Contact
                        </NavMobileItem>
                      </Link>
                    </NavMobileListContainer>
                    {/* <NavIconsContainer>
                      <NavMobileIcons darkTheme={darkTheme}>
                        <AiOutlineTwitter size={26} />
                      </NavMobileIcons>
                      <NavMobileIcons darkTheme={darkTheme}>
                        <FaLinkedinIn size={22} />
                      </NavMobileIcons>
                      <NavMobileIcons darkTheme={darkTheme}>
                        <FiGithub size={24} />
                      </NavMobileIcons>
                    </NavIconsContainer> */}
                  </NavMobileContainer>
                )}
              </NavbarTopContainer>
            </Navbar>
          )
        }}
      </PortfolioContext.Consumer>
    )
  }
}

export default Header
