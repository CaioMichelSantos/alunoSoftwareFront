import { Component, OnInit } from '@angular/core';
import { ClassService } from 'src/app/services/class.service';
import { ToastrService } from 'ngx-toastr';
import { DatepickerOptions } from 'ng2-datepicker';
import * as ptLocale from 'date-fns/locale/pt';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {
  newAulaControl: boolean
  classRooms: any = [];
  onlySchedule: Boolean = false;
  filterDate: any = new Date();

  options: DatepickerOptions = {
    displayFormat: 'DD/MM/YYYY',
    dayNamesFormat: 'dd',
    locale: ptLocale,
    firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
    // addClass: 'form-control input-date', // Optional, value to pass on to [ngClass] on the input field
  };;

  constructor(
    private toastrService: ToastrService,
    private classService: ClassService
  ) { }

  ngOnInit() {
    this.loadClass();
  }

  async loadClass() {
    try {
      this.classRooms = (await this.classService.get(this.onlySchedule, this.filterDate))['classRooms'];
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

  async updateDate(event) {
    this.filterDate = event;
    this.loadClass();
  }
}