import React from 'react'

const PortfolioContext = React.createContext({
  darkTheme: false,
  onChangeTheme: () => {},
  //   savedVideosList: [],
})

export default PortfolioContext
