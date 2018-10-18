import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodRegisterComponent } from './food-register.component';

describe('FoodRegisterComponent', () => {
  let component: FoodRegisterComponent;
  let fixture: ComponentFixture<FoodRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
