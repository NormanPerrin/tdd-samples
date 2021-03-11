import Dollar from "./dollar";

describe('money exchange', () => {
    it('should be able to multiply a currency', () => {
        const five = new Dollar(5);
        expect(five.times(2).amount).toEqual(10);
    });

    it('should not change the object', () => {
        const five = new Dollar(5),
            ten = five.times(2),
            twenty = ten.times(2);

        expect(five.amount).toEqual(5);
        expect(ten.amount).toEqual(10);
        expect(twenty.amount).toEqual(20);
    });

    it('should be comparable by .equal', () => {
        expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
    });
});
