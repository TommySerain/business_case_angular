import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IdentifiantsInterface } from 'src/app/models/identifiants-interface';
import { LoginService } from 'src/app/services/login.service';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../log/log.component.css']
})
export class LoginComponent{
  constructor(private fb:FormBuilder,
    private login:LoginService,
    private token: TokenService,
    private userService: UserService,
    private toast: ToastrService,
    private router: Router){}

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
        this.toast.success("Connexion réussie");
        this.userService.retrieveUserData();
          this.router.navigate([''])

      }
      ,(err) =>{
        this.toast.error("Echec de la connexion, veuillez vérifier vos informations");
      }
    )
  }

}