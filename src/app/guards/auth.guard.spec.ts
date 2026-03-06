import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = () => {

  const login = localStorage.getItem("login");

  if (login === "true") {
    return true;
  }

  alert("Debes iniciar sesión primero");
  return false;

};