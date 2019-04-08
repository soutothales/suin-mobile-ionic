import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {CadastroService} from "../../services/cadastro/cadastro-service";

/**
 * Generated class for the CadastroPorcoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-porco',
  templateUrl: 'cadastro-porco.html',
})
export class CadastroPorcoPage {

  numporco: string;
  origem: string;
  peso: string;
  idade: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public cadastroService: CadastroService,
              private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPorcoPage');
  }

  cadastrarPorco() {
    let toast = this.toastCtrl.create({
      message: 'Porco não adicionado.',
      duration: 2000,
      position: 'top',
      cssClass: 'notCadastradoToast',
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();

    this.cadastroService.cadastrarPorco(this.numporco, this.origem, this.peso, this.idade)
      .subscribe(response => {
          console.log(response);
          this.cadastradoToast();
          return this.navCtrl.setRoot("HomePage");
        },
        error => {
          console.log(error);
          this.notCadastradoToast();
          // this.alertService.error(error);
          // this.loading = false;
        });
  }

  cadastradoToast() {
    let toast = this.toastCtrl.create({
      message: 'Porco adicionado com sucesso.',
      duration: 2000,
      position: 'top',
      cssClass: 'cadastradoToast',
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  notCadastradoToast() {
    let toast = this.toastCtrl.create({
      message: 'Porco não adicionado.',
      duration: 2000,
      position: 'top',
      cssClass: 'notCadastradoToast',
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }



}
