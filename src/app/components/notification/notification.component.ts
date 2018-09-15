import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html'
})
export class NotificationComponent implements OnInit {

  renderizeNotification = false;

  constructor(
    
  ) {
  }
  

  ngOnInit() {

  }
  openNotification(id){
    this.renderizeNotification = true 
  }
  backNotification(){
    this.renderizeNotification = false
  }

}