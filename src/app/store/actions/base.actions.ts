import { createAction, props } from '@ngrx/store';

export const connect = createAction('[BASE] connect');
export const connectSuccess = createAction('[BASE] connectSuccess',  props<{ wallet: string, chainId: number }>())
export const setIsConnected = createAction('[BASE] setIsConnected', props<{ isConnected: boolean }>())
export const setUserWallet = createAction('[BASE] setUserWallet', props<{ wallet: string }>())
export const setChainId = createAction('[BASE] setChainId', props<{ chainId: number }>())
export const disconnect = createAction('[BASE] disconnect');
export const disconnectSuccess = createAction('[BASE] disconnectSuccess')

