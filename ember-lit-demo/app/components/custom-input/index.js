import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class CustomInputComponent extends Component {
  constructor(owner, args) {
    super(owner, args);
    console.log(this.args.value);
  }

  @action
  onInput(event) {
    console.log(event);
  }
  @action
  onChange(event) {
    console.log(event);
  }
}
