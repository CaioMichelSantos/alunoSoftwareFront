import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { DatepickerOptions } from 'ng2-datepicker';
import * as ptLocale from 'date-fns/locale/pt';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-food-register',
  templateUrl: './food-register.component.html',
  styleUrls: ['./food-register.component.scss']
})
export class FoodRegisterComponent implements OnInit {

  today: any = new Date();
  foods: any = [{}];
  dailyFoodsUser: any = { date: new Date(), foods: [{ unit: '', calories: 0 }] };

  options: DatepickerOptions = {
    maxDate: new Date(Date.now()),
    displayFormat: 'DD/MM/YYYY',
    dayNamesFormat: 'dd',
    locale: ptLocale,
    firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
    // addClass: 'form-control input-date', // Optional, value to pass on to [ngClass] on the input field
  };

  constructor(private foodService: FoodService, private toastrService: ToastrService) { }

  ngOnInit() {
    // this.formatDate();
    this.loadDailyFoods();
    this.loadFoods();
  }

  initDailyFood() {
    this.dailyFoodsUser = { foods: [{ unit: '', calories: 0 }] };
  }

  formatDate() {
    const day = this.today.getDate();
    const month = Number(this.today.getMonth());
    const year = this.today.getFullYear();
    this.dailyFoodsUser.date = `${year}${month}${day}`
  }

  calories() {
    return this.dailyFoodsUser.foods.reduce((acc, item) => acc + item.calories, 0);
  }

  async loadDailyFoods() {
    try {
      const result: any = await this.foodService.loadDailyFood(this.dailyFoodsUser.date);
      if (result && result.dailyFood) {
        this.dailyFoodsUser = result.dailyFood;
        return;
      }
      this.initDailyFood();
    } catch (err) {

    }
  }

  async loadFoods() {
    try {
      this.foods = await this.foodService.load();
    } catch (err) {
      console.log(err);
    }
  }

  async save() {
    try {
      if (this.dailyFoodsUser._id) {
        await this.foodService.update(this.dailyFoodsUser);
      } else {
        this.dailyFoodsUser = (await this.foodService.create(this.dailyFoodsUser))['dailyFood'];
      }
      this.toastrService.success('Suas alimentações foram salvas com sucesso');
    } catch (err) {
      this.toastrService.error('Não foi possível salvar sua alimentação');
    }
  }

  addFood() {
    this.dailyFoodsUser.foods.push({ unit: '', calories: 0 });
  }

  changeFood(food, i) {
    this.dailyFoodsUser.foods[i] = {
      food: food.id,
      unit: food.base_unit,
      calories: 0
    }
  }

  async updateDate(event) {
    this.dailyFoodsUser.date = event;
    await this.loadDailyFoods();
    if (!this.dailyFoodsUser.date) {
      this.dailyFoodsUser.date = event;
    }
  }

  remove(i) {
    this.dailyFoodsUser.foods.splice(i, 1);
  }


}
