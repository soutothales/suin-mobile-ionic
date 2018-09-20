import { Injectable } from "@angular/core";
import { HTTP } from '@ionic-native/http';

export const API_URL = "http://localhost:8001"

@Injectable()
export class LoginService{
  private token: string;

  constructor(private http: HTTP){

  }

  hasValidToken() {
    return false;
  }

  login(username: string, password: string){
    return this.http.post(API_URL, {
      username: username,
      password: password
    }, {})
  }
}
