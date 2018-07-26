import { Component, ViewChild } from '@angular/core';
import { NavController, FabContainer } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('fab')fab : FabContainer;
  time: string = '00:00:00';

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.getTime();
    this.fab.toggleList();
  }

  getTime() {
    setInterval(() => {
      let date = new Date();
      let H: any = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
      let M: any = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
      let S: any = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
      this.time = H + ':' + M + ':' + S;
    }, 1000);
  }

}
