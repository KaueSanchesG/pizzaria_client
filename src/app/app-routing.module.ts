import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './layout/index/index.component';
import { LoginComponent } from './components/sistema/login/login.component';
import { RegisterComponent } from './components/sistema/register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, // Rota padrão para o LoginComponent
  { path: 'register', component: RegisterComponent }, // Rota para o RegisterComponent
  { path: 'home', component: IndexComponent }, // Rota para o IndexComponent (pode adicionar filhos aqui)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
