import { Component } from '@angular/core';
import { AuthenticationService } from './Authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDemoApp';

  constructor(private authSvc:AuthenticationService){
    authSvc.logout();
  }

  isloggedIn(): boolean{
    return this.authSvc.isloggedIn();
  }

    logout(){
      this.authSvc.logout();
    }
  
}
