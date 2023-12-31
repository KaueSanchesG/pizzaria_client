import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './layout/index/index.component';
import { LoginComponent } from './components/sistema/login/login.component';
import { RegisterComponent } from './components/sistema/register/register.component';
import { OrderComponent } from './components/order/order.component';
import { ProductsComponent } from './components/products/products.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ClientComponent } from './components/client/client.component';
import { RotaguardGuard } from './guards/rotaguard.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'register',
    canActivate: [RotaguardGuard],

    component: RegisterComponent,
  },
  {
    path: 'order',
    component: IndexComponent,

    children: [
      { path: '', component: OrderComponent },
      { path: 'client', component: ClientComponent },
      {
        path: 'employee',
        canActivate: [RotaguardGuard],

        component: EmployeeComponent,
      },
      { path: 'products', component: ProductsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
