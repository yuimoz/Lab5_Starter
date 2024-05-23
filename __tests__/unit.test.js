// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber tests
test('phone num1 right format (CORRECT) isPhoneNumber', () => { // test correct/normal syntax phone number
   expect(isPhoneNumber('(619) 890-4567')).toBe(true);
});

test('phone num2 exceeded digits (INCORRECT) isPhoneNumber', () => { // test incorrect syntax (more than 10 num) phone num
   expect(isPhoneNumber('48930218912')).tobe(false);
});

test('phone num4 wrong format (INCORRECT) isPhoneNumber', () => { // test incorrect syntax (non-existent phone num type)
   expect(isPhoneNumber('10-10-10')).toBe(false);
});

test('phone num5 alternative format (CORRECT) isPhoneNumber', () => { // test other syntax but still correct phone num 
   expect(isPhoneNumber('749-8435')).toBe(true);
}); 

// isEmail tests
test('email1 university domain (CORRECT) isEmail', () => {
   expect(isEmail('team26cse110@ucsd.edu')).toBe(true);
});

test('email2 underscores email (CORRECT) isEmail', () => {
   expect(isEmail('_iris_@gmail.com')).toBe(true);
});

test('email3 no valid domain (INCORRECT isEmail', () => {
   expect(isEmail('usern2@worlds')).toBe(false);
});

test('email4 missing local part (INCORRECT) isEmail', () => {
   expect(isEmail('@worlds.com')).toBe(false);
});


// isStrongPassword tests
test('pwd1 three letters, only letters (INCORRECT) isStrongPassword', () => {
   expect(isStrongPassword('two').toBe(false));
});

test('pwd2 within length isStrongPassword', () => {
   expect(isStrongPassword('_1234Passwrd')).toBe(true);
});