import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html',
})
export class BuyoutPage implements OnInit {
  food: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 ngOnInit() {
  this.food = this.navParams.data;
 }

 onGoHome() {
   this.navCtrl.popToRoot();
 }

}
