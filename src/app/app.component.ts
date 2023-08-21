import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'smarthollo-angular';

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
