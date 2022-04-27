import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { theme } from '../styles/theme';

interface Options{
  value: string
  action: () => unknown;
}

@customElement('rup-input')
export class RupInput extends LitElement {
  static styles = [
    theme,
    css`
      input {
        border: 1px solid #abbbc9;
        width: 100%;
        padding: .4375rem .75rem;
        border-radius: 4px;
        background: #FFF;
        line-height: 1.4285714286;
        font-size: .875rem;
        transition-property: background-color,border-color,box-shadow,color,fill,stroke
      }
      button:hover{
        border-color: #7abaeb
      }
      button:focus{
        border-color: #FFF;
        box-shadow: 0 0 0 2px #005fcc;
        background-clip: padding-box
      }
    `
  ];

  @property({type: String})
  type!: any;

  @property({ type: String })
  value!: string;

  @property({attribute: false})
  onInput = (event:Event)=>{};

  handleInput(event: InputEvent){
    this.onInput(event);
  }

  render() {
    return html`<input @input=${this.handleInput} value=${this.value} />`;
  }
}
