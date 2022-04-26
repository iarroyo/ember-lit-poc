import './App.css';
import {createComponent} from '@lit-labs/react';
import { RupButton as _RupButton, RupDialog as _RupDialog } from 'component-library'; 
import React, { useState } from 'react';

const RupButton = createComponent(
  React,
  'rup-button',
  _RupButton,
  {
    onactivate: 'activate',
    onchange: 'change',
  }
)
const RupDialog = createComponent(
  React,
  'rup-dialog',
  _RupDialog,
  {
    onactivate: 'activate',
    onchange: 'change',
  }
)

function App() {

  const button1={
    label: 'button1',
    action: () =>alert('Click button 1'),
  }

  const button2={
    label: 'button2',
  }

  const [value, setValue] = useState('value');
  const handleClickButton2 = () => {
    setValue(`value-${new Date().getTime()}`)
  }

  const refDialog = React.createRef();

  const [dialogHeader, setDialogHeader] = useState('Sample Dialog Header');
  const updateDialogHeader= ({ target: input }) => {
    setDialogHeader(input.value);
  };

  const onOpenDialog= () => {
    refDialog.current.showModal();
  }

  return (
    <div className="App">
      <div>
        <div>Dummy example with rup-button web component</div>
        <br />
        <div style={{display:'flex'}}>
          <span>Click on&nbsp;</span>
          <RupButton options={button1}></RupButton>
          <span>&nbsp;to display an alert dialog</span>
        </div>
        <br />
        <div style={{display:'flex'}}>
          <span>Click on&nbsp;</span>
          <RupButton
            options={button2} 
            onClick={handleClickButton2}></RupButton>
          <span>&nbsp;to display a different value -> {value}</span>
        </div>
      </div>
      <hr/>
      <div>
        <div>Dummy example with rup-dialog web component</div>
        <br />
        <RupDialog
          ref={refDialog}
          options={{header:dialogHeader}}
        ></RupDialog>

        <label for='dialog-header'>Introduce the title of the dialog header: (if you
          dont introduce any value by default the header title will be&nbsp;
          <b>{dialogHeader}</b></label>
        <div>
          <input id='dialog-header' onInput={updateDialogHeader} />
        </div>
        <br />
        <span>Now open the dialog to see the header value</span>
        <RupButton
            options={{label: 'Open Dialog'}} 
            onClick={onOpenDialog}></RupButton>
      </div>
    </div>
  );
}

export default App;
