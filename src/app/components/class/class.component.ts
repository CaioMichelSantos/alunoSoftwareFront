import { Component, OnInit } from '@angular/core';
import { ClassService } from 'src/app/services/class.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {
  newAulaControl: boolean
  classRooms: any = [];

  constructor(
    private toastrService: ToastrService,
    private classService: ClassService
  ) { }

  ngOnInit() {
    this.loadClass();
  }

  async loadClass() {
    try {
      this.classRooms = (await this.classService.get())['classRooms'];
    } catch (err) {
    }
  }

  oldClass() {
    this.newAulaControl = true
  }
  newClass() {
    this.newAulaControl = false
  }

  async confirmPresence(classRoom) {
    try {
      await this.classService.confirmPresence(classRoom);
      classRoom.userConfirmed = !classRoom.userConfirmed;
    } catch (errorRequest) {
      if (errorRequest && errorRequest.error && errorRequest.error.error) {
        return this.toastrService.error(errorRequest.error.error);
      }
      this.toastrService.error('Por favor tente mais tarde');
    }
  }
}