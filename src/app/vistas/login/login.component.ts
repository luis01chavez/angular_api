import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms'; '@angular/forms'
import { ApiService } from '../../servicios/api/api.service';
import { LoginIn } from '../../modelos/login.interface';
import { ResponseIn } from '../../modelos/response.interface';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm =  new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })

  constructor( private api:ApiService, private router:Router) { }

  errorStatus:boolean = false;
  errorMsj:any = "";

  ngOnInit(): void {
    this.revisarToken();
  }

  revisarToken(){
    if(localStorage.getItem('token')){
      this.router.navigate(['dashboard'])
    }
  }


  onLogin(form:LoginIn){
    this.api.loginByEmail(form).pipe(catchError((err) =>{
      const validacines = err.error;
      for (const property in validacines){
        console.log(`${validacines[property]}`)
      }
      return throwError(err);
    })).subscribe(data =>{
      let dataResponse:ResponseIn = data;
      if(dataResponse.status == "okay"){
        localStorage.setItem("token", dataResponse.acces_token);
        this.router.navigate(['dashboard']);
      }else{
        this.errorStatus = true;
        this.errorMsj = dataResponse.msg;
      }
    })
  }

}
