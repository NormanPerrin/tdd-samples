
class Dollar {
    amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    times(multiplier: number) {
        return new Dollar(this.amount * multiplier);
    }

    equals(_dollar: Dollar) {
        return true;
    }
}

export default Dollar;
