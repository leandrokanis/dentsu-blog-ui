import React, { useState } from 'react'
import { 
  DropdownContainer,
  DropdownHeader,
  DropdownMenu,
  MenuItem,
  SelectedOptions,
  OptionPill,
  RemoveButton,
  Overlay,
} from './index.styles'

interface OptionDropdownProps {
  children?: React.ReactNode
  options: string[]
  onChange: (selectedOptions: string[]) => void
}

const Dropdown: React.FC<OptionDropdownProps> = ({ options, onChange, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option: string) => {
    const nextSelectedOptions = [...selectedOptions, option]
    setSelectedOptions(nextSelectedOptions)
    onChange(nextSelectedOptions)
    setIsOpen(false)
  }

  const handleRemoveOption = (option: string) => {
    const nextSelectedOptions = selectedOptions.filter(o => o !== option)
    setSelectedOptions(nextSelectedOptions)
    onChange(nextSelectedOptions)
  }

  return (
    <DropdownContainer>
      <DropdownHeader onClick={handleToggleDropdown}>
        { children }
        <span className="material-symbols-outlined"> expand_more </span>
      </DropdownHeader>

      <DropdownMenu isOpen={isOpen}>
        {options.map(option => (
          <MenuItem key={option} onClick={() => handleOptionClick(option)}>
            {option}
          </MenuItem>
        ))}
      </DropdownMenu>

      {selectedOptions.length > 0 && (
        <SelectedOptions>
          {selectedOptions.map(option => (
            <OptionPill key={option}>
              {option}
              <RemoveButton onClick={() => handleRemoveOption(option)}>
                <span className="material-symbols-outlined"> close </span>
              </RemoveButton>
            </OptionPill>
          ))}
        </SelectedOptions>
      )}

      <Overlay isOpen={isOpen} onClick={handleToggleDropdown} />
    </DropdownContainer>
  )
}

export default Dropdown
