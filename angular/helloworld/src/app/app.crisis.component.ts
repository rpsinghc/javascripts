import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  
})
export class AppCrisisComponent {
  title = 'ahellow';
  updated = ""
  bcrisis="BIG crisis";
  

  /**
   * alt
$scope   */
  public alt(value: string) {
    this.updated = value + "Xt";
  }

}
