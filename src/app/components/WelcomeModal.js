import React from 'react';

export default class WelcomeModal extends React.Component {
  render () {

  return <div>
      <a id="m0" href="#modal0"><h2>Hello</h2>
      <p>Welcome message</p></a><div id="modal0" className="modalDialog">
      <div>
        <a href="#close" title="Close" className="close">X</a>
        <h2>Внимание:</h2>
        <p>Произошло монтирование</p>
      </div>
    </div> 
    </div>;

}
  componentDidMount () {
    this.state = {modal: true}
    if (this.state.modal) {  
      window.onload = () => {
      document.querySelector('a[href="#modal0"]').click();
      }
    }
  }

}


