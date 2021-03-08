
class Dollar {
    amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    times(multiplier: number) {
        this.amount *= multiplier;
        return this;
    }
}

export default Dollar;
