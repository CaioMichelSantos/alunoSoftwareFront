import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {
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