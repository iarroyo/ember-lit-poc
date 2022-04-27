import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
  @tracked
  value = 'value';

  @tracked
  inputValue = '';

  @tracked
  dialogHeader = 'Sample Dialog Header';

  dialog;

  get button1() {
    return {
      label: 'button1',
      action: this.handleClickButton1,
    };
  }

  get dialogOptions() {
    return {
      header: this.dialogHeader,
    };
  }

  get openDialogButton() {
    return {
      label: 'Open Dialog',
    };
  }

  @action
  refDialog(element) {
    this.dialog = element;
  }

  @action
  handleClickButton1() {
    alert('Click button 1');
  }
  @action
  handleClickButton2() {
    this.value = `value-${new Date().getTime()}`;
  }

  @action
  onOpenDialog() {
    this.dialog.showModal();
  }

  @action
  setDialogHeader({ target: input }) {
    this.dialogHeader = input.value;
  }

  @action
  onInput(event) {
    this.inputValue = event.target.value;
  }
}
