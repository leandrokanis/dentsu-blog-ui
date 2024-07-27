import styled from 'styled-components'
import colors from '../../config/colors'

export const DropdownContainer = styled.div`
  position: relative;
  z-index: 11;
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
`

export const Caret = styled.span`
  font-size: 12px;
`

interface DropdownMenuProps {
  isOpen: boolean;
}

export const DropdownMenu = styled.ul<DropdownMenuProps>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 0;
  margin: 0;
  display: ${props => (props.isOpen ? 'block' : 'none')};
`

export const MenuItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`

export const SelectedCategories = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
`

export const CategoryPill = styled.span`
  background-color: #f0f0f0;
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
`

export const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`