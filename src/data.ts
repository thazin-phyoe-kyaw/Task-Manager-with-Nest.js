export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}
export const data: Data = {
  report: [
    {
      id: 'uuid1',
      source: 'Salary',
      amount: 3000,
      created_at: 12,
      updated_at: 12,
      type: ReportType.INCOME,
    },
    {
      id: 'uuid2',
      source: 'Teaching',
      amount: 2000,
      created_at: 12,
      updated_at: 12,
      type: ReportType.INCOME,
    },
    {
      id: 'uuid3',
      source: 'Food',
      amount: 1000,
      created_at: 12,
      updated_at: 12,
      type: ReportType.EXPENSE,
    },
  ],
};

interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: number;
    updated_at: number;
    type: ReportType;
  }[];
}
