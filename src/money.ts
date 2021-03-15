class Money {
    static franc(amount: number) {
        return new Money(amount, 'USD');
    }

    static dollar(amount: number) {
        return new Money(amount, 'CHF');
    }

    private amount: number;
    private currency: string;

    times(multiplier: number) {
        return new Money(this.amount * multiplier, this.currency);
    }

    constructor(amount: number, currency: string) {
        this.amount = amount;
        this.currency = currency;
    }

    equals(money: Money) {
        return this.amount === money.amount
            && this.currency === money.currency;
    }
}

export default Money;
