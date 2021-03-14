abstract class Money {
    protected amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    equals(dollar: Money) {
        return this.amount === dollar.amount;
    }
}

export default Money;
