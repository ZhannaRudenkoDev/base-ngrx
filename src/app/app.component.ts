import { Component } from '@angular/core';
import { BaseFacade } from "./store/facades/base.facade";
import { Observable } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  wallet$: Observable<string>;
  chainId$: Observable<number>;
  isConnected$: Observable<boolean>;

  constructor(
    private baseFacade: BaseFacade,
  ) {
    this.wallet$ = baseFacade.wallet$;
    this.chainId$ = baseFacade.chainId$;
    this.isConnected$ = baseFacade.isConnected$;
  }


  connect() {
    this.baseFacade.connect();
  }

  disconnect() {
    this.baseFacade.disconnect();
  }
}
