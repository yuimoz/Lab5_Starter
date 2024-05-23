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
// password first char mus start with a letter, contain at least 4 chars, no more than 15 chars
// no chars other than letters, numbers, and underscores
test('pwd1 three letters, only letters (INCORRECT) isStrongPassword', () => {
   expect(isStrongPassword('two').toBe(false));
});

test('pwd2 contains all requirements (CORRECT) isStrongPassword', () => {
   expect(isStrongPassword('A_234Passwrd')).toBe(true);
});

test('pwd3 exceed char limit (INCORRECT) isStrongPassword', () => {
   expect(isStrongPassword('1234567890123450')).toBe(false);
});

test('pwd4 within length (CORRECT) isStrongPassword', () => {
   expect(isStrongPassword('i3_3ik1')).toBe(true);
});


// isDate tests
// matches the form XX / XX / YYYY where XX can be 1 or 2 digits long and YYYY is always 4 digits long
test('date1 correct valid format (CORRECT) isDate', () => {
   expect(isDate('06/02/2002')).toBe(true);
});

test('date2 incorrect year format (INCORRECT) isDate', () => {
   expect(isDate('03/25/02')).toBe(false);
});

test('date3 alternative format (CORRECT) isDate', () => { 
   expect(isDate('8/6/2024')).toBe(true);
});

test('date4 invalid month (INCORRECT) isDate', () => {
   expect(isDate('012/15/2024')).toBe(false);
}); 


// isHexColor tests
// matches valid 3 or 6 char hex codes
test('hex1 correct 6 char hex code without # (CORRECT) isHexColor', () => {
   expect(isHexColor('7c8bbf')).toBe(true);
});

test('hex2 correct 3 char hex code (CORRECT) isHexColor', () => {
   expect(isHexColor('#1AE')).toBe(true);
});

test('hex3 incorrect exceeding chars hex code (INCORRECT) isHexColor', () => {
   expect(isHexColor('#A1707U23')).toBe(false);
});

test('hex4 incorrect less than required chars (INCORRECT) isHexColor', () => {
   expect(isHexColor('#6a')).toBe(false);
})