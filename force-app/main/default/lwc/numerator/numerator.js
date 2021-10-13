import { LightningElement, api } from 'lwc';

export default class Numerator extends LightningElement {

    // @api counter = 0;

    // para indicar que a variável é privada
    _currentCount = 0;
    priorCount = 0;
    // para setar um getter e setter públicos, o @api no getter jpa basta
    @api
    get counter() {
        return this._currentCount;
    }
    
    set counter(value) {
        this.priorCount = this._currentCount;
        this._currentCount = value;
    }

    handleIncrement() {
        console.log('chamou o somar')
        this.counter++;
    }

    handleDecrement() {
        console.log('chamou o subtrair')
        this.counter--;
    }

    handleMultiply(event) {
        console.log('chamou o multiplicar')
        const factor = event.detail;
        this.counter *= factor;
    }

    /* explicação no tutorial: In the parent (augmentor), the new button triggers the
    handleMaximizeCounter handler, which calls the child component (numerator) and triggers
    its public maximizeCounter function. */
    // uma função pública que pode ser chamada pelo component que envolve o numerator que realiza alguma ação no numerator
    @api
    maximizeCounter() {
        this._currentCount += 1000000;
    }
}