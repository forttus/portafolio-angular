import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './shered/header/header.component';
import { FooterComponent } from './shered/footer/footer.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { BlogComponent } from './pages/blog/blog.component';
import { DocumentacionComponent } from './pages/documentacion/documentacion.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';
//nos permitira hacer peticiones put get link a servidores rest'

import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './pages/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent,
    BlogComponent,
    DocumentacionComponent,
    ContactenosComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
