import React from 'react'
import { Wrapper } from './index.styles'

type TOrderBy = 'newest' | 'oldest'

interface Props {
  onClick: () => void
  state: TOrderBy
}

const ButtonSort: React.FC<Props> = (props: Props) => {
  return (
    <Wrapper
      onClick={props.onClick}
      type="button"
    >
      <span>
        {props.state === 'newest' ? 'Newest' : 'Oldest'} first
      </span>

      <span className="material-symbols-outlined">swap_vert</span>
    </Wrapper>
  )
}

export default ButtonSort
