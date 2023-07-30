export const DateFormats = {
  DDMMYYYY: 'DDMMYYYY',
  MMDDYYYY: 'MMDDYYYY',
  YYYYMMDD: 'YYYYMMDD',
} as const;

export type DateFormat = valueof<typeof DateFormats>;
