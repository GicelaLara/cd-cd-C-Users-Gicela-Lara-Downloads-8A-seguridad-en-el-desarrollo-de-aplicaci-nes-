import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  login() {

    if (!this.email || !this.password) {
      alert("Todos los campos son obligatorios");
      return;
    }

    this.http.post<any>('http://localhost/inventario_api/login.php', {
      email: this.email,
      password: this.password
    }).subscribe(res => {

      if(res.success){

        localStorage.setItem("login","true");

        this.router.navigate(['/inventario']);

      } else {

        alert("Credenciales incorrectas");

      }

    });

  }

}