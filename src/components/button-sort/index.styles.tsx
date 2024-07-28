import styled from 'styled-components'
import colors from '../../config/colors'
import { breakpoints } from '../../config/breakpoints'

export const Wrapper = styled.button`
  border-radius: 42px;
  background-color: transparent;
  cursor: pointer;
  padding: 0 16px;
  border: none;
  display: flex;
  align-items: center;
  height: 30px;
  font-weight: 500;
  color: ${colors.grey[200]};

  @media (min-width: ${breakpoints.tablet}) {
    height: 36px;
  }
  
  .material-symbols-outlined {
    font-size: 14px;
    margin-left: 8px;
    font-weight: 600;
  }
    
  span {
    font-size: 12px;
    font-weight: 600;
    color: inherit;
  }

  &:hover, &:active  {
    background-color: ${colors.teal[200]};
    color: ${colors.grey[800]};
  }
`