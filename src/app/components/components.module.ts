import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RulesDialogComponent } from "./rules-dialog/rules-dialog.component";

@NgModule({
  declarations: [HomeComponent, RulesDialogComponent],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    HomeComponent,
    RulesDialogComponent
  ],
  bootstrap: [HomeComponent, RulesDialogComponent]
})
export class ComponentsModule { }
