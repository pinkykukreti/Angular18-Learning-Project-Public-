import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
loginData = {
  username: 'emilys',
  password: 'emilyspass'
};
constructor(private auth: AuthService, private router: Router) {}


login() {
  this.auth.login(this.loginData).subscribe({
    next: (res: any) => {
      console.log(res);
      this.auth.saveToken(res.accessToken);
      this.auth.saveUser(res.firstName + ' ' + res.lastName);
      this.router.navigate(['/dashboard']);
    },
    error: (err) => {
      alert(err.error.error);
    }
  });
}

}
