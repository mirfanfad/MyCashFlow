import {FinancialState, FinancialActionTypes} from '../../types';
import {
  ADD_TRANSACTION,
  UPDATE_TRANSACTION,
  DELETE_TRANSACTION,
} from '../actions/financialActions';

const initialState: FinancialState = {
  transactions: [],
};

const financialReducer = (
  state = initialState,
  action: FinancialActionTypes,
): FinancialState => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case UPDATE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.map(transaction =>
          transaction.id === action.payload.id ? action.payload : transaction,
        ),
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          transaction => transaction.id !== action.payload,
        ),
      };
    default:
      return state;
  }
};

export default financialReducer;
