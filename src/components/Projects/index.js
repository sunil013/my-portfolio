import {Component} from 'react'
import Header from '../Header'
import ProjectCard from '../ProjectCard'
import NodeProjectCard from '../NodeProjectCard'
import PortfolioContext from '../../context/PortfolioContext'
import {
  ProjectsSection,
  ProjectsContainer,
  ProjectMainHeading,
  ProjectMainText,
  ProjectItemsContainer,
  ProjectTypeContainer,
  ProjectTypeItem,
  ProjectTypeButton,
} from './styledComponents'

const projectDetailsList = [
  {
    id: '1',
    title: 'Covid19 Dashboard',
    imageUrl:
      'https://res.cloudinary.com/sunil013/image/upload/v1666860531/istockphoto-1358764378-170667a_d7jdm1.jpg',
    description:
      'Implemented a responsive Covid Dashboard where users can see confirmed, active, recovered and deceased cases in India state wise. Users also can search by state and see state specific cases info with different types of graphs',
    techStack: 'HTML, React JS, Recharts, Figma',
    previewLink: 'https://sunilcovid19.ccbp.tech/',
    githubLink: 'https://github.com/sunil013/covid19-dashboard.git',
  },
  {
    id: '2',
    title: 'Nxt Trendz (ECommerce)',
    imageUrl:
      'https://res.cloudinary.com/sunil013/image/upload/v1666876808/4661435_2448261_dx1nhh.jpg',
    description:
      'Implemented Nxt Trendz application which is a clone for ECommerce applications like Amazon, Flipkart where users can login and can see list of products with search, filters, sort by, etc..',
    techStack: 'React JS, Html, Routing, REST API Calls,  JWT Token',
    previewLink: 'https://sunildcommerce.ccbp.tech/',
    githubLink: 'https://github.com/sunil013/nxtTrendz.git',
  },
  {
    id: '3',
    title: 'Nxt Watch',
    imageUrl:
      'https://res.cloudinary.com/sunil013/image/upload/v1666863093/3d-youtube-logo-silver-stand-with-dark-logos-background_qgivcm.jpg',
    description:
      'Implemented Nxt Watch application which is a clone for YouTube, where users can login and can watch videos of different categories along with search option user can save the video to watch later etc..',
    techStack: 'React JS, Html, Routing, REST API Calls, JWT Token',
    previewLink: 'https://sunildnxtwatch.ccbp.tech/',
    githubLink: 'https://github.com/sunil013/nxtwatch.git',
  },
  {
    id: '4',
    title: 'Jobby App',
    imageUrl:
      'https://res.cloudinary.com/sunil013/image/upload/v1666877444/9174459_6308_lyz6xp.jpg',
    description:
      'Implemented Jobby App where users can log in and can see a list of jobs with search by Job title, filters based on Salary range and Employment type, etc',
    techStack: 'React JS, Html, Routing, REST API Calls, JWT Token',
    previewLink: 'https://sunildjobbyapp.ccbp.tech/',
    githubLink: 'https://github.com/sunil013/jobby-App.git',
  },
  {
    id: '5',
    title: 'Todos Application',
    imageUrl:
      'https://res.cloudinary.com/sunil013/image/upload/v1666867450/11668613_20945628_beeuw7.jpg',
    description:
      'Developed persistent todo application with CRUD operations to track list of tasks, Users can add, delete tasks and also mark as completed',
    techStack: 'HTML, CSS, JS, Bootstrap',
    previewLink: 'https://sunildtodo.ccbp.tech',
    githubLink: 'https://github.com/sunil013/Todo-app.git',
  },
  {
    id: '6',
    title: 'Food Munch',
    imageUrl:
      'https://res.cloudinary.com/sunil013/image/upload/v1667133093/rachel-park-hrlvr2ZlUNk-unsplash_2_fzofaw.jpg',
    description:
      'Developed a responsive website for Food Store where users can see a list of food items, detailed information about a food item, offers.',
    techStack: 'HTML, CSS, Bootstrap',
    previewLink: 'https://foodmunchsample.ccbp.tech/',
    githubLink: 'https://github.com/sunil013/food-munch.git',
  },
]

