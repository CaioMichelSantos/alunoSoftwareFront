import { Component, OnInit } from '@angular/core';
import { ClassService } from 'src/app/services/class.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {
  newAulaControl: boolean
  classRooms: any = [];

  constructor(private classService: ClassService) { }

  ngOnInit() {
    this.loadClass();
  }

  async loadClass() {
    try {
      this.classRooms = (await this.classService.get())['classRooms'];
    } catch (err) {
      console.log(err);
    }
  }

  oldClass() {
    this.newAulaControl = true
  }
  newClass() {
    this.newAulaControl = false
  }

}