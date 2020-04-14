import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;

  Productos: producto[] = [];

  Productosfiltrado: producto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
   }

  private cargarProductos() {


//promesa para manjar y hacerlo acincrono
return new Promise((resolve, reject) => {
  this.http.get('https://angular-html-2c5c9.firebaseio.com/productos_idx.json')
      .subscribe( (resp: producto[]) => {
        this.Productos = resp;
        this.cargando = false;
        resolve();
      });
});

  
  }
  getProducto(id: string) {
    return this.http.get(`https://angular-html-2c5c9.firebaseio.com/productos/${ id }.json`);
  }

  buscarProducto(termino: string){
    if (this.Productos.length === 0) {
      //cargar productos
      this.cargarProductos().then( () => {
        //colbac despues de tener los productos
        //aplicar filtro
        this.filtrarProductos(termino);
      });
    }else{
      //aplicar prouctos
      this.filtrarProductos(termino);
    }

    this.Productosfiltrado= this.Productos.filter(producto =>{
      return true;
    });
    
  }

  private filtrarProductos(termino: string){
  console.log(this.Productos);

  this.Productosfiltrado = [];
    termino=termino.toLowerCase();
  this.Productos.forEach(prod => {

    const tituloLower=prod.titulo.toLowerCase();
    if (prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0) {
      this.Productosfiltrado.push(prod);
    }
  })
  }

}
