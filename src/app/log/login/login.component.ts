import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../log/log.component.css']
})
export class LoginComponent {

  constructor(private fb:FormBuilder){}

  title = 'Login';
  loginForm = this.fb.group({
    emailLogin: ['', Validators.email],
    passLogin: ['', Validators.required]
  })

  consoleDisplay(a:string, b:string){
    console.log(a,b)
  }
}
