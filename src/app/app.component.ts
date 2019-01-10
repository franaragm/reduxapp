import { Component } from '@angular/core';
import {Action, Store} from '@ngrx/store';
import {DecrementarAction, IncrementarAction} from './contador/contador.actions';
import {AppState} from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador: number;

  constructor(private store: Store<AppState>) {
    // this.store.subscribe( state => {
    //   this.contador = state.contador;
    // });

    // escuchar una propiedad especifica del estado de la app
    this.store.select('contador').subscribe( contador => {
      this.contador = contador;
    });
  }

  incrementar() {
    const accion = new IncrementarAction();
    this.store.dispatch( accion );
  }

  decrementar() {
    const accion = new DecrementarAction();
    this.store.dispatch( accion );
  }

}
