import Money from './money';

class Franc extends Money {
    times(multiplier: number) {
        return new Franc(this.amount * multiplier);
    }

    equals(franc: Franc) {
        return super.equals(franc);
    }
}

export default Franc;
