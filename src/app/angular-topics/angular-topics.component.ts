import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-angular-topics',
  standalone: true,
  imports: [RouterModule],  
  templateUrl: './angular-topics.component.html',
  styleUrls: ['./angular-topics.component.css']
})
export class AngularTopicsComponent {
constructor(private router: Router) {}

  // topics: string[] = [

  //   'Interceptors',
  //   'ViewChild & ContentChild',
  //   'NgModules vs Standalone Components',
  //  
  //   
  //   'Unit Testing',
  //   'E2E Testing',
  //   'Angular Material',
  //   'Internationalization (i18n)',
  //   'Build & Deployment',
  // Bootstrap,
  // signals
  // ];

  topics = [
  { name: 'Angular Basics', route: 'dashboard/angular-topics/angular-basics-qa' },
  { name: 'HTTP Interceptors, Authentication & Security', route: 'dashboard/angular-topics/http-interceptors-qa' },
  { name: 'Observables, Subjects, RxJS and Its Operator', route: 'dashboard/angular-topics/rxjs-observable-qa' },
  { name: 'Routing & Navigation', route: 'dashboard/angular-topics/routing-qa' },
  { name: 'Directive', route: 'dashboard/angular-topics/directive-qa' },
  { name: 'Service & Dependency Injection', route: 'dashboard/angular-topics/service-di-qa' },
  { name: 'Lifecycle Hooks', route: 'dashboard/angular-topics/lifecycle-hooks-qa' },
  { name: 'Pipe', route: 'dashboard/angular-topics/pipe-qa' },
  { name: 'State Management', route: 'dashboard/angular-topics/state-management-qa' },
  { name: 'Forms', route: 'dashboard/angular-topics/forms-qa' },
  { name: 'Performance Optimization', route: 'dashboard/angular-topics/performance-optimization-qa' },
  { name: 'Modal (Popup)', route: 'dashboard/angular-topics/modal-popup-qa' },
  { name: 'Angular New Features', route: 'dashboard/angular-topics/new-features-qa' },
];


  onTopicChange(route: any) {
    if (route) {
      this.router.navigateByUrl(route?.value);
    }
  }

}
