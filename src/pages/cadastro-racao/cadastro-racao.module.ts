import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroRacaoPage } from './cadastro-racao';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
  declarations: [
    CadastroRacaoPage,
  ],
  imports: [
    BrMaskerModule,
    IonicPageModule.forChild(CadastroRacaoPage),
  ],
})
export class CadastroRacaoPageModule {}
