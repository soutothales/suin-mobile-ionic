import { Injectable } from "@angular/core";
import { HTTP } from '@ionic-native/http';
import {HttpClient} from "@angular/common/http";

export const API_URL = "https://suin.gabrielvinha.me/auth/auth"

@Injectable()
export class LoginService{
  private token: string;

  constructor(private http: HttpClient){
  }

  hasValidToken() {
    return true;
  }

  login(username: string, password: string){
    return this.http.post(API_URL, {
      username: username,
      password: password
    }, {responseType: "text"})
  }
}
