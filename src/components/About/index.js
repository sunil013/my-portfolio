import Header from '../Header'
import EducationCard from '../EducationCard'
import PortfolioContext from '../../context/PortfolioContext'
import {
  AboutSection,
  AboutContainer,
  AboutTopTextContainer,
  AboutMainHeading,
  AboutMainDescription,
  AboutWorkContainer,
  AboutWorkItemsContainer,
} from './styledComponents'

const educationList = [
  {
    id: '1',
    position: 'Full Stack Developer(MERN)',
    company: 'NxtWave(CCBP)',
    location: 'Online',
    type: 'InternShip',
    duration: 'Feb 2022 - Present',
  },
  {
    id: '2',
    position: 'Bachelor in Information Technology',
    company: 'Gudlavalleru Engineering(GEC)',
    location: 'Gudlavalleru(AP)',
    type: 'Full Time',
    duration: 'July 2019 - Apr 2022',
  },
  {
    id: '3',
    position: 'Diploma in Computer Engineering',
    company: 'AANM & VVRSR Polytechnic',
    location: 'Gudlavalleru(AP)',
    type: 'Full Time',
    duration: 'July 2016 - Apr 2019',
  },
]

const About = () => (
  <PortfolioContext.Consumer>
    {value => {
      const {darkTheme} = value
      return (
        <AboutSection darkTheme={darkTheme}>
          <Header />
          <AboutContainer>
            <AboutTopTextContainer>
              <AboutMainHeading darkTheme={darkTheme}>
                About Me
              </AboutMainHeading>
              <AboutMainDescription darkTheme={darkTheme}>
                Hi Everyone, I am Sunil Devabattula. I'm a MERN Full Stack
                Developer based in Andhra Pradesh, India. I love to learn and
                explore new technologies. Love almost all the stacks of Software
                Engineering. My current stack includes Nodejs, Reactjs,
                Bootstrap, Material UI, MongoDB, Mysql, Firebase, Cloudinary,
                etc.
              </AboutMainDescription>
            </AboutTopTextContainer>
            <AboutWorkContainer>
              <AboutMainHeading darkTheme={darkTheme}>
                Education
              </AboutMainHeading>
              <AboutWorkItemsContainer>
                {educationList.map(item => (
                  <EducationCard key={item.id} details={item} />
                ))}
              </AboutWorkItemsContainer>
            </AboutWorkContainer>
          </AboutContainer>
        </AboutSection>
      )
    }}
  </PortfolioContext.Consumer>
)

export default About
