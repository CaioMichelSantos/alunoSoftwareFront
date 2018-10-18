import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-register',
  templateUrl: './food-register.component.html',
  styleUrls: ['./food-register.component.scss']
})
export class FoodRegisterComponent implements OnInit {

  today: any = new Date();
  foods: any = [{}];
  constructor() { }

  ngOnInit() {
  }

  addFood() {
    this.foods.push({});
  }

}
