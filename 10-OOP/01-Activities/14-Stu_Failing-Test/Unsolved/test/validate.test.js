// TODO: Import the Validate class.
const Validate = require('../validate')

// TODO: Describe a testing suite for checking the functionality of the Validate class.
describe('Validate', () => {
    describe('invalid password', () => {
        it('should return flase when given empty string argument', () =>
        {   const str = '';
            const testValidate = new Validate();
            expect(testValidate.isPassword(str)).toEqual(false);
        });
    });
});

// TODO: Write a test that asserts that isPassword() returns false when passed an empty string.
