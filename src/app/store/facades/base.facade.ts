import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { chainId, isConnected, wallet } from '../selectors/base.selectors';
import { disconnect, connect } from '../actions/base.actions';


@Injectable({
  providedIn: 'root'
})
export class BaseFacade {

  isConnected$ = this.store.pipe(select(isConnected));
  wallet$ = this.store.pipe(select(wallet));
  chainId$ = this.store.pipe(select(chainId));

  constructor(private store: Store) {}


  connect() {
    console.log('connect(): Call connect');
    this.store.dispatch(connect())
  }

  disconnect() {
    console.log('disconnect(): Call disconnect');
    this.store.dispatch(disconnect())
  }

}
