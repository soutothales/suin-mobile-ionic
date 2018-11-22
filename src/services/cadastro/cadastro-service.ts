import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";

export const API_URL_PORCO = "http://150.165.85.6:9000/porco/";
export const API_URL_RACAO = "http://150.165.85.6/api/ration/";

@Injectable()
export class CadastroService {
  //private token: string;

  constructor(private http: HttpClient){
  }

  hasValidToken() {
    return true;
  }

  cadastrarPorco(numporco: string, origem: string, peso: string, idade: string){
    return this.http.post(API_URL_PORCO, {
      idade: idade,
      local_origem: origem,
      numero: numporco,
      peso: peso

    }, {responseType: "text"})
  }

  cadastrarRacao(preco: string, fornecedor: string,
                 quantidade: string, tiporacao: string,
                 empregado: string, datacompra: string){
    return this.http.post(API_URL_RACAO, {
      price: preco,
      supplier: fornecedor,
      quantity: quantidade,
      type: tiporacao,
      employee: empregado,
      date: datacompra

    }, {responseType: "text"})
  }
}
