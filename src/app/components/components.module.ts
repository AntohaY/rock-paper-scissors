import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RulesDialogComponent } from "./rules-dialog/rules-dialog.component";
import {MatDialogModule} from "@angular/material/dialog";
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [HomeComponent, RulesDialogComponent, GameComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  providers: [],
  exports: [
    HomeComponent,
    RulesDialogComponent,
    MatDialogModule,
    GameComponent
  ],
  bootstrap: [HomeComponent, RulesDialogComponent]
})
export class ComponentsModule { }
