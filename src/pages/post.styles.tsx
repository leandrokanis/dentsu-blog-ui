import styled from 'styled-components'
import colors from '../config/colors'
import { breakpoints } from '../config/breakpoints'

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;

  /* &::after {
    content: '';
    position: absolute;
    width: 1282px;
    height: 1282px;
    background: radial-gradient(closest-side, ${colors.blue[200]}, ${colors.grey[800] + '00'});
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
  margin-top: 24px;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 56px;
    margin-bottom: 0;
    margin-top: 0;
  }
`

export const Info = styled.div`
  display: flex;
  gap: 8px;
  padding: 0 12px;
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
  margin-top: 8px;

  @media (min-width: ${breakpoints.tablet}) {
    height: 383px;
    margint-top: 0;
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
  margin-bottom: -8px;
  font-weight: 600;
  font-size: 24px;
  display: block;
  border-top: 1px solid ${colors.grey[500]};
  padding-top: 28px;
  width: 100%;
  margin-top: 12px;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 36px;
    margin-top: 12px;
    padding-top: 48px;
  }
`