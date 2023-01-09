export interface IPromoCode {
  id: number;
  code: string;
  title: string;
  discount: number;
}

export const promocodes: IPromoCode[] = [
  {
    id: 1,
    code: '10FIRST',
    title: '10% on first order',
    discount: 10,
  },
  {
    id: 2,
    code: 'SALE23',
    title: '23% special discount',
    discount: 23,
  },
  {
    id: 3,
    code: 'REF5',
    title: '5% referral discount',
    discount: 5,
  },
];
