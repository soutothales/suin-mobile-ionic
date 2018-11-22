import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroRacaoPage } from './cadastro-racao';

@NgModule({
  declarations: [
    CadastroRacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroRacaoPage),
  ],
})
export class CadastroRacaoPageModule {}
