import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { InventarioComponent } from './inventario/inventario.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'inventario',
    component: InventarioComponent,
    canActivate: [authGuard]
  }
];