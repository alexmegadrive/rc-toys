export interface IValidateFuncsObj {
  [key: string]: (value: string) => boolean;
}

export function validateName(value: string) {
  const regex = /^([A-Za-zА-Яа-яЁё]{3,})(\s[A-Za-zА-Яа-яЁё]{3,}){1,}$/;
  return regex.test(value);
}

export function validateAddress(value: string) {
  const regex = /^([A-Za-zА-Яа-яЁё]{5,})(\s[A-Za-zА-Яа-яЁё]{5,}){2,}$/;
  return regex.test(value);
}

export function validatePhone(value: string) {
  const regex = /\+[0-9]{9,15}$/;
  return regex.test(value);
}

export function validateEmail(value: string) {
  const regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  return regex.test(value);
}

export function validateCardNumber(value: string) {
  const regex = /[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/;
  return regex.test(value);
}

export function validateCardCVV(value: string) {
  const regex = /[0-9]{3}$/;
  return regex.test(value);
}
export function validateCardExpDate(value: string) {
  const regex = /(1[0-2]|0[1-9])\/([2][2-9]|[3-9][0-9])/;
  return regex.test(value);
}

export const validateFuncs: IValidateFuncsObj = {
  name: validateName,
  address: validateAddress,
  email: validateEmail,
  phone: validatePhone,
  cardNumber: validateCardNumber,
  cardCvv: validateCardCVV,
  cardDate: validateCardExpDate,
};
