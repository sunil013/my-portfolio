import ReactTooltip from 'react-tooltip'
import Header from '../Header'
import PortfolioContext from '../../context/PortfolioContext'
import './index.css'
import {
  TechnologiesSection,
  TechnologiesContainer,
  TopTextContainer,
  TopTextHeading,
  TopText,
  TechItemsContainer,
  TechItem,
  TechImage,
} from './styledComponents'

const techStackList = [
  {
    id: 'HTML',
    name: 'Html',
    imageUrl:
      'https://res.cloudinary.com/sunil013/image/upload/v1666802297/vscode-icons_file-type-html_3x_eb7egl.png',
  },
  {
    id: 'CSS',
    name: 'Css',
    imageUrl:
      'https://res.cloudinary.com/sunil013/image/upload/v1666802297/vscode-icons_file-type-css_3x_v0ko4l.png',
  },
  {
    id: 'JAVASCRIPT',
    name: 'Javascript',
    imageUrl:
      'https://res.cloudinary.com/sunil013/image/upload/v1666802297/vscode-icons_file-type-js-official_3x_t12h7f.png',
  },
  {
    id: 'PYTHON',
    name: 'Python',
    imageUrl:
      'https://res.cloudinary.com/sunil013/image/upload/v1666802297/python_104451_rvblax.png',
  },
  {
    id: 'SQL',
    name: 'Sql',
    imageUrl:
      'https://res.cloudinary.com/sunil013/image/upload/v1666802296/pnghut_microsoft-azure-sql-database-server-data-warehouse_jx7wrw.png',
  },
  {
    id: 'BOOTSTRAP',
    name: 'Bootstrap',
    imageUrl:
      'https://res.cloudinary.com/sunil013/image/upload/v1666802295/logos_bootstrap_3x_pceeiy.png',
  },
  {
    id: 'REACT',
    name: 'React Js',
    imageUrl:
      'https://res.cloudinary.com/sunil013/image/upload/v1666802296/logos_react_3x_gminfw.png',
  },
  {
    id: 'NODE',
    name: 'Node Js',
    imageUrl:
      'https://res.cloudinary.com/sunil013/image/upload/v1666802297/nodejs-logo_wh0m9a.png',
  },
  {
    id: 'EXPRESS',
    name: 'Express Js',
    imageUrl:
      'https://res.cloudinary.com/sunil013/image/upload/v1666802297/pngwing.com_hth9a9.png',
  },
]

const toolsList = [
  {
    id: 'VISUAL',
    name: 'VS code',
    imageUrl:
      'https://res.cloudinary.com/sunil013/image/upload/v1666802297/vscode-icons_file-type-vscode_3x_zeyrzh.png',
  },
  {
    id: 'GIT',
    name: 'Git',
    imageUrl:
      'https://res.cloudinary.com/sunil013/image/upload/v1666802296/logos_git-icon_3x_chg1ok.png',
  },
  {
    id: 'GITHUB',
    name: 'Github',
    imageUrl:
      'https://res.cloudinary.com/sunil013/image/upload/v1666802296/github-logo_icon-icons.com_73546_mtajpg.png',
  },
  {
    id: 'FIGMA',
    name: 'Figma',
    imageUrl:
      'https://res.cloudinary.com/sunil013/image/upload/v1666802299/pngwing.com_2_zsyocd.png',
  },
  {
    id: 'NPM',
    name: 'Npm',
    imageUrl:
      'https://res.cloudinary.com/sunil013/image/upload/v1666804983/npm-logo-png-transparent_zhg5w8.png',
  },
  {
    id: 'DOCKER',
    name: 'Docker',
    imageUrl:
      'https://res.cloudinary.com/sunil013/image/upload/v1666802296/docker_alt_macos_bigsur_icon_190232_usvaks.png',
  },
]

const Technologies = () => (
  <PortfolioContext.Consumer>
    {value => {
      const {darkTheme} = value
      return (
        <TechnologiesSection darkTheme={darkTheme}>
          <Header />
          <TechnologiesContainer>
            <TopTextContainer>
              <TopTextHeading darkTheme={darkTheme}>Tech Stack</TopTextHeading>
              <TopText darkTheme={darkTheme}>
                Technologies I've been working with recently
              </TopText>
            </TopTextContainer>
            <TechItemsContainer>
              {techStackList.map(item => (
                <TechItem key={item.id}>
                  <TechImage
                    data-tip
                    data-for={item.id}
                    src={item.imageUrl}
                    alt={item.id}
                  />
                </TechItem>
              ))}
            </TechItemsContainer>
            {techStackList.map(item => (
              <ReactTooltip
                key={item.id}
                id={item.id}
                className="tooltip-box"
                place="top"
                effect="solid"
                type="light"
              >
                {item.name}
              </ReactTooltip>
            ))}
            <TopTextHeading darkTheme={darkTheme}>Tools</TopTextHeading>
            <TechItemsContainer>
              {toolsList.map(item => (
                <TechItem key={item.id}>
                  <TechImage
                    data-tip
                    data-for={item.id}
                    src={item.imageUrl}
                    alt={item.id}
                  />
                </TechItem>
              ))}
            </TechItemsContainer>
            {toolsList.map(item => (
              <ReactTooltip
                key={item.id}
                id={item.id}
                place="top"
                effect="solid"
                type="light"
                className="tooltip-box"
              >
                {item.name}
              </ReactTooltip>
            ))}
          </TechnologiesContainer>
        </TechnologiesSection>
      )
    }}
  </PortfolioContext.Consumer>
)

export default Technologies
