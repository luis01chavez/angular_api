import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { registerUser } from 'src/app/modelos/register.interface';
import { ApiService } from '../../servicios/api/api.service';

 '@angular/forms'

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  registerForm =  new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    password: new FormControl('',[Validators.required, Validators.minLength(8)]),
    password_confirmation: new FormControl('',[Validators.required, Validators.minLength(8)])
    //password_confirmation: new FormControl('',Validators.required)
  })

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
  }

  register(form:registerUser){
    this.api.registerUs(form).subscribe(data =>{
      let dataResponse:registerUser = data;
      if(dataResponse.status == 200){
        this.router.navigate(['login']);
      }
    })
  }

}
