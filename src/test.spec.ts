import Dollar from "./dollar";

describe('money exchange', () => {
    it('should be able to multiply a currency', () => {
        const five = new Dollar(5);
        expect(five.times(2).amount).toEqual(10);
    });
});
