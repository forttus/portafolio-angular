import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
//con este ervicio nos conectamos a servidores

info:any ={};
cargada:boolean=false;
equipo:any[]=[]

  constructor( private http: HttpClient ) {

   //console.log('Sevicio de INFO MAGINA');
  //leer l archivo json
   
  this.cargarInfo();
  this.cargarEquipo();
  }
private cargarInfo(){
  this.http.get('assets/data/data-pagina.json')
    .subscribe( resp => {
      this.info=resp;
    });
  
}
private cargarEquipo(){
  this.http.get('https://angular-html-2c5c9.firebaseio.com/equipo.json')
    .subscribe( (resp:any[]) => {
      this.equipo=resp;
      console.log(resp);
    });
}

}
