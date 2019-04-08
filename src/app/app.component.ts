import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import {CadastroPorcoPage} from "../pages/cadastro-porco/cadastro-porco";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = 'LoginPage';

  pages: Array<{title: string, component: string}>;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              private alertController: AlertController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Início', component: 'HomePage' },
      // { title: 'List', component: 'ListPage' },
      // { title: 'Login', component: 'LoginPage' },
      { title: 'Porco', component: 'CadastroPorcoPage' },
      { title: 'Ração', component: 'CadastroRacaoPage' }
    
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async logout() {
    const alert = await this.alertController.create({
      title: 'Você deseja realmente sair?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Operação cancelada pelo usuário');
          }
        }, {
          text: 'Sair',
          handler: () => {
            this.nav.setRoot('LoginPage')
          }
        }
      ]
    });

    await alert.present();
  }
  
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    console.log(page);
    this.nav.setRoot(page.component);
  }
}
