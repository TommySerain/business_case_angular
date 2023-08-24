import { Component, OnDestroy, OnInit } from '@angular/core';
import { TokenService } from './services/token.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'smarthollo-angular';

  constructor(private tokenService: TokenService,
    private userService: UserService){}

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
