import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams, ToastController} from 'ionic-angular';
//import { CredentialsDTO } from "../../models/credentials.dto";
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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public menuCtrl: MenuController,
              public toastCtrl: ToastController,
              //public authService: AuthService,
              public loginService: LoginService) {
  }

  ionViewWillEnter() {
    this.menuCtrl.swipeEnable(true);
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
                          console.log(error.message);
                          this.errorLogin(error.message);
                          // this.alertService.error(error);
                          // this.loading = false;
                        });
  }



  errorLogin(message: string) {

    if(message == 'Unkown user') message = 'Usuário inválido';
    if(message == 'Invalid password field.') message = 'Senha inválida';

    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'top',
      cssClass: 'errorLogin',
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();

  }

}
