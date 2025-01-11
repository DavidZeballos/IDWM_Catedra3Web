import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ListComponent } from './posts/list/list.component';
import { CreateComponent } from './posts/create/create.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'posts', component: ListComponent, canActivate: [AuthGuard] },
  { path: 'posts/create', component: CreateComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' },
];
