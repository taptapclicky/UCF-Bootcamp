const Validate = require('../validate.js');

describe('Validate', () => {
  // TODO: Write a test that checks if isPassword() returns false when the password is less than 8 characters.
  describe('password length', () => {
    it('should return false if password is less than 8 characters long', () => {
      const testValidate = new Validate();
      const result = testValidate.isPassword('');

      expect(result).toEqual(false);
    })
  })
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 uppercase.
  describe('password contains uppercase', () => {
    it('should return false if password does not contain at least 1 uppercase letter', () => {
      const testValidate = new Validate();
      const result = testValidate.isPassword('password123');

      expect(result).toEqual(false);
    })
  })
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 lowercase.
  describe('password contains lowercase', () => {
    it('should return false if password does not contain at least 1 lowercase letter', () => {
      const testValidate = new Validate();
      const result = testValidate.isPassword('PASSWORD123');

      expect(result).toEqual(false);
    })
  })
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 number.
  describe('password contains number', () => {
    it('should return false if password does not contain at least 1 number', () => {
      const testValidate = new Validate();
      const result = testValidate.isPassword('Password');

      expect(result).toEqual(false);
    })
  })
  // TODO: Write a test that checks if isPassword() returns true when the password is at least 8 characters long and contains an uppercase, lowercase, and number.
  describe('password meets all criteria', () => {
    it('should return true if password contains uppercase, lowercase and number', () => {
      const testValidate = new Validate();
      const result = testValidate.isPassword('Password1234');

      expect(result).toEqual(true);
    })
  })
});
