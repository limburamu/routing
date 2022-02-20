import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-test-dialog',
  templateUrl: './test-dialog.component.html',
  styleUrls: ['./test-dialog.component.css']
})
export class TestDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TestDialogComponent>,) { }

  ngOnInit(): void {
  }

  closeModal(){
    this.dialogRef.close();
  }

}
