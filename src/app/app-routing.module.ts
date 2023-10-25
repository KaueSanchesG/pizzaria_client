import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './layout/index/index.component';
import { LoginComponent } from './components/sistema/login/login.component';
import { RegisterComponent } from './components/sistema/register/register.component';
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'order',
    component: IndexComponent,
    children: [
      { path: '', component: OrderComponent },
      { path: '', component: OrderComponent },
      { path: 'client', component: OrderComponent },
      { path: 'employee', component: OrderComponent },
      { path: 'products', component: OrderComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
