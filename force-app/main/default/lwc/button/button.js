import { LightningElement,  api } from 'lwc';

export default class Button extends LightningElement {
    @api label;
    @api icon;

    handleButton(event) {
        const customEvent = new CustomEvent('buttonclick', {
            /* explicação do módulo no salesforce: the handleMultiply function call to
            the onbuttonclick handler in the lightning-layout-item. This keeps us from
            adding a handler on every button, resulting in cleaner, faster code. */
            bubbles: true // permite passar o evento custom para outras tags pai que o envolvem
        })

        this.dispatchEvent(customEvent)
    }
}