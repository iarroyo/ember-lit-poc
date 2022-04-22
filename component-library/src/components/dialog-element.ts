import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import {ifDefined } from 'lit/directives/if-defined.js';
import { theme } from '../styles/theme';

interface Options{
  header: string
  isOpen: boolean
  action: () => unknown;
}

@customElement('rup-dialog')
export class RupDialog extends LitElement {
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

  @query('dialog')
  dialog: any;

  handleClick({target: dialog}:{ target: any }){
    if(dialog.nodeName === 'DIALOG'){
      dialog.close('dismiss');
      !!this.options.action && this.options.action();
    }
  }

  showModal(){
    this.dialog.showModal();
  }

  close(){
    this.dialog.close();
  }

  render() {
    console.log(this.options.isOpen)
    return this.options ? html`
    <dialog id='dialog' open=${ifDefined(this.options.isOpen? this.options.isOpen: undefined)} @click=${this.handleClick}>
      <div id="dialogContainer">
        <span>${this.options.header}</span>
        <div>
          Aliqua occaecat labore esse do occaecat nulla.
          Duis duis veniam nulla reprehenderit adipisicing fugiat.
          Minim laborum tempor eu nisi velit elit laboris. 
          Excepteur duis excepteur cupidatat do ullamco velit deserunt irure officia.
          Irure sit non velit veniam ullamco labore cupidatat magna elit sit incididunt ad. 
          Duis non ullamco anim laboris minim officia sint anim in excepteur. 
          Veniam adipisicing aute exercitation cillum.
        </div>
      </div>
    </dialog>` 
    : '';
  }
}
