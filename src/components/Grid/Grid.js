import styled from 'styled-components'
import PropTypes from 'prop-types'

/***************************/
/******** CSS IN JS ********/
/***************************/
const Grid = styled.div`
  display: grid;
  grid-template-columns: ${props => `repeat(${props.sm}, 1fr)`};
  grid-gap: ${props => props.spacing + 'rem'};
  align-items: center;
  @media (min-width: ${props => props.theme.mediaqueries.md}) {
    grid-template-columns: ${props => props.md && `repeat(${props.md}, 1fr)`};
    grid-gap: ${props => props.spacing * 1.425 + 'rem'};
  }
  @media (min-width: ${props => props.theme.mediaqueries.lg}) {
    grid-template-columns: ${props => props.lg && `repeat(${props.lg}, 1fr)`};
    grid-gap: ${props => props.spacing * 1.75 + 'rem'};
  }
`

/***************************/
/******** PROPTYPES ********/
/***************************/
Grid.propTypes = {
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  spacing: PropTypes.number,
}

export default Grid
