/* import { Injectable } from "@angular/core";
import { CredentialsDTO } from "../models/credentials.dto";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";

@Injectable()
export class AuthService {

  constructor(public http: HttpClient) {
  }

  // header = { "headers": {"Content-Type": "application/json"};

  authenticate(creds : CredentialsDTO) {
    return this.http.post(
                      `${API_CONFIG.loginUrl}`,
                          creds,
                  {
                            headers: new HttpHeaders({'Content-Type':  'application/json'}),
                            observe: 'response',
                            responseType: 'text'
                          });
  }

  /*
    {
      observe: 'response',
      responseType: 'text'
    }
  */
//}
