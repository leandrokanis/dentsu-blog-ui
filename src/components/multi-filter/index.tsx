import React, { useCallback, useState } from 'react'
import { Wrapper, Title, FilterGroup, FilterItem, Subtitle, Footer} from './index.styles'
import { IAuthor, ICategory } from '../../types'
import Button from '../button'


interface MultiFilterProps {
  categories: ICategory[]
  authors: IAuthor[]
  onFilter: (categories: ICategory[], authors: IAuthor[]) => void
}
  
const MultiFilter: React.FC<MultiFilterProps> = ({ categories, authors, onFilter }: MultiFilterProps) => {
  const [selectedCategories, setSelectedCategories] = useState<ICategory[]>([])
  const [selectedAuthors, setSelectedAuthors] = useState<IAuthor[]>([])

  const handleSelectAuthor = useCallback((author: IAuthor) => {
    const hasAuthor = selectedAuthors.find(a => a.id === author.id)
    if (hasAuthor) {
      setSelectedAuthors(selectedAuthors.filter(a => a.id !== author.id))
      return
    }

    setSelectedAuthors([...selectedAuthors, author])
  }, [selectedAuthors])

  const handleSelectCategory = useCallback((category: ICategory) => {
    const hasCategory = selectedCategories.find(c => c.id === category.id)
    if (hasCategory) {
      setSelectedCategories(selectedCategories.filter(c => c.id !== category.id))
      return
    }

    setSelectedCategories([...selectedCategories, category])
  }, [selectedCategories])

  const handleApplyFilters = useCallback(() => {
    onFilter(selectedCategories, selectedAuthors)
  }, [selectedAuthors, selectedCategories])

  return (
    <Wrapper>
      <Title>
        <span className="material-symbols-outlined">tune</span>
        Filters
      </Title>

      <Subtitle>Category</Subtitle>

      <FilterGroup>
        {categories.map((category) => (
          <FilterItem
            key={category.id}
            isSelected={!!selectedCategories.find(c => c.id === category.id)}
            onClick={() => handleSelectCategory(category)}
          >
            {category.name}
          </FilterItem>
        ))}
      </FilterGroup>

      <Subtitle>Author</Subtitle>

      <FilterGroup>
        {authors.map((author) => (
          <FilterItem
            key={author.id}
            isSelected={!!selectedAuthors.find(a => a.id === author.id)}
            onClick={() => handleSelectAuthor(author)}
          >{author.name}</FilterItem>
        ))}
      </FilterGroup>

      <Footer>
        <Button
          variant="primary"
          isFull
          onClick={() => handleApplyFilters()}
        >
          Apply filters
        </Button>
      </Footer>
    </Wrapper>
  )
}

export default MultiFilter
