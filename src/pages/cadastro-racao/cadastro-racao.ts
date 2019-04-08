import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import {CadastroService} from "../../services/cadastro/cadastro-service";

/**
 * Generated class for the CadastroRacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-racao',
  templateUrl: 'cadastro-racao.html',
})
export class CadastroRacaoPage {

  preco: string;
  fornecedor: string;
  quantidade: string;
  tiporacao: string;
  empregado: string;
  datacompra: string = new Date().toISOString();

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public cadastroService: CadastroService,
              private toastCtrl: ToastController,
              private alertController: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroRacaoPage');
  }

  async cadastrarRacao() {

    const alert = await this.alertController.create({
      title: 'Você deseja realmente cadastrar esta ração?',
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
            this.cadastroService.cadastrarRacao(this.preco, this.fornecedor,
                                                this.quantidade, this.tiporacao,
                                                this.empregado, this.datacompra)
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
      message: 'Cadastro de ração feito com sucesso.',
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
      message: 'Cadastro de ração não efetuado',
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
