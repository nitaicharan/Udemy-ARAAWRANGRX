import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './app-state';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EffectHttp';
  counter$;
  /**
   *
   */
  constructor(private store: Store<AppState>) {
    this.counter$ = store.pipe(
      select(state => state.counter)
    );

  }

  increment() {
    this.store.dispatch({ type: 'INCREMENT' });
  }
}
