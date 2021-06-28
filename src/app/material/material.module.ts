import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatStepperModule } from "@angular/material/stepper";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTabsModule } from "@angular/material/tabs";
import { MatTableModule } from "@angular/material/table";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatDialogModule } from '@angular/material/dialog';


const material = [MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
  MatTableModule,
  MatExpansionModule,
  MatDialogModule
]
@NgModule({
  declarations: [],
  imports: [...material],
  exports: [...material]
})
export class MaterialModule { }
