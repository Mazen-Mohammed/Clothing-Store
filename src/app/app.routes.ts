import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Home } from './components/home/home';
import { Products } from './components/products/products';

export const routes: Routes = [
  {
    path: '',
    title: 'Sign In | Clothing Store',
    component: Login,
  },
  {
    path: 'home',
    title: 'Placeholder | Clothing Store',
    component: Home,
  },
  {
    path: 'products',
    title: 'Products | Clothing Store',
    component: Products,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
