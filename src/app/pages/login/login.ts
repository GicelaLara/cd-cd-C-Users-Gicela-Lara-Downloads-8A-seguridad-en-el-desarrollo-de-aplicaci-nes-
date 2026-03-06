import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  login() {

    // validar campos vacíos
    if (!this.email || !this.password) {
      alert("Todos los campos son obligatorios");
      return;
    }

    // login temporal (luego será con la base de datos)
    if (this.email === "admin@toolcenter.com" && this.password === "123456") {

      // guardar sesión
      localStorage.setItem("login", "true");
      localStorage.setItem("user", this.email);

      // ir al inventario
      this.router.navigate(['/inventario']);

    } else {
      alert("Credenciales incorrectas");
    }

  }

}