import Franc from './franc';
import Dollar from './dollar';

abstract class Money {
    static franc(amount: number) {
        return new Franc(amount);
    }

    static dollar(amount: number) {
        return new Dollar(amount);
    }

    protected amount: number;

    abstract times(multiplier: number): Money;

    constructor(amount: number) {
        this.amount = amount;
    }

    equals(dollar: Money) {
        return this.amount === dollar.amount;
    }
}

export default Money;
