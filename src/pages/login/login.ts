import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';
import { CredentialsDTO } from "../../models/credentials.dto";
//import { AuthService } from "../../services/auth.service";
import { LoginService } from "../../services/login/login-service";

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

  username: string;
  senha: string;

  creds: CredentialsDTO = {
    username: "",
    senha: ""
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public menuCtrl: MenuController,
              //public authService: AuthService,
              public loginService: LoginService) {
  }

  ionViewWillEnter() {
    this.menuCtrl.swipeEnable(false);
    console.log("SuinApp");

  }

  ionViewDidLeave() {
    this.menuCtrl.swipeEnable(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    //this.authService.authenticate(this.creds)
    this.loginService.login(this.username, this.senha)
                      .subscribe(response => {
                          console.log(response);
                          return this.navCtrl.setRoot("HomePage");
                        },
                        error => {
                          console.log(error)
                          // this.alertService.error(error);
                          // this.loading = false;
                        });
  }

}
