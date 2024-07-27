import styled from 'styled-components'
import colors from '../config/colors'

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`

export const EmptyState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-weight: 600;
  width: 100%;
  padding: 200px 0;
  font-size: 24px;
  color: ${colors.grey[400]}; 
`

export const TitleHome = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: ${colors.navy[100]};
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`