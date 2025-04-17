import {
  Transaction,
  AddTransactionAction,
  UpdateTransactionAction,
  DeleteTransactionAction,
} from '../../types';

export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const UPDATE_TRANSACTION = 'UPDATE_TRANSACTION';
export const DELETE_TRANSACTION = 'DELETE_TRANSACTION';

export const addTransaction = (
  transaction: Transaction,
): AddTransactionAction => {
  return {
    type: ADD_TRANSACTION,
    payload: transaction,
  };
};

export const updateTransaction = (
  transaction: Transaction,
): UpdateTransactionAction => {
  return {
    type: UPDATE_TRANSACTION,
    payload: transaction,
  };
};

export const deleteTransaction = (id: number): DeleteTransactionAction => {
  return {
    type: DELETE_TRANSACTION,
    payload: id,
  };
};
