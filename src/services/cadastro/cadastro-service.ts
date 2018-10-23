import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";

export const API_URL = "http://150.165.85.6:9000/porco/";

@Injectable()
export class CadastroService {
  //private token: string;

  constructor(private http: HttpClient){
  }

  hasValidToken() {
    return true;
  }

  cadastrar(numporco: string, origem: string, peso: string, idade: string){
    return this.http.post(API_URL, {
      idade: idade,
      local_origem: origem,
      numero: numporco,
      peso: peso

    }, {responseType: "text"})
  }
}
