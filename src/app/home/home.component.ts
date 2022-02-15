import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { TestDialogComponent } from '../test-dialog/test-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openPopup() {
    console.log('The popup is opened');
    const dialogRef = this.dialog.open(TestDialogComponent);

  }

}
