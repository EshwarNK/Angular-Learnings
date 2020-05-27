import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Puts this title into the title in the span tag of app.component.html file
  title = 'my-first-angular-project';

  firstName = 'Eshwar';
  lastName = 'K'; 
}
