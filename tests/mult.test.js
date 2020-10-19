const mult = require('../src/mult');

it('should calculate the correct product', () => {
    const result = mult(3, 5);
    expect(result).toBe(15);
});