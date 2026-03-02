import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  constructor(private auth: AuthService, private router: Router) {}
 username: any;
  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
  ngOnInit() {
   this.username = this.auth.getUser();
  }
}
