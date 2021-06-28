import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { FormComponent } from './form/form.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { LoginComponent } from './login/login.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { StepperComponent } from './stepper/stepper.component';
import { TabeComponent } from './tabe/tabe.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path: "app-login",
    component:LoginComponent
  },
  {
    path: "grid-list",
    component:GridListComponent
  },
 {
  path: "stepper",
  component:StepperComponent
 },
 {
  path: "tabe",
  component:TabeComponent
},
{
  path: "expansion-panel",
  component:ExpansionPanelComponent
},
{
  path: "table",
  component:TableComponent
},
{
  path: "form",
  component:FormComponent
},
{
  path: "header-bar",
  component:HeaderBarComponent
},
{
  path: "side-bar",
  component:SideBarComponent
},
{path:"", redirectTo: "/grid-list", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
