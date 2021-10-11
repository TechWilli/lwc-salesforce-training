import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
  text

  changeHandler(event) {
    this.text = event.target.value;
  }

}