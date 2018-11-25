import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  newAulaControl: boolean

  constructor() { }

  ngOnInit() { }


  oldClass() {
    this.newAulaControl = true
  }
  newClass() {
    this.newAulaControl = false
  }

}