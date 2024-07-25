import { createGlobalStyle, styled } from 'styled-components'
import colors from './config/colors'

export const GlobalStyle = createGlobalStyle`
  // reset
  * {
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
      color: ${colors.black};
      box-sizing: border-box;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
      display: block;
    }
    body {
      line-height: 1;
    }
    ol, ul {
      list-style: none;
    }
    blockquote, q {
      quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
    button {
      border: none;
      margin: 0;
      padding: 0;
      width: auto;
      overflow: visible;

      background: transparent;

      color: inherit;
      font: inherit;

      line-height: normal;

      -webkit-font-smoothing: inherit;
      -moz-osx-font-smoothing: inherit;
                
      outline: none;
    }

    font-family: 'Open Sans', sans-serif;
    color: ${colors.grey[100]};

    body {
      background: ${colors.white};
    }
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

// simple grid system
export const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

export const Row = styled.div`
  display: flex;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;

export const Col = styled.div<{ span?: number }>`
  display: inline-block;
  position: relative;
  width: 100%;
  padding: 16px 8px;

  flex: 0 0 100%;
  max-width: 100%;

  @media (min-width: 768px) {
    ${({ span }) => span && `
      flex: 0 0 ${(span / 12) * 100}%;
      max-width: ${(span / 12) * 100}%;
    `}
  }
`;
