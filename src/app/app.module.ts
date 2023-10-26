import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { baseReducer } from './store/reducers/base.reducer';
import { BaseEffects } from "./store/effects/base.effects";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ base: baseReducer }),
    EffectsModule.forRoot([BaseEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
