import React from 'react'
import { Wrapper, Title, FilterGroup, FilterItem, ApplyButton } from './index.styles'
import { IAuthor, ICategory } from '../../types'


interface MultiFilterProps {
  categories: ICategory[]
  authors: IAuthor[]
}
  
const MultiFilter: React.FC<MultiFilterProps> = ({ categories, authors }: MultiFilterProps) => {
  return (
    <Wrapper>
      <Title>Filters</Title>

      <FilterGroup>
        <h4>Category</h4>
        {categories.map((category) => (
          <FilterItem key={category.id}>{category.name}</FilterItem>
        ))}
      </FilterGroup>

      <FilterGroup>
        <h4>Author</h4>
        {authors.map((author) => (
          <FilterItem key={author.id}>{author.name}</FilterItem>
        ))}
      </FilterGroup>

      <ApplyButton>Apply filters</ApplyButton>
    </Wrapper>
  )
}

export default MultiFilter
