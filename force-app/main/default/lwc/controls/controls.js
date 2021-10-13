import { LightningElement } from 'lwc';

export default class Controls extends LightningElement {

    factors = [1, 2, 3, 4, 5, 6];

    handleAdd() {
        const customEvent = new CustomEvent('add');

        this.dispatchEvent(customEvent);
    }

    handleSubtract() {
        const customEvent = new CustomEvent('subtract');

        this.dispatchEvent(customEvent);
    }

    handleMultiply(event) {
        // acessando um atributo na tag com "data-"alguma coisa, no exemplo "data-factor"
        const factor = event.target.dataset.factor;

        // passamos o nome do evento e no segundo parâmetro um objeto com o detail para enviar dados
        const customEvent = new CustomEvent('multiply', {
            detail: factor
        });

        this.dispatchEvent(customEvent);
    }
}