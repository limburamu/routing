import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TestDialogComponent } from '../test-dialog/test-dialog.component';
import { UserComponent } from '../user/user.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openPopup(){
    console.log('The popup is oppened');
    const dialogRef = this.dialog.open(TestDialogComponent);

  }

}
