import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-open-notification',
  templateUrl: './open-notification.component.html'
})
export class OpenNotificationComponent implements OnInit {
  id = 'qDuKsiwS5xw';

  @Input() notification: any = {};

  private player;
  private ytEvent;


  constructor() {
    
  }
  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }
  ngOnInit() {

  }

}