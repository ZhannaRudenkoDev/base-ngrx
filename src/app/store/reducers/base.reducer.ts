import { createReducer, on } from '@ngrx/store';
import {
  disconnect,
  setChainId,
  setIsConnected,
  setUserWallet,
  connect,
  connectSuccess,
  disconnectSuccess
} from '../actions/base.actions';
import { IBaseInterface } from "../interfaces/base.interface";

export const initialState: IBaseInterface = {
  isConnected: false,
  wallet: null,
  chainId: null,
  isLoading: false
}

export const baseReducer = createReducer(
  initialState,
  on(connect, (state, action) => ({
    ...state,
    isLoading: true
  })),
  on(connectSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    isConnected: true,
    wallet: action.wallet,
    chainId: action.chainId,
  })),
  on(setIsConnected, (state, action) => ({
    ...state,
    isConnected: action.isConnected
  })),
  on(setUserWallet, (state, action) => ({
    ...state,
    wallet: action.wallet
  })),
  on(setChainId, (state, action) => ({
    ...state,
    chainId: action.chainId
  })),
  on(disconnect, (state, action) => ({
    ...state,
    isLoading: true
  })),
  on(disconnectSuccess, (state, action) => ({
    ...state,
    isConnected: false,
    wallet: null,
    chainId: null,
    isLoading: true
  }))
);
