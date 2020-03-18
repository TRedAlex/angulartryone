import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { MainComponent } from './main/main/main.component';
import { NavComponent } from './header/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactsService } from './contacts.service';
import { FirstblockComponent } from './main/firstblock/firstblock.component';
import { ServicesblockComponent } from './main/servicesblock/servicesblock.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NavComponent,
    FirstblockComponent,
    ServicesblockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
