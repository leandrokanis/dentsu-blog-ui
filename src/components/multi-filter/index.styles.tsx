import styled from 'styled-components'
import colors from '../../config/colors'


export const Wrapper = styled.div`
  padding: 16px;
  border-radius: 16px;
  background-color: ${colors.grey[800]};
  box-shadow: 0px 4px 30px 0px ${colors.navy[300] + '3D'};
`

export const Title = styled.h3`
  font-size: 24px;
  color: ${colors.navy[100]};
  display: flex;
  align-items: center;

  .material-symbols-outlined {
    font-size: 24px;
    margin-right: 8px;
  }
`

export const FilterGroup = styled.ul`
  margin-top: 12px;
`

export const Subtitle = styled.h4`
  margin-top: 24px;
  font-size: 16px;
  color: ${colors.navy[100]};
  font-weight: 600;
`

interface FilterItemProps {
  isSelected?: boolean
}

export const FilterItem = styled.li<FilterItemProps>`
  padding: 10px 8px;
  font-size: 14px;
  color: ${colors.grey[100]};
  border: 1px solid transparent;
  border-bottom-color: ${colors.grey[600]};
  cursor: pointer;
  margin-top: 4px;

  ${props => props.isSelected && `
    color: ${colors.teal[200]};
    border: 1px solid ${colors.teal[200]};
    border-radius: 8px;
    font-weight: 600;
    background-color: ${colors.grey[700]};
  `}

  &:hover {
    background-color: ${colors.grey[700]};
    border-bottom-color: ${colors.teal[200]};
    border-radius: 8px 8px 0 0;
  }
`

export const Footer = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
`