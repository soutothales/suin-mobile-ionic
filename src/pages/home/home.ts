import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import { MyApp } from '../../app/app.component';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public app: MyApp) {

  }

  openCadastroPage(page) {
    this.navCtrl.setRoot('Cadastro' + page + 'Page');
  }

  logout() {
    this.app.logout();
  }

}
