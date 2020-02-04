import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { positivaTheme } from './positivaTheme'
import Header from './Header'
import PropTypes from 'prop-types'

/***************************/
/******** CSS IN JS ********/
/***************************/
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: ${props => props.theme.fonts.main};
    -webkit-font-smoothing: antialiased;
    line-height: 1.325;
    color: ${props => props.theme.colors.text};
    letter-spacing: -0.0275rem;
  }
  ::selection {
    background: ${props => props.theme.colors.bgSelection};
    color: ${props => props.theme.colors.textSelection};
  }
 @media (min-width: ${props => props.theme.mediaqueries.md}) {
    html {
      font-size: 18px;
    }
  }
`

/***************************/
/***** MAIN COMPONENT ******/
/***************************/
const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={positivaTheme}>
      <GlobalStyle />
      <Header />
      {children}
    </ThemeProvider>
  )
}

/***************************/
/******** PROPTYPES ********/
/***************************/
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
