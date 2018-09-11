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

  // more options to pass to navCtrl:
//   this.navCtrl.push(NewPage, {}, {
//     direction: 'back',
//     duration: 2000,
//     easing: 'ease-out'
// });
}
