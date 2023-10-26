import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as baseActions from '../actions/base.actions'
import { BaseService } from "../../services/base/base.service";
import { Store } from "@ngrx/store";
import { switchMap, map, EMPTY, take } from "rxjs";
import { isConnected } from "../selectors/base.selectors";


@Injectable()
export class BaseEffects {
  constructor(private readonly actions$: Actions,
              private readonly baseService: BaseService,
              private store: Store) {
  }

  connect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(baseActions.connect),
      switchMap(() => this.store.select(isConnected).pipe(take(1))),
      switchMap((isConnected) => {
        console.log('connect(): Check isConnected:', isConnected)
        if (!isConnected) {
          console.log('connect(): Connect')
          return this.baseService.connect()
        }
        return EMPTY
      }),
      switchMap(() => {
        console.log('connect(): Get user data')
        return Promise.all([
          this.baseService.getWallet(),
          this.baseService.getChainId()
        ])
      }),
      map(([wallet, chainId]) => {
        return baseActions.connectSuccess({wallet: wallet, chainId: chainId})
      })
    )
  );

  disconnect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(baseActions.disconnect),
      switchMap(() => this.store.select(isConnected).pipe(take(1))),
      switchMap((isConnected) => {
        console.log('disconnect(): Check isConnected:', isConnected)
        if (isConnected) {
          console.log('disconnect(): Disconnect service')
          return this.baseService.disconnect()
        }
        return EMPTY
      }),
      map(() => {
        return baseActions.disconnectSuccess()
      })
    )
  );


}
