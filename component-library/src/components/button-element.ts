import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { theme } from '../styles/theme';

interface Options{
  label: string
  action: () => unknown;
}

@customElement('rup-button')
export class RupButton extends LitElement {
  static styles = [
    theme,
    css`
      button {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        border-radius: .25rem;
        font-weight: 400;
        vertical-align: middle;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        transition-property: background-color,border-color,color,fill,stroke;
        transition-duration: .2s;
        cursor: pointer;
        outline: 0;
        display: inline-flex;
        padding: 0 .75rem;
        height: 2rem;
        line-height: calc(2rem - 2px);
        min-width: 60px;
        border: 1px solid var(--color-primary);
        color: var(--color-primary);
        background-color: transparent
      }
      button:hover{
        border: 1px solid var(--color-primary);
        color: var(--color-primary);
        background-color: var(--color-background)
      }
    `
  ];

  @property({ type: Object })
  options!: Options;

  render() {
    return this.options ? html`<button type='button' @click=${this.options.action}>${this.options.label}</button>` : '';
  }
}
