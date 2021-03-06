import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RulesDialogComponent } from "../rules-dialog/rules-dialog.component";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  score: number = 0;
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openRulesDialog() {
    this.dialog.open(RulesDialogComponent);
  }

  changeScore(data: any) {
    if (data?.victory) this.score ++;
    else if (!data?.victory && this.score !== 0) this.score --;
  }
}
