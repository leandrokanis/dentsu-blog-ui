import React from 'react'
import { Wrapper } from './index.styles'
import { Container } from '../../global.styles'
import Logo from './dentus-logo.svg'

interface Props {
}

const TopBar: React.FC<Props> = () => {
  return (
    <Wrapper>
      <Container>
        <img src={Logo} alt="logo" />
      </Container>
    </Wrapper>
  )
}

export default TopBar