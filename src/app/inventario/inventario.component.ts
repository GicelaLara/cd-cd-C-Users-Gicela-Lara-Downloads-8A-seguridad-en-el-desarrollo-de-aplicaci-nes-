import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.css'
})
export class InventarioComponent implements OnInit {

  productos:any[] = [];

  constructor(private router: Router, private http: HttpClient){}

  cerrarSesion(){
    localStorage.removeItem("login");
    this.router.navigate(['']);
  }

  ngOnInit(){

    if(localStorage.getItem("login") !== "true"){
      this.router.navigate(['']);
    }

    this.cargarProductos();

  }

  cargarProductos(){

    this.http.get<any>('http://localhost/inventario_api/obtener_productos.php')
    .subscribe(res => {

      console.log(res);

      this.productos = res.map((p:any) => ({
        ...p,
        cantidad: Number(p.cantidad)
      }));

    });

  }

  cambiarCantidad(producto:any, cambio:number){

    let nuevaCantidad = producto.cantidad + cambio;

    if(nuevaCantidad < 0){
      nuevaCantidad = 0;
    }

    this.http.post<any>('http://localhost/inventario_api/actualizar_cantidad.php',{
      id: producto.id,
      cantidad: nuevaCantidad
    }).subscribe(res => {

      if(res.success){
        producto.cantidad = nuevaCantidad;
      }

    });

  }

}