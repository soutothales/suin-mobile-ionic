import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroPorcoPage } from './cadastro-porco';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
  declarations: [
    CadastroPorcoPage,
  ],
  imports: [
    BrMaskerModule,
    IonicPageModule.forChild(CadastroPorcoPage),
  ],
})
export class CadastroPorcoPageModule {}
