import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
              public cadastroService: CadastroService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPorcoPage');
  }

  cadastrar() {
    this.cadastroService.cadastrar(this.numporco, this.origem, this.peso, this.idade)
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
