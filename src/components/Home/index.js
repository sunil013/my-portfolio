import Typed from 'react-typed'
import Header from '../Header'
import PortfolioContext from '../../context/PortfolioContext'
import './index.css'
import {
  HomeSection,
  HomeContainer,
  HomeTextContainer,
  HomeHiHeading,
  HomeNameHeading,
  HomeSpanEle,
  //   HomeTagLineHeading,
  HomeImageContainer,
  HomeImage,
} from './styledComponents'

const Home = () => (
  <PortfolioContext.Consumer>
    {value => {
      const {darkTheme} = value
      return (
        <HomeSection darkTheme={darkTheme}>
          <Header />
          <HomeContainer>
            <HomeTextContainer>
              <HomeHiHeading darkTheme={darkTheme}>
                Hi There! <HomeSpanEle>👋</HomeSpanEle>
                <br></br>I'M<br></br>
              </HomeHiHeading>
              <HomeNameHeading>Sunil Devabattula</HomeNameHeading>
              {/* <HomeTagLineHeading darkTheme={darkTheme}>
                I build things for web
              </HomeTagLineHeading> */}
              <Typed
                strings={[
                  'Backend Developer',
                  'Frontend Developer',
                  'Fullstack Developer',
                ]}
                typeSpeed={40}
                backSpeed={50}
                className="typed-header"
                // style={{color: '#42446E', fontSize: '20px'}}
                loop
              />
            </HomeTextContainer>
            <HomeImageContainer>
              <HomeImage
                src="https://res.cloudinary.com/sunil013/image/upload/v1666970528/home-main_w33joj.svg"
                alt="Sunil D"
              />
            </HomeImageContainer>
          </HomeContainer>
        </HomeSection>
      )
    }}
  </PortfolioContext.Consumer>
)

export default Home
