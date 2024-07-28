import styled from 'styled-components'
import colors from '../../config/colors'
import exp from 'constants'

export const DropdownContainer = styled.div`
  position: relative;
  z-index: 21;
`

export const DropdownHeader = styled.div`
  width: max-content;
  cursor: pointer;
  border: 1px solid ${colors.red[200]};
  display: flex;
  align-items: center;
  height: 32px;
  background-color: ${colors.white};
  font-size: 12px;
  color: ${colors.red[200]};
  font-weight: 600;
  z-index: 21;
  border-radius: 42px;
  padding: 0 16px;

  .material-symbols-outlined {
    font-size: 20px;
    margin-left: 4px;
  }

  &:hover {
    background-color: ${colors.grey[700]};
  }
`

interface DropdownMenuProps {
  isOpen: boolean;
}

export const DropdownMenu = styled.ul<DropdownMenuProps>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 314px;
  background-color: ${colors.grey[800]};
  box-shadow: 0px 4px 30px 0px ${colors.navy[300] + '3D'};
  list-style: none;
  padding: 16px;
  margin: 0;
  display: ${props => (props.isOpen ? 'block' : 'none')};
  z-index: 21;
  border-radius: 16px;
`

export const MenuItem = styled.li`
  padding: 10px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export const SelectedOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 32px;
  width: max-content;
  background-color: ${colors.grey[700]};
  border-radius: 42px;
  border: 1px solid ${colors.red[200]};
  align-items: center;
  height: 24px;
  padding: 0 8px;
  margin-top: 2px;
`

export const OptionPill = styled.span`
  font-size: 12px;
  color: ${colors.red[200]};
  font-weight: 600;
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-right: 8px;

    &:after {
      content: ',';
    }
  }
`

export const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${colors.red[200]};
  
  .material-symbols-outlined {
    font-size: 16px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 4px;

    &:hover {
      background-color: ${colors.grey[500]};
    }
  }
`

export const Overlay = styled.div<DropdownMenuProps>`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
`