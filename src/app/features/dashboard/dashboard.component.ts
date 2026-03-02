import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AngularTopicsComponent } from '../../angular-topics/angular-topics.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, RouterModule, AngularTopicsComponent],  
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {}
