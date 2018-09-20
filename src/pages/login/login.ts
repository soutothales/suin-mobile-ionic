import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginService } from '../../services/login/login-service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('email') user: any;
  private username: string;
  private password: string;
  private error: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public loginService: LoginService) {
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.user.setFocus();
    }, 500);
  }

  login(): void {
    this.loginService.login(
      this.username,
      this.password
    ).then((response) => {
      if(response.status == 401){
        throw new Error("Failed authentication for username and password.");
      }
    }).catch((error) => {
      console.error(error);
      this.error = error.message;
    });
  }
}
