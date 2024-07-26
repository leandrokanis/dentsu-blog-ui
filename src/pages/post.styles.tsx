import styled from 'styled-components'
import colors from '../config/colors'

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 875px;
  padding: 16px;
  overflow: hidden;
  position: relative;

  

  /* &::after {
    content: '';
    position: absolute;
    width: 1282px;
    height: 1282px;
    background: radial-gradient(closest-side, ${colors.blue[200]}, ${colors.white + '00'});
    opacity: 0.4;
    z-index: 1;
    top: 50%;
    right: -950px;
  } */
`

export const Title = styled.h1`
  color: ${colors.navy[100]};
  font-weight: 700;
  font-size: 24px;
  line-height: 1.33em;

  @media (min-width: 768px) {
    font-size: 56px;
    margin-bottom: 16px;
  }
`

export const Info = styled.div`
  display: flex;
  gap: 8px;
`

export const ImageAuthor = styled.img`
  border-radius: 50%;
  height: 40px;
  width: 40px;
`

export const LabelAuthor = styled.p`
  color: ${colors.black};
  font-size: 12px;
  line-height: 1.5em;

  span {
    font-weight: 600;
  }
`

export const LabelDate = styled.p`
  color: ${colors.grey[200]};
  font-size: 12px;
  line-height: 1.5;
`

export const Thumbnail = styled.img`
  height: 150px;
  width: 100%;
  object-fit: cover;
  margin-bottom: 24px;
  border-radius: 8px;

  @media (min-width: 768px) {
    height: 383px;
  }
`

export const Text = styled.p`
  color: ${colors.navy[100]};
  font-size: 14px;
  line-height: 1.6em;
  padding-bottom: 16px;
`

export const Subtitle = styled.h2`
  color: ${colors.navy[100]};
  line-height: 1.33em;
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 24px;

  @media (min-width: 768px) {
    font-size: 36px;
  }
`
export const Hr = styled.hr`
  border: 0;
  border-top: 1px solid ${colors.grey[500]};
  margin: 16px 0 28px;
  width: 100%;
`
