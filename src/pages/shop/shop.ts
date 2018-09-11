import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuyoutPage } from '../buyout/buyout';

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {

  constructor(public navCtrl: NavController) {
  }

  onLoadFood(name:string) {
    this.navCtrl.push(BuyoutPage,name);
  }

  buyOut() {
    this.navCtrl.push(BuyoutPage);
  }


}
