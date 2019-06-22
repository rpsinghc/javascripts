import { Component } from '@angular/core';
import { list } from "./featurelist";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Management Service Application ';
  menuItems = list;

}
