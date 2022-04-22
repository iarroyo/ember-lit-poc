import { css } from 'lit';

/**
 * Global Styles - can be imported in Lit components and referenced in your style definition.
 * @ref https://material.io/design/color/the-color-system.html
 */
export let theme = css`
  :host {
    --color-primary: #1479cc;
    --color-secondary: #9f40f7;

    --color-background: #d6edff;
    --color-on-background: #535353;

    --color-surface: #ffffff;
    --color-on-surface: #535353; 
  }
`
export default theme;