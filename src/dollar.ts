import Money from './money';

class Dollar extends Money {
    times(multiplier: number) {
        return new Dollar(this.amount * multiplier);
    }

    equals(dollar: Dollar) {
        return super.equals(dollar);
    }
}

export default Dollar;
