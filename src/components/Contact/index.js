import {AiOutlineTwitter} from 'react-icons/ai'
import {FaLinkedinIn, FaTelegramPlane} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import {RiGithubLine} from 'react-icons/ri'

import Header from '../Header'
import PortfolioContext from '../../context/PortfolioContext'
import './index.css'

import {
  ContactSection,
  ContactContainer,
  HireMeHead,
  ContactText,
  ContactTopContainer,
  ContactTopTextContainer,
  ContactImage,
  FindMeHead,
  ContactIconsContainer,
  SocialIconContainer,
  NumberEmail,
  ResumeButton,
} from './styledComponents'

const Contact = () => (
  <PortfolioContext.Consumer>
    {value => {
      const {darkTheme} = value
      const gitHubClass = darkTheme ? 'git-dark' : 'git-light'
      const mailClass = darkTheme ? 'mail-dark' : 'mail-light'
      return (
        <ContactSection darkTheme={darkTheme}>
          <Header />
          <ContactContainer>
            <ContactTopContainer>
              <ContactTopTextContainer>
                <HireMeHead darkTheme={darkTheme}>Contact Me</HireMeHead>
                <ContactText darkTheme={darkTheme}>
                  I am available to work. Connect with me via phone:{' '}
                  <NumberEmail>+91XXXXXXXXXX</NumberEmail> or email:{' '}
                  <NumberEmail>sunildevabathula013@gmail.com</NumberEmail>
                </ContactText>
                <FindMeHead darkTheme={darkTheme}>FIND ME ON</FindMeHead>
                <ContactIconsContainer>
                  <SocialIconContainer
                    href="https://github.com/sunil013"
                    target="_blank"
                    className={gitHubClass}
                  >
                    <RiGithubLine size={25} />
                  </SocialIconContainer>
                  <SocialIconContainer
                    href="https://www.linkedin.com/in/sunil013"
                    target="_blank"
                    className="linkedin-icon"
                  >
                    <FaLinkedinIn size={22} />
                  </SocialIconContainer>
                  <SocialIconContainer
                    href="mailto:max.sunildevabathula013@gmail.com?body=My custom mail body"
                    target="_blank"
                    className={mailClass}
                  >
                    <SiGmail size={20} />
                  </SocialIconContainer>
                  <SocialIconContainer className="twitter-icon">
                    <AiOutlineTwitter size={25} />
                  </SocialIconContainer>
                  <SocialIconContainer
                    href="https://t.me/sunild013"
                    target="_blank"
                    className="telegram-icon"
                  >
                    <FaTelegramPlane size={22} />
                  </SocialIconContainer>
                </ContactIconsContainer>
                <ResumeButton
                  href="https://drive.google.com/file/d/1xbGQnrCuNOdkAd8jkn3Lh6fkdUglhpUy/view?usp=sharing"
                  target="_blank"
                  darkTheme={darkTheme}
                >
                  See my Resume
                </ResumeButton>
              </ContactTopTextContainer>
              <ContactImage
                src="https://res.cloudinary.com/sunil013/image/upload/v1666978935/address_image_fznbgs.svg"
                alt="contact"
              />
            </ContactTopContainer>
          </ContactContainer>
        </ContactSection>
      )
    }}
  </PortfolioContext.Consumer>
)

export default Contact
