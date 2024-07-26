import styled from 'styled-components'
import colors from '../../config/colors'
import { breakpoints } from '../../config/breakpoints'

export const Wrapper = styled.header`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${colors.grey[600]};
  height: 64px;
  justify-content: center;
  align-items: center;

  @media (min-width: ${breakpoints.tablet}) {
    height: 88px;
  }
`