import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";

export const API_URL = "http://150.165.15.87/auth/auth";

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
