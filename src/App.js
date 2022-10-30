import {Component} from 'react'
// import {Routes, Route} from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
// import {Redirect} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Technologies from './components/Technologies'
import PortfolioContext from './context/PortfolioContext'

class App extends Component {
  state = {darkTheme: false}

  onChangeTheme = () => {
    this.setState(prevState => ({
      darkTheme: !prevState.darkTheme,
    }))
  }

  render() {
    const {darkTheme} = this.state
    return (
      <PortfolioContext.Provider
        value={{
          darkTheme,
          onChangeTheme: this.onChangeTheme,
        }}
      >
        <Router>
          <Routes>
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/technologies" element={<Technologies />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </PortfolioContext.Provider>
    )
  }
}

export default App
