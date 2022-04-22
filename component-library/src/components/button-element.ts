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
      :host {
        display: block;
        color: var(--color-primary);
      }
    `
  ];

  @property({ type: Object })
  options!: Options;

  render() {
    return this.options ? html`<button @click=${this.options.action}>${this.options.label}</button>` : '';
  }
}
