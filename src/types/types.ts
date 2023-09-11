export interface IUser {
  id: number;
  email: string;
  token: string;
}

export interface IUserData {
  email: string;
  password: string;
}

export interface IResponseUser {
  email: string | undefined;
  password: string | undefined;
  createdAt: string | undefined;
  updatedAt: string | undefined;
  id: number;
}

export interface IResponseUserData {
  token: string;
  user: IResponseUser;
}

export interface ICategory {
  title: string;
  id: number;
  createdAt: string | undefined;
  updatedAt: string | undefined;
  transactions?: [];
}

interface TotalIncome {
  transactions: ITransaction;
  total: number;
}
export interface IResponseTransactionLoader {
  categories: ICategory[];
  transactions: ITransaction[];
  totalIncome: TotalIncome;
  totalExpense: TotalIncome;
}

export interface ITransaction {
  amount: number;
  createdAt: string | undefined;
  updatedAt: string | undefined;
  title: string;
  type: string;
  id: number;
  category: ICategory;
}
