import {TbLink} from 'react-icons/tb'
import {BsGithub} from 'react-icons/bs'
import PortfolioContext from '../../context/PortfolioContext'
import './index.css'
import {
  ProjectCardItem,
  ProjectCardImage,
  ProjectCardTextContainer,
  ProjectCardTitle,
  ProjectCardDescription,
  ProjectStackHead,
  ProjectStacks,
  ProjectLinksContainer,
  ProjectSourceContainer,
  ProjectLink,
} from './styledComponents'

const ProjectCard = props => {
  const {projectDetails} = props
  const {
    title,
    imageUrl,
    description,
    previewLink,
    githubLink,
    techStack,
  } = projectDetails
  return (
    <PortfolioContext.Consumer>
      {value => {
        const {darkTheme} = value
        const iconClass = darkTheme ? 'dark-icon-card' : 'light-icon-card'
        return (
          <ProjectCardItem>
            <ProjectCardImage src={imageUrl} alt={title} />
            <ProjectCardTextContainer darkTheme={darkTheme}>
              <ProjectCardTitle darkTheme={darkTheme}>{title}</ProjectCardTitle>
              <ProjectCardDescription darkTheme={darkTheme}>
                {description}
              </ProjectCardDescription>
              <ProjectStackHead darkTheme={darkTheme}>
                Tech Stack : <ProjectStacks>{techStack}</ProjectStacks>
              </ProjectStackHead>
              <ProjectLinksContainer>
                <ProjectSourceContainer>
                  <TbLink size={20} className={iconClass} />
                  <ProjectLink
                    href={previewLink}
                    target="_blank"
                    darkTheme={darkTheme}
                  >
                    Live Preview
                  </ProjectLink>
                </ProjectSourceContainer>
                <ProjectSourceContainer>
                  <BsGithub size={20} className={iconClass} />
                  <ProjectLink
                    href={githubLink}
                    target="_blank"
                    darkTheme={darkTheme}
                  >
                    View Code
                  </ProjectLink>
                </ProjectSourceContainer>
              </ProjectLinksContainer>
            </ProjectCardTextContainer>
          </ProjectCardItem>
        )
      }}
    </PortfolioContext.Consumer>
  )
}

export default ProjectCard
