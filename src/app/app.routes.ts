import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'login',loadComponent:()=> import('./features/auth/components/login/login').then(c=>c.Login)},
  {path:'register',loadComponent:()=> import('./features/auth/components/register/register').then(c=>c.Register)},
  {path:'forgot-password',loadComponent:()=> import('./features/auth/components/forgot-password/forgot-password').then(c=>c.ForgotPassword)},
  {path:'reset-password',loadComponent:()=> import('./features/auth/components/reset-password/reset-password').then(c=>c.ResetPassword)},
  {path:'**',loadComponent:()=> import('./shared/components/page-not-found/page-not-found').then(c=>c.PageNotFound)},
];
