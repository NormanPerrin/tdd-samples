import Dollar from "./dollar";

describe('money exchange', () => {
    describe('dollar', () => {
        it('should be able to multiply a currency', () => {
            const five = new Dollar(5);
            expect(five.times(2).equals(new Dollar(10))).toBe(true);
        });

        it('should not change the object', () => {
            const five = new Dollar(5);
            expect(new Dollar(10).equals(five.times(2))).toBe(true);
            expect(new Dollar(15).equals(five.times(3))).toBe(true);
        });

        it('should be comparable by .equal', () => {
            expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
            expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
        });
    });

    describe('franc', () => {
        it('should be able to multiply a currency', () => {
            const five = new franc(5);
            expect(five.times(2).equals(new franc(10))).toBe(true);
        });

        it('should not change the object', () => {
            const five = new franc(5);
            expect(new franc(10).equals(five.times(2))).toBe(true);
            expect(new franc(15).equals(five.times(3))).toBe(true);
        });

        it('should be comparable by .equal', () => {
            expect(new franc(5).equals(new Franc(5))).toBe(true);
            expect(new franc(5).equals(new Franc(6))).toBe(false);
        });
    });
});
