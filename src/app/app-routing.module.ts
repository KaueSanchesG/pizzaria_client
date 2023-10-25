import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './layout/index/index.component';
import { LoginComponent } from './components/sistema/login/login.component';
import { RegisterComponent } from './components/sistema/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'home',
    component: IndexComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'order', component: OrderComponent },
      { path: 'client', component: HomeComponent },
      { path: 'employee', component: HomeComponent },
      { path: 'products', component: HomeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
