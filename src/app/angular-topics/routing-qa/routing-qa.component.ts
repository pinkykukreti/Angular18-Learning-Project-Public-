import { Component } from '@angular/core';

@Component({
  selector: 'app-routing-qa',
  standalone: true,
  imports: [],
  templateUrl: './routing-qa.component.html',
  styleUrl: './routing-qa.component.css'
})
export class RoutingQaComponent {
  selectedIndex: number | null = null;

  qaList = [
    {
      category: 'Routing',
      question: 'What is Angular Routing?',
      answer: 'Angular Routing is used to navigate between different components without reloading the page using URLs.'
    },
    {
      category: 'Routing',
      question: 'Which module is used for routing in Angular?',
      answer: 'RouterModule from @angular/router.'
    },
    {
      category: 'Routing',
      question: 'What is <router-outlet>?',
      answer: '<router-outlet> is a directive that acts as a placeholder where routed components are displayed.'
    },
    {
      category: 'Routing',
      question: 'What is Routes in Angular?',
      answer: 'Routes is an array of route objects that maps a URL path to a component.'
    },
    {
      category: 'Routing',
      question: 'Difference between RouterModule.forRoot() and forChild()?',
      answer: 'forRoot() → used in main AppModule (loads router once) forChild() → used in feature modules (lazy loaded modules)'
    },
    {
      category: 'Routing',
      question: 'What is Lazy Loading in routing?',
      answer: 'Lazy loading loads modules only when the route is visited, improving performance.'
    },
    {
      category: 'Routing',
      question: 'What are Route Guards and type of it?',
      answer: 'Route Guards control access to routes.Types: CanActivate, CanActivateChild, CanLoad, Resolve,CanDeactivate'
    },
    {
      category: 'Routing',
      question: 'What is CanActivate guard?',
      answer: 'It decides whether a user can access a route or not (used for authentication/authorization).'
    },
    {
      category: 'Routing',
      question: 'What is Resolve guard?',
      answer: 'It fetches data before the route loads so the component gets data immediately.'
    },
    {
      category: 'Routing',
      question: 'What is CanDeactivate guard?',
      answer: 'It prevents leaving a route (used for unsaved form changes).'
    },
    {
      category: 'Routing',
      question: 'What is Wildcard route?',
      answer: 'Used for handling 404 pages.'
    },
    {
      category: 'Routing',
      question: 'What is a Default Route?',
      answer: `Default Route is the route that loads when the application starts or when the URL path is empty ('').
               It defines which component should be displayed by default.`
    },
    {
      category: 'Routing',
      question: 'How to implement Lazy Loading using loadChildren?',
      answer: `Lazy Loading using loadChildren is implemented by loading feature modules only when their route is accessed, which improves application performance.
      loadChildren loads a module on demand instead of at application startup.`
    },
    {
      category: 'Routing',
      question: 'What is ActivatedRoute?',
      answer: 'Used to access route parameters, query params, and route data.'
    },
    {
      category: 'Routing',
      question: 'What are Route Parameters?',
      answer: `Dynamic values passed in URL. like - { path: 'user/:id', component: UserComponent }`
    },
    {
      category: 'Routing',
      question: 'Difference between params and queryParams?',
      answer: 'params → part of URL path (/user/10), queryParams → after ? (/user/10?role=admin)'
    },
    {
      category: 'Routing',
      question: 'What is routerLink?',
      answer: 'Directive used for navigation in HTML templates.'
    },
    {
      category: 'Routing',
      question: 'Difference between routerLink and href?',
      answer: `routerLink is used for navigation inside an Angular Single Page Application using the Angular Router. It changes the view without reloading the page and maintains application state.
               href is a standard HTML attribute used for navigation. It triggers a full page reload and sends a new request to the server, which restarts the Angular application.`
    },
    {
      category: 'Routing',
      question: 'What is Navigation in Angular?',
      answer: 'Directive used for navigation in HTML templates.'
    },
    {
      category: 'Routing',
      question: 'What is programmatic navigation?',
      answer: `Navigation in Angular is the process of moving from one component/view to another using the Angular Router without reloading the page.
               It enables client-side routing, updates the URL, and displays the corresponding component while keeping the application state intact.`
    },
    {
      category: 'Routing',
      question: 'What is Child Routing?',
      answer: 'Routes inside another route.'
    },
    {
      category: 'Routing',
      question: 'What is Child Routing?',
      answer: 'Routes inside another route.'
    },
    {
      category: 'Routing',
      question: `What is pathMatch: 'full'?`,
      answer: 'It ensures the full URL is matched (mostly used with redirect routes).'
    },
    {
      category: 'Routing',
      question: `What is Preloading Strategy?`,
      answer: 'Loads lazy modules in background after app load.'
    },
    {
      category: 'Routing',
      question: `Difference between HashLocationStrategy and PathLocationStrategy?`,
      answer: `Hash (/#/home) → works without server config
              Path (/home) → needs server configuration`
    },
    {
      category: 'Routing',
      question: `What is NavigationStart event?`,
      answer: 'NavigationStart fires at the beginning of route navigation before the new component is loaded.'
    },
    {
      category: 'Routing',
      question: `What is NavigationEnd event?`,
      answer: 'Router event triggered when navigation finishes successfully.'
    },
    {
      category: 'Routing',
      question: 'How to pass data between routes?',
      answer: 'Route params, Query params, State object, Shared service'
    },
    {
      category: 'Routing',
      question: 'What is redirectTo?',
      answer: 'Redirects one route to another.'
    },
    {
      category: 'Routing',
      question: 'What is routerLinkActive?',
      answer: 'Adds CSS class to active route link.'
    },
    {
      category: 'Routing',
      question: 'What is skipLocationChange?',
      answer: 'Navigates without changing URL in browser history.'
    },
    {
      category: 'Routing',
      question: 'What is the difference between CanLoad and CanActivate?',
      answer: 'CanLoad → prevents lazy-loaded module from being loaded at all(Use CanLoad for security + performance.). CanActivate → module loads but blocks route access.'
    },
    {
      category: 'Routing',
      question: 'What happens if a Resolver fails?',
      answer: 'Navigation is cancelled, Route is not activated, You can redirect to error page inside resolver using Router'
    },
    {
      category: 'Routing',
      question: 'Difference between Lazy Loading and Preloading?',
      answer: 'Lazy Loading → loads module when route is visited, Preloading → loads lazy modules in background after app loads'
    },
    {
      category: 'Routing',
      question: 'What is PreloadAllModules?',
      answer: 'A strategy that preloads all lazy-loaded modules automatically after initial load.'
    },
    {
      category: 'Routing',
      question: 'How does Angular decide which route to match first?',
      answer: 'Angular uses top-to-bottom order in routes array (first match wins).'
    },
    {
      category: 'Routing',
      question: 'What is runGuardsAndResolvers?',
      answer: 'Controls when guards & resolvers should re-run.'
    },
    {
      category: 'Routing',
      question: 'What is NavigationExtras.state?',
      answer: 'Pass data during navigation without using URL.'
    },
    {
      category: 'Routing',
      question: 'What is router.events used for?',
      answer: 'To track route lifecycle events like:- NavigationStart, NavigationEnd, NavigationCancel, NavigationError Used for loaders and logging.'
    },
    {
      category: 'Routing',
      question: 'What is Route Reuse Strategy?',
      answer: 'It controls the reuse of components during route navigation.'
    },
    {
      category: 'Routing',
      question: 'What is UrlTree?',
      answer: 'A representation of router state; returned from guards to redirect user.'
    },
    {
      category: 'Routing',
      question: 'How to reload the same route in Angular?',
      answer: `this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
  this.router.navigate(['/current']);
});`
    },
    {
      category: 'Routing',
      question: 'What is relativeTo in navigation?',
      answer: 'Navigate relative to current route instead of root.'
    },
    {
      category: 'Routing',
      question: 'Difference between eager and lazy modules?',
      answer: `Eager → loaded at startup,
      Lazy → loaded on demand`
    },
    {
      category: 'Routing',
      question: 'Difference between navigate() and navigateByUrl()?',
      answer: 'Navigate relative to current route instead of root.'
    },
    {
      category: 'Routing',
      question: 'Difference between navigate() and navigateByUrl()?',
      answer: 'Navigate relative to current route instead of root.'
    },
    {
      category: 'Routing',
      question: 'What is Absolute Path vs Relative Path in Routing?',
      answer: `Absolute Path:
              Navigation starts from the root of the application and uses / at the beginning of the URL.
              Example: /dashboard

              Relative Path:
              Navigation starts from the current route without using /.
              Example: profile (from /user → /user/profile)`
    },
    {
      category: 'Routing',
      question: 'Difference between navigate() and navigateByUrl()?',
      answer: 'Navigate relative to current route instead of root.'
    },
    {
      category: 'Routing',
      question: 'How to protect routes based on role (Role-based routing)?',
      answer: 'Role-based routing is implemented using Route Guards (CanActivate) to allow or deny access based on the user’s role.'
    },
    {
      category: 'Routing',
      question: 'Difference between navigate() and navigateByUrl()?',
      answer: 'Navigate relative to current route instead of root.'
    },
    {
      category: 'Routing',
      question: 'What is provideRouter() (Angular 15+)?',
      answer: 'provideRouter() sets up Angular routing in standalone applications without using modules.'
    },
    {
      category: 'Routing',
      question: 'What is Standalone Routing?',
      answer: 'Standalone routing allows routing configuration without modules, making the application simpler and more lightweight.'
    },
    {
      category: 'Routing',
      question: 'What is canMatch (new guard)?',
      answer: 'canMatch controls whether a route can be matched and loaded before navigation occurs.'
    },
  ];

  toggleAnswer(index: number) {
    this.selectedIndex = this.selectedIndex === index ? null : index;
  }
}
