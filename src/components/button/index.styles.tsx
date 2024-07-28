import styled from 'styled-components'
import colors from '../../config/colors'

export const Wrapper = styled.button`
  border-radius: 42px;
  background-color: ${colors.red[200]};
  cursor: pointer;
  padding: 0 16px;
  border: none;
  display: flex;
  align-items: center;
  height: 30px;
  border: 1px solid ${colors.red[200]};

  @media (min-width: 768px) {
    height: 46px;
  }
  
  .material-symbols-outlined {
    font-size: 14px;
    margin-right: 8px;
    font-weight: 600;
  }
    
  span {
    font-size: 12px;
    color: ${colors.white};
    font-weight: 600;
  }

  &:hover, &:active  {
    background-color: ${colors.red[100]};
    border-color: ${colors.red[100]};
  }

  &.is-secondary {
    background-color: transparent;
    border: 1px solid ${colors.red[200]};

    span {
      color: ${colors.red[200]};
    }

    &:hover, &:active  {
      background-color: ${colors.grey[700]};
    }
  }

  &.is-full {
    width: 100%;
    justify-content: center;
  }
`