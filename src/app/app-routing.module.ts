import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerRequestPageComponent } from './container-request-page/container-request-page.component';
import { FunctionOverviewPageComponent } from './function-overview-page/function-overview-page.component';
import { ShippmentRequestComponent } from './shippment-request/shippment-request.component';

const routes: Routes = [
  {path:'', redirectTo: '/function-overview-age', pathMatch: 'full'},
  {path:'container-request-page', component: ContainerRequestPageComponent},
  {path:'function-overview-age', component: FunctionOverviewPageComponent},
  {path:'shippment-request-page', component: ShippmentRequestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
