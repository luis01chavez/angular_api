import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './plantillas/footer/footer.component';
import { HeaderComponent } from './plantillas/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