const nodeProjectsList = [
  {
    id: '1',
    title: 'Twitter API',
    imageUrl:
      'https://res.cloudinary.com/sunil013/image/upload/v1667055277/rubaitul-azad-ryR-_1kgja8-unsplash_2_ytolq2.jpg',
    description:
      'Implemented a Twitter API where users can see different APIs like login, register. if the User is an Authenticated User he can see the latest tweets, followers, following people, Likes and Replies to the Tweets. Every time user send a request it checks whether Authenticated or not by user JWT token. Based on the User request perform Create, Read, Update operations on the database.',
    techStack: 'Node JS, JavaScript, Express JS, SQL, Bcrypt',
    previewLink: '#',
    githubLink: 'https://github.com/sunil013/twitter-node.git',
  },
  {
    id: '2',
    title: 'TodoList API',
    imageUrl:
      'https://res.cloudinary.com/sunil013/image/upload/v1667042284/1_TloGybfCILxbwBkjyPvATg_jfyrkv.jpg',
    description:
      'Implemented a TodoList API where users can request Data along with filters like Priority, Status, Category, Search by Todo name and also request with date. it Returns a list of all todos with a specific due date by taking the date and filters in query parameters. Add new Todo using POST Http method. Based on the User request perform Create, Read, Update operations on the database.',
    techStack: 'Node JS, JavaScript, Express JS, SQL, Bcrypt',
    previewLink: '#',
    githubLink: 'https://github.com/sunil013/Todo-app-node-.git',
  },
  {
    id: '3',
    title: 'Covid19 Portal',
    imageUrl:
      'https://res.cloudinary.com/sunil013/image/upload/v1666860531/istockphoto-1358764378-170667a_d7jdm1.jpg',
    description:
      'Implemented a Covid Portal API where users need to login or register to send requests to API. users can see confirmed, active, recovered and deceased cases in India state wise. Users also can search by state and see state specific cases info with district wise data. the database contains three tables state, district and users to store the users data. send the data based on the user request.',
    techStack: 'Node JS, JavaScript, Express JS, SQL, Authentication',
    previewLink: '#',
    githubLink: 'https://github.com/sunil013/covid19-portal-node.git',
  },
]

const projectTabs = {
  react: 'REACT',
  node: 'NODE',
}

class Projects extends Component {
  state = {activeTab: projectTabs.react}

  onClickReact = () => {
    this.setState({
      activeTab: projectTabs.react,
    })
  }

  onClickNode = () => {
    this.setState({
      activeTab: projectTabs.node,
    })
  }

  render() {
    const {activeTab} = this.state
    return (
      <PortfolioContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <ProjectsSection darkTheme={darkTheme}>
              <Header />
              <ProjectsContainer>
                <ProjectMainHeading darkTheme={darkTheme}>
                  Projects
                </ProjectMainHeading>
                <ProjectMainText darkTheme={darkTheme}>
                  Here are few projects I've worked on recently.
                </ProjectMainText>
                <ProjectTypeContainer>
                  <ProjectTypeItem>
                    <ProjectTypeButton
                      type="button"
                      onClick={this.onClickReact}
                      darkTheme={darkTheme}
                      isActive={activeTab === 'REACT'}
                    >
                      React
                    </ProjectTypeButton>
                  </ProjectTypeItem>
                  <ProjectTypeItem>
                    <ProjectTypeButton
                      type="button"
                      onClick={this.onClickNode}
                      darkTheme={darkTheme}
                      isActive={activeTab === 'NODE'}
                    >
                      Node
                    </ProjectTypeButton>
                  </ProjectTypeItem>
                </ProjectTypeContainer>
                {activeTab === 'REACT' && (
                  <ProjectItemsContainer>
                    {projectDetailsList.map(item => (
                      <ProjectCard key={item.id} projectDetails={item} />
                    ))}
                  </ProjectItemsContainer>
                )}
                {activeTab === 'NODE' && (
                  <ProjectItemsContainer>
                    {nodeProjectsList.map(item => (
                      <NodeProjectCard key={item.id} projectDetails={item} />
                    ))}
                  </ProjectItemsContainer>
                )}
              </ProjectsContainer>
            </ProjectsSection>
          )
        }}
      </PortfolioContext.Consumer>
    )
  }
}

export default Projects
