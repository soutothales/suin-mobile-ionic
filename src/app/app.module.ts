import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, AlertController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import {HttpClientModule} from "@angular/common/http";
import { BrMaskerModule } from 'brmasker-ionic-3';


import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
// import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ErrorInterceptorProvider } from '../interceptors/error-interceptor';
//import { AuthService } from "../services/auth.service";
import {LoginService} from "../services/login/login-service";
import {CadastroService} from "../services/cadastro/cadastro-service";

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrMaskerModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    BrMaskerModule,
    StatusBar,
    SplashScreen,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ErrorInterceptorProvider,
    //AuthService,
    LoginService,
    CadastroService
  ]
})
export class AppModule {}
