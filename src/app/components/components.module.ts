import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RulesDialogComponent } from "./rules-dialog/rules-dialog.component";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [HomeComponent, RulesDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  providers: [],
  exports: [
    HomeComponent,
    RulesDialogComponent,
    MatDialogModule
  ],
  bootstrap: [HomeComponent, RulesDialogComponent]
})
export class ComponentsModule { }
