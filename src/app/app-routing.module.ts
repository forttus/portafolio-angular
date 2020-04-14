import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { BlogComponent } from './pages/blog/blog.component';
import { DocumentacionComponent } from './pages/documentacion/documentacion.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';
import { SearchComponent } from './pages/search/search.component';


const routes: Routes = [
  {path: 'home', component: PortafolioComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'document', component: DocumentacionComponent},
  {path: 'contact', component: ContactenosComponent},
  {path: 'about', component: AboutComponent},
  {path: 'item/:id', component: ItemComponent},
  {path: 'search/:termino', component: SearchComponent},
  
  //cualquiuere otr rruta que no se encuetre alas rutas de arriba redireccionara al portafolio component
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
