import React, { useState } from 'react'
import { 
  DropdownContainer,
  DropdownHeader,
  Caret,
  DropdownMenu,
  MenuItem,
  SelectedCategories,
  CategoryPill,
  RemoveButton,
} from './index.styles'

interface CategoryDropdownProps {
  categories: string[]
}

const Dropdown: React.FC<CategoryDropdownProps> = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleCategoryClick = (category: string) => {
    setSelectedCategories([...selectedCategories, category])
  }

  const handleRemoveCategory = (category: string) => {
    setSelectedCategories(selectedCategories.filter(c => c !== category))
  }

  return (
    <DropdownContainer>
      <DropdownHeader onClick={handleToggleDropdown}>
        Category <span className="material-symbols-outlined"> expand_more </span>
      </DropdownHeader>

      <DropdownMenu isOpen={isOpen}>
        {categories.map(category => (
          <MenuItem key={category} onClick={() => handleCategoryClick(category)}>
            {category}
          </MenuItem>
        ))}
      </DropdownMenu>

      {selectedCategories.length > 0 && (
        <SelectedCategories>
          {selectedCategories.map(category => (
            <CategoryPill key={category}>
              {category}
              <RemoveButton onClick={() => handleRemoveCategory(category)}>X</RemoveButton>
            </CategoryPill>
          ))}
        </SelectedCategories>
      )}
    </DropdownContainer>
  )
}

export default Dropdown
