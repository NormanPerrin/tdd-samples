import Money from './money';

describe('money exchange', () => {
    describe('dollar', () => {
        it('should be able to multiply a currency', () => {
            const five = Money.dollar(5);
            expect(five.times(2).equals(Money.dollar(10))).toBe(true);
        });

        it('should not change the object', () => {
            const five = Money.dollar(5);
            expect(five.times(2).equals(Money.dollar(10))).toBe(true);
            expect(five.times(3).equals(Money.dollar(10))).toBe(true);
        });

        it('should be comparable by .equal', () => {
            expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
            expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
        });
    });

    describe('franc', () => {
        it('should be able to multiply a currency', () => {
            const five = Money.franc(5);
            expect(five.times(2).equals(Money.franc(10))).toBe(true);
        });

        it('should not change the object', () => {
            const five = Money.franc(5);
            expect(Money.franc(10).equals(five.times(2))).toBe(true);
            expect(Money.franc(15).equals(five.times(3))).toBe(true);
        });

        it('should be comparable by .equal', () => {
            expect(Money.franc(5).equals(Money.franc(5))).toBe(true);
            expect(Money.franc(5).equals(Money.franc(6))).toBe(false);
        });
    });
});
