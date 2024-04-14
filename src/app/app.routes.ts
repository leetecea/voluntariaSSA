import { Routes } from '@angular/router';
import { VagasComponent } from './pages/vagas/vagas.component';
import { HomeComponent } from './pages/home/home.component';
import { EmpresasOngsComponent } from './pages/empresas-ongs/empresas-ongs.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'vagas',
    component: VagasComponent,
    title: 'Vagas'
  },
  {
    path: 'empresas-e-ongs',
    component: EmpresasOngsComponent,
    title: 'Empresas/ONGs'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login'
  }
];
