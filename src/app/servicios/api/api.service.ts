import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginIn } from '../../modelos/login.interface';
import { ResponseIn } from '../../modelos/response.interface';
import { Observable } from 'rxjs';
import { registerUser } from 'src/app/modelos/register.interface';
import { ResponseRe } from 'src/app/modelos/responseR.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //https://api.solodata.es/ <--Api de pruebas
  url:string = "http://192.168.15.65:8000/api/"

  constructor(private http:HttpClient) { }

  loginByEmail(form:LoginIn):Observable<ResponseIn>{
    let direccion = this.url + "login";
    return this.http.post<ResponseIn>(direccion,form);  
  }

  registerUs(form:registerUser):Observable<ResponseRe>{
    let direccion = this.url + "register";
    return this.http.post<ResponseRe>(direccion,form); 
  }


}
