import styled from 'styled-components'
import colors from '../../config/colors'

export const Wrapper = styled.div`
  position: relative;
  background-color: ${colors.grey[800]};
  border-radius: 16px;
  box-shadow: 0 4px 16px ${colors.navy[300] + '4A'};
  height: 369px;
  width: 100%;
  padding-bottom: 48px;
  transition: 0.2s ease-out;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    height: 425px;
    box-shadow: 0 4px 30px ${colors.navy[300] + '4A'};
  }

  &:hover {
    cursor: pointer;
    box-shadow: 4px 8px 16px ${colors.navy[300] + '4A'};
    transform: translate(-6px, -6px) scale(1.01);
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  padding-bottom: 0;
  height: 164px;
`

export const Thumbnail = styled.img`
  border-radius: 16px 16px 0 0;
  height: 150px;
  object-fit: cover;
  width: 100%;

  @media (min-width: 768px) {
    height: 196px;
  }
`

export const Info = styled.div`
  display: flex;
  justify-content: start;
  margin-bottom: 16px;

  span {
    color: ${colors.grey[200]};
    font-size: 14px;
    display: flex;
    align-items: center;
  }

  & > span:first-child {
    margin-right: 8px;
    &::after {
      content: '•';
      margin-left: 8px;
      font-size: 20px;
      line-height: 16px;
    }
  }
`

export const Title = styled.h2`
  color: ${colors.black};
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  margin-bottom: 8px;
  text-align: left;
`

export const Excerpt = styled.div`
  overflow: hidden;

  p {
    color: ${colors.grey[100]};
    font-size: 14px;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* Number of lines */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const Categories = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  display: flex;
  gap: 8px;
  justify-content: start;
`

export const Tag = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  background: ${colors.grey[600]};
  border-radius: 42px;

  color: ${colors.grey[200]};
  font-weight: 600;
  font-size: 12px;
`