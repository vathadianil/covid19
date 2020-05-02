import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {EmployeeGetdataComponent} from './employee-getdata/employee-getdata.component';
import {ImageComponentComponent} from './image-component/image-component.component'


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home',component: HomeComponent},
  {path:'employeegetdata', component:EmployeeGetdataComponent},
  {path:'imagedata', component:ImageComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
