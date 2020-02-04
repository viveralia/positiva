import React from 'react'
import styled from 'styled-components'
import Container from '../Grid/Container'

/***************************/
/******** CSS IN JS ********/
/***************************/
const BrandName = styled.h1`
  color: ${props => props.theme.colors.action};
  font-size: 1.325rem;
  letter-spacing: -0.0525rem;
  @media (min-width: ${props => props.theme.mediaqueries.md}) {
    font-size: 1.625rem;
  }
`

/***************************/
/***** MAIN COMPONENT ******/
/***************************/
const Header = () => {
  return (
    <header>
      <Container fullWidth spacingY={1.725}>
        <BrandName>positiva(+)</BrandName>
      </Container>
    </header>
  )
}

export default Header
