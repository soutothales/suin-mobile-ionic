import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController, AlertController} from 'ionic-angular';
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
              private toastCtrl: ToastController,
              private alertController: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPorcoPage');
  }

  async cadastrarPorco() {

    const alert = await this.alertController.create({
      title: 'Você deseja realmente cadastrar este porco?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Operação cancelada pelo usuário');
          }
        }, {
          text: 'Enviar',
          handler: () => {
            this.cadastroService.cadastrarPorco(this.numporco, this.origem, this.peso, this.idade)
            .subscribe(response => {
                console.log(response);
                this.cadastradoToast();
                return this.navCtrl.setRoot("HomePage");
              },
              error => {
                console.log(error);
                this.notCadastradoToast();
              });
          }
        }
      ]
    });

    await alert.present();

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
