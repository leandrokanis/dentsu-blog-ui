import React from 'react'
import { Wrapper } from './index.styles'

interface Props {
  icon?: string
  onClick?: () => void
  children?: React.ReactNode
  variant: 'primary' | 'secondary'
  isFull?: boolean
}

const Button: React.FC<Props> = (props: Props) => {
  return (
    <Wrapper
      onClick={props.onClick}
      type="button"
      className={`is-${props.variant}` + (props.isFull ? ' is-full' : '')}
    >
      {props.icon &&  <span className="material-symbols-outlined"> arrow_back </span>}

      <span>
        {props.children}
      </span>
    </Wrapper>
  )
}

export default Button
