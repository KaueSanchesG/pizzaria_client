import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgIconsModule } from '@ng-icons/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { IndexComponent } from './layout/index/index.component';
import { LoginComponent } from './components/sistema/login/login.component';
import { RegisterComponent } from './components/sistema/register/register.component';
import { heroEye, heroEyeSlash } from '@ng-icons/heroicons/outline';
import { FormsModule } from '@angular/forms';
import { OrderComponent } from './components/order/order.component';
import { NewOrderComponent } from './components/order/new-order/new-order.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ProductsComponent } from './components/products/products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientComponent } from './components/client/client.component';
import { NewClientComponent } from './components/client/new-client/new-client.component';
import { HttpRequestService } from './interceptors/httpinterceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    OrderComponent,
    NewOrderComponent,
    EmployeeComponent,
    ProductsComponent,
    ClientComponent,
    NewClientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ heroEye, heroEyeSlash }),
    FormsModule,
    NgbModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
