import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent{

  registerModel: userModel;
  loginModel: userModel;

  constructor(public authService:AuthService) {
    this.registerModel = {
      email: '',
      password: ''
    };

    this.loginModel = {
      email: '',
      password: ''
    }
  }


  submitRegisterForm(): void {
    this.authService.signup(
      this.registerModel.email,
      this.registerModel.password
    );
  }

  submitLoginForm(): void {
    this.authService.login(
      this.loginModel.email,
      this.loginModel.password
    );
  }

  logOut(): void{
    this.authService.logout();
  }
  
}

interface userModel {
  email: string;
  password: string;
}