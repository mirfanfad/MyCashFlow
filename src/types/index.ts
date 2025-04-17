export interface Transaction {
  id: number;
  description: string;
  amount: number;
  type: 'income' | 'expense';
  date: string;
}

export interface FinancialState {
  transactions: Transaction[];
}

export interface AddTransactionAction {
  type: 'ADD_TRANSACTION';
  payload: Transaction;
}

export interface UpdateTransactionAction {
  type: 'UPDATE_TRANSACTION';
  payload: Transaction;
}

export interface DeleteTransactionAction {
  type: 'DELETE_TRANSACTION';
  payload: number;
}

export type FinancialActionTypes =
  | AddTransactionAction
  | UpdateTransactionAction
  | DeleteTransactionAction;
