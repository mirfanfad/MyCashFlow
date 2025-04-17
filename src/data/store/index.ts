import {configureStore} from '@reduxjs/toolkit';
import financialReducer from '../reducers/financialReducer';
import {FinancialState, FinancialActionTypes} from '../../types';

export interface RootState {
  financial: FinancialState;
}

const store = configureStore({
  reducer: {
    financial: financialReducer as (
      state: FinancialState | undefined,
      action: FinancialActionTypes | any,
    ) => FinancialState,
  },
});

export type AppDispatch = typeof store.dispatch;

export default store;
