import { createFeatureSelector, createSelector } from "@ngrx/store";

export const baseSelector = createFeatureSelector<any>('base')
export const isConnected = createSelector(baseSelector, (state) => state.isConnected)
export const wallet = createSelector(baseSelector, (state) => state.wallet)
export const chainId = createSelector(baseSelector, (state) => state.chainId)
