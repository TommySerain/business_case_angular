import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IdentifiantsInterface } from 'src/app/models/identifiants-interface';
import { LoginService } from 'src/app/services/login.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../log/log.component.css']
})
export class LoginComponent{
  constructor(private fb:FormBuilder,
    private login:LoginService,
    private token: TokenService){}

  title = 'Login';
  loginForm = this.fb.group({
    emailLogin: ['', [Validators.email, Validators.required]],
    passLogin: ['', Validators.required]
  })

  onSubmit(credential:IdentifiantsInterface):void{
    this.login.checkUser(credential)
    .subscribe(
      data =>{
        this.token.saveToken(data.token);
        this.token.saveUserCredentials(credential.username);
      }
      ,(err) =>{console.log(err)
      }
    )
    console.log(localStorage)
  }

}
