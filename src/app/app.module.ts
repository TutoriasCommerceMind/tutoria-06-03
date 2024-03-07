import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TablaGeneralComponent } from './tabla-general/tabla-general.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComidaDetailComponent } from './comida-detail/comida-detail.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, TablaGeneralComponent, PageNotFoundComponent, ComidaDetailComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
