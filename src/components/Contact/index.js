import {AiOutlineGithub, AiOutlineTwitter} from 'react-icons/ai'
import {FaLinkedinIn, FaTelegramPlane} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'

import Header from '../Header'
import PortfolioContext from '../../context/PortfolioContext'

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
      return (
        <ContactSection darkTheme={darkTheme}>
          <Header />
          <ContactContainer>
            <ContactTopContainer>
              <ContactTopTextContainer>
                <HireMeHead darkTheme={darkTheme}>Contact Me</HireMeHead>
                <ContactText darkTheme={darkTheme}>
                  I am available to work. Connect with me via phone:{' '}
                  <NumberEmail>+919553901412</NumberEmail> or email:{' '}
                  <NumberEmail>sunildevabathula013@gmail.com</NumberEmail>
                </ContactText>
                <FindMeHead darkTheme={darkTheme}>FIND ME ON</FindMeHead>
                <ContactIconsContainer>
                  <SocialIconContainer
                    href="https://github.com/sunil013"
                    target="_blank"
                  >
                    <AiOutlineGithub size={25} />
                  </SocialIconContainer>
                  <SocialIconContainer
                    href="https://www.linkedin.com/in/sunil013"
                    target="_blank"
                  >
                    <FaLinkedinIn size={22} />
                  </SocialIconContainer>
                  <SocialIconContainer
                    href="mailto:max.sunildevabathula013@gmail.com?body=My custom mail body"
                    target="_blank"
                  >
                    <SiGmail size={20} />
                  </SocialIconContainer>
                  <SocialIconContainer>
                    <AiOutlineTwitter size={25} />
                  </SocialIconContainer>
                  <SocialIconContainer
                    href="https://t.me/sunild013"
                    target="_blank"
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
