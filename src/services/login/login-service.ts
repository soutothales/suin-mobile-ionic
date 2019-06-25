import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";

//export const API_URL = "https://suin.lsd.ufcg.edu.br/auth/auth";
export const API_URL = "http://150.165.85.67/auth/auth";

@Injectable()
export class LoginService{
  //private token: string;

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
