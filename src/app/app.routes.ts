import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      // RxJS
      {
        path: 'rxjs/observable',
        loadComponent: () =>
          import('./features/playground/rxjs/observable-lab/observable-lab.component')
            .then(m => m.ObservableLabComponent)
      },
      {
        path: 'rxjs/operators',
        loadComponent: () =>
          import('./features/playground/rxjs/operators-lab/operators-lab.component')
            .then(m => m.OperatorsLabComponent)
      },
      {
        path: 'rxjs/subject',
        loadComponent: () =>
          import('./features/playground/rxjs/subject-lab/subject-lab.component')
            .then(m => m.SubjectLabComponent)
      },

      // Parent Child
      {
        path: 'parent-child',
        loadComponent: () =>
          import('./features/playground/viewchild/parent-view/parent-view.component')
            .then(m => m.ParentViewComponent)
      },

      // Data Binding
      {
        path: 'data-binding',
        loadComponent: () =>
          import('./features/playground/binding/data-binding/data-binding.component')
            .then(m => m.DataBindingComponent)
      },

      // HTTP
      {
        path: 'http/post-get',
        loadComponent: () =>
          import('./features/playground/http/http-advanced/http-advanced.component')
            .then(m => m.HttpAdvancedComponent)
      },
      {
        path: 'change-detection',
        loadComponent: () =>
          import('./features/playground/change-detection-lab/change-detection-lab.component')
            .then(m => m.ChangeDetectionAdvancedComponent)
      },
      {
        path: 'lifecycle-hooks',
        loadComponent: () =>
          import('./lifecycle-hooks/lifecycle-hooks.component')
            .then(m => m.LifecycleHooksComponent)
      },
      {
        path: 'popup',
        loadComponent: () =>
          import('./features/playground/simple-popup/simple-popup.component')
            .then(m => m.SimplePopupComponent)
      },
      {
        path: 'template',
        loadComponent: () => import('./features/playground/template-practice/template-practice.component')
          .then(m => m.TemplatePracticeComponent)
      },
      {
        path: 'signals',
        loadComponent: () => import('./features/playground/signals-lab/signals-lab.component')
          .then(m => m.SignalsLabComponent)
      },
      // {
      //   path: 'http/get',
      //   loadComponent: () =>
      //     import('./features/playground/http/get-api-lab/get-api-lab.component')
      //       .then(m => m.GetApiLabComponent)
      // },
      // {
      //   path: 'http/post',
      //   loadComponent: () =>
      //     import('./features/playground/http/post-api-lab/post-api-lab.component')
      //       .then(m => m.PostApiLabComponent)
      // },

      // Forms
      {
        path: 'forms/template',
        loadComponent: () =>
          import('./features/playground/forms/template-form-lab/template-form-lab.component')
            .then(m => m.TemplateFormLabComponent)
      },
      {
        path: 'forms/reactive',
        loadComponent: () =>
          import('./features/playground/forms/reactive-form-lab/reactive-form-lab.component')
            .then(m => m.ReactiveFormLabComponent)
      },

      // Others
      {
        path: 'pipes',
        loadComponent: () =>
          import('./features/playground/pipes/pipes-lab/pipes-lab.component')
            .then(m => m.PipesLabComponent)
      },
      {
        path: 'directives',
        loadComponent: () =>
          import('./features/playground/directives/directives-lab/directives-lab.component')
            .then(m => m.DirectivesLabComponent)
      },
      {
        path: 'git-qa',
        loadComponent: () =>
          import('./git-qa/git-qa.component')
            .then(m => m.GitQaComponent)
      },
      {
        path: 'bootstrap-qa',
        loadComponent: () =>
          import('./bootstrap-qa/bootstrap-qa.component')
            .then(m => m.BootstrapQaComponent)
      },
         {
        path: 'html-qa',
        loadComponent: () =>
          import('./html-qa/html-qa.component')
            .then(m => m.HtmlQaComponent)
      },
            {
        path: 'css-sass-qa',
        loadComponent: () =>
          import('./css-sass-qa/css-sass-qa.component')
            .then(m => m.CssSassQaComponent)
      },
            {
        path: 'javascript-qa',
        loadComponent: () =>
          import('./javascript-qa/javascript-qa.component')
            .then(m => m.JavascriptQaComponent)
      },
      {
        path: 'angular-topics',
        loadComponent: () =>
          import('./angular-topics/angular-topics.component')
            .then(m => m.AngularTopicsComponent),
        children: [
          {
            path: 'rxjs-observable-qa',
            loadComponent: () =>
              import('./angular-topics/rxjs-qa/rxjs-qa.component')
                .then(m => m.RxjsQaComponent)
          },
          {
            path: 'routing-qa',
            loadComponent: () =>
              import('./angular-topics/routing-qa/routing-qa.component')
                .then(m => m.RoutingQaComponent)
          },
          {
            path: 'directive-qa',
            loadComponent: () =>
              import('./angular-topics/directive-qa/directive-qa.component')
                .then(m => m.DirectiveQaComponent)
          },
          {
            path: 'service-di-qa',
            loadComponent: () =>
              import('./angular-topics/service-di-qa/service-di-qa.component')
                .then(m => m.ServiceDIQaComponent)
          },
          {
            path: 'forms-qa',
            loadComponent: () =>
              import('./angular-topics/forms-qa/forms-qa.component')
                .then(m => m.FormsQaComponent)
          },
          {
            path: 'lifecycle-hooks-qa',
            loadComponent: () =>
              import('./angular-topics/angular-lifecycle-qa/angular-lifecycle-qa.component')
                .then(m => m.AngularLifecycleQaComponent)
          },
          {
            path: 'state-management-qa',
            loadComponent: () =>
              import('./angular-topics/state-management-qa/state-management-qa.component')
                .then(m => m.StateManagementQaComponent)
          },
          {
            path: 'pipe-qa',
            loadComponent: () =>
              import('./angular-topics/pipe-qa/pipe-qa.component')
                .then(m => m.PipeQaComponent)
          },
          {
            path: 'performance-optimization-qa',
            loadComponent: () =>
              import('./angular-topics/performance-optimization-qa/performance-optimization-qa.component')
                .then(m => m.PerformanceOptimizationQaComponent)
          },
          {
            path: 'angular-basics-qa',
            loadComponent: () =>
              import('./angular-topics/angular-basics-qa/angular-basics-qa.component')
                .then(m => m.AngularBasicsQaComponent)
          },
          {
            path: 'http-interceptors-qa',
            loadComponent: () =>
              import('./angular-topics/http-interceptors-qa/http-interceptors-qa.component')
                .then(m => m.HttpInterceptorsQaComponent)
          },
          {
            path: 'modal-popup-qa',
            loadComponent: () =>
              import('./angular-topics/modal-popup-qa/modal-popup-qa.component')
                .then(m => m.ModalPopupQaComponent)
          },
          {
            path: 'new-features-qa',
            loadComponent: () =>
              import('./angular-topics/new-features-qa/new-features-qa.component')
                .then(m => m.NewFeaturesQaComponent)
          },
          { path: '', redirectTo: 'rxjs-observable-qa', pathMatch: 'full' }
        ]
      },
      { path: '', redirectTo: 'rxjs/observable', pathMatch: 'full' }
    ]
  },

  { path: '**', redirectTo: 'dashboard' } // wild
];
