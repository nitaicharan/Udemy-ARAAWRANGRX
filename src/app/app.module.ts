import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './products/products.module';

const actionSanitizer = (action) => Object.assign({ ...action, payload: 'hiding the payload' })
const stateSanitizer = (state, index) => Object.assign({ ...state, list: ['hiding the payload'] })

const devInstrument = { maxAge: 20, name: 'my DEV instance' }
const prodInstrument = { maxAge: 20, name: 'my PROD instance', actionSanitizer, stateSanitizer }

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ProductModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(environment.production ? prodInstrument : devInstrument),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
