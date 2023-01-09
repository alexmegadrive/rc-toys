import { validateName } from '../utils/validateInputs';
import { validateAddress } from '../utils/validateInputs';
import { validatePhone } from '../utils/validateInputs';
import { validateEmail } from '../utils/validateInputs';
import { validateCardNumber } from '../utils/validateInputs';
import { validateCardCVV } from '../utils/validateInputs';
import { validateCardExpDate } from '../utils/validateInputs';

test('Name: should be true on correct name', () => {
  const value = 'Georgii Koloidi';
  expect(validateName(value)).toBeTruthy();
});

test('Name: should be false on incorrect small name (less than 3 chars)', () => {
  const value = 'Ge Kol';
  expect(validateName(value)).toBeFalsy();
});

test('Address: should be true on correct street more than 5 chars', () => {
  const value = 'Sochi Pushkina street';
  expect(validateAddress(value)).toBeTruthy();
});

test('Address: should be false on small words in address street', () => {
  const value = 'Sochi stt';
  expect(validateAddress(value)).toBeFalsy();
});

test('Phone: should be true  on ccorrect number', () => {
  const value = '+791283081209';
  expect(validatePhone(value)).toBeTruthy();
});

test('Phone: should be false on inccorrect number', () => {
  const value = '791283053443591';
  expect(validatePhone(value)).toBeFalsy();
});

test('Email: should be true on incorrect email', () => {
  const value = 'example@example.com';
  expect(validateEmail(value)).toBeTruthy();
});

test('Email: should be false on incorrect email', () => {
  const value = 'e@xampleexamplecom';
  expect(validateEmail(value)).toBeFalsy();
});

test('Card number: should be true  on correct number  ', () => {
  const value = '2222 3333 4444 5555';
  expect(validateCardNumber(value)).toBeTruthy();
});

test('Card number: should be false on incorrect number', () => {
  const value = '2222 33133 44454 5555';
  expect(validateCardNumber(value)).toBeFalsy();
});

test('Card CVV: should be true on corect cvv', () => {
  const value = '123';
  expect(validateCardCVV(value)).toBeTruthy();
});

test('Card CVV: should be false on incorect cvv  ', () => {
  const value = '11a4';
  expect(validateCardCVV(value)).toBeFalsy();
});

test('Card expire date: should be true on correct date', () => {
  const value = '05/25';
  expect(validateCardExpDate(value)).toBeTruthy();
});

test('Card expire date: should be false on incorrect month', () => {
  const value = '13/21';
  expect(validateCardExpDate(value)).toBeFalsy();
});

test('Card expire date: should be false on incorrect year', () => {
  const value = '13/100';
  expect(validateCardExpDate(value)).toBeFalsy();
});
