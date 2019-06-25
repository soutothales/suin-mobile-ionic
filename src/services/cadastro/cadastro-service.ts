import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";

//http://150.165.15.87/
export const API_URL_PORCO = "http://150.165.85.67/api/pig";
export const API_URL_RACAO = "http://150.165.85.67/api/ration";

@Injectable()
export class CadastroService {
  //private token: string;

  constructor(private http: HttpClient){
  }

  hasValidToken() {
    return true;
  }

  cadastrarPorco(numporco: string, dataEntrada: string, 
                peso: string, idade: string,
                tipoPorco: string, isCio: string, partos: string[]){
                  console.log(partos);
    return this.http.post(API_URL_PORCO, {
      idade: idade,
      numero: numporco,
      peso: peso,
      data_entrada: dataEntrada,
      tipo: tipoPorco,
      cio: isCio,
      partos: []

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
