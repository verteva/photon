export const changeNumberValue = {
  increase: 'increase',
  decrease: 'decrease',
} as const;

export type changeNumberType = valueof<typeof changeNumberValue>;
