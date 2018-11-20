import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html'
})
export class NotificationComponent implements OnInit {

  filterNotification: any = '';
  renderizeNotification = false;
  notifications: any = [];
  selectedNotification: any = {};

  constructor(
    private notificationService: NotificationService
  ) {
  }


  ngOnInit() {
    this.loadNotifications();
  }

  async loadNotifications() {
    try {
      this.notifications = (await this.notificationService.get())['contents'];
    } catch (err) {

    }
  }

  openNotification(notification) {
    this.selectedNotification = notification;
    this.renderizeNotification = true
  }
  backNotification() {
    this.renderizeNotification = false
  }

}