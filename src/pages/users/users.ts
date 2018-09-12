import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserPage } from './user/user';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  constructor(private navCtrl: NavController) {

  }
  onLoadUser(name: string) {
    this.navCtrl.push(UserPage, name);
  }
  
  ionViewCanEnter(): boolean | Promise<boolean> {
    console.log("ionviewcanenter");
    const rnd = Math.random();
    return rnd > 0.1 
  }

  ionViewDidLoad() {
    console.log('ionviewdidload')
  }

  ionViewWillEnter() {

  }

  ionViewCanLeave(): boolean | Promise<void> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => 
      { 
        resolve(); 
      }, 1000)
    })
    return true;
  }

  // more options to pass to navCtrl:
//   this.navCtrl.push(NewPage, {}, {
//     direction: 'back',
//     duration: 2000,
//     easing: 'ease-out'
// });
}
