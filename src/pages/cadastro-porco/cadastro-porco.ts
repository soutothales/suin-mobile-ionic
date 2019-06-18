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

  numporco = '';
  dataEntrada = '';
  peso = '';
  idade = '';
  isCio = '';
  tipoPorco = '';
  partos = [];
  dataParto = '';

  viewCio = '';
  mapCio = {
            "Não": "0",
            "Sim": "1"
          };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public cadastroService: CadastroService,
              private toastCtrl: ToastController,
              private alertController: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPorcoPage');
  }

  changeDateFormat(data: string) {
    let splitted = data.split("-");
    let dateChanged = splitted[2] + "/" + splitted[1] + "/" + splitted[0]
    return dateChanged;    
  }

  async addParto(dataParto: string) {
    let changedDataParto = await this.changeDateFormat(dataParto);
    await this.partos.push(changedDataParto);
    console.log(this.partos);
    return this.dataParto = '';
  }

  doTipoRadio(tipo: string) {
    this.tipoPorco = tipo;
  }

  doCioRadio(data: string) {
    this.isCio = this.mapCio[data];
    console.log(this.isCio);
  }

  async cadastrarPorco() {
    this.dataEntrada = this.changeDateFormat(this.dataEntrada);

    if (this.numporco.length == 0 ||
      this.dataEntrada.length == 0 ||
      this.peso.length == 0 ||
      this.idade.length == 0 ||
      this.tipoPorco.length == 0) {
        
        this.notCadastradoToast(false);

    } else {
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
              this.cadastroService.cadastrarPorco(this.numporco, this.dataEntrada, 
                                                  this.peso, this.idade,
                                                  this.tipoPorco, this.isCio, this.partos)
              .subscribe(response => {
                  console.log(response);
                  this.cadastradoToast();
                  return this.navCtrl.setRoot("HomePage");
                },
                error => {
                  console.log(error);
                  this.notCadastradoToast(true);
                });
            }
          }
        ]
      });
  
      await alert.present();

    }

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

  notCadastradoToast(allFilled: boolean) {
    let toast;
    if (allFilled == true) {
      toast = this.toastCtrl.create({
        message: 'Porco não adicionado.',
        duration: 2000,
        position: 'top',
        cssClass: 'notCadastradoToast',
      });
    } else {
      toast = this.toastCtrl.create({
        message: 'Por Favor preencha todos os campos!',
        duration: 2000,
        position: 'top',
        cssClass: 'notCadastradoToast',
      });

    }

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }



}
