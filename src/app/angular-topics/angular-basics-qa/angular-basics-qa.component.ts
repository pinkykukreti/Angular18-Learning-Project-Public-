import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-basics-qa',
  standalone: true,
  imports: [],
  templateUrl: './angular-basics-qa.component.html',
  styleUrl: './angular-basics-qa.component.css'
})
export class AngularBasicsQaComponent {
  selectedIndex: number | null = null;
  qaList = [
    {
      category: 'Angular Basics',
      question: 'What is Angular?',
      answer: `Angular is a TypeScript-based front-end framework used to build single-page web applications.`
    },
    {
      category: 'Angular Basics',
      question: 'What is TypeScript?',
      answer: `TypeScript is a superset of JavaScript that adds types and helps catch errors at compile time.`
    },
    {
      category: 'Angular Basics',
      question: 'What is SPA (Single Page Application)?',
      answer: 'SPA loads a single HTML page and updates the content without reloading the page.'
    },
    {
      category: 'Angular Basics',
      question: 'How Angular is different from AngularJS?',
      answer: `AngularJS is the old JavaScript framework based on MVC, while Angular is a modern TypeScript framework based on components and better performance.`
    },
    {
      category: 'Angular Basics',
      question: 'What are the main building blocks of Angular?',
      answer: `Component, Module, Template, Directive, Service, Dependency Injection,Pipe`
    },
    {
      category: 'Angular Basics',
      question: 'What is a Component?',
      answer: `A component controls a part of the UI.It has:- HTML (template), CSS (style),TypeScript (logic)`
    },
    {
      category: 'Angular Basics',
      question: 'What is a Module?',
      answer: `A module groups related components, directives, pipes, and services together.`
    },
    {
      category: 'Angular Basics',
      question: 'What is Template?',
      answer: `Template is the HTML view of a component.`
    },
    {
      category: 'Angular Basics',
      question: 'What is Data Binding?',
      answer: `It connects component data with the template.Types: - Interpolation {{ }}, Property binding [ ], Event binding ( ), Two-way binding [(ngModel)] `
    },
    {
      category: 'Angular Basics',
      question: 'What is Angular CLI?',
      answer: `Angular CLI is a command-line tool used to create and manage Angular projects.`
    },
    {
      category: 'Angular Basics',
      question: 'What is Shared Module?',
      answer: `Used to store environment-specific configurations (dev, prod).`
    },
    {
      category: 'Angular Basics',
      question: 'What is Change Detection?',
      answer: `Angular checks for data changes and updates UI automatically.`
    },
    {
      category: 'Angular Basics',
      question: 'What is Angular Universal?',
      answer: `Used for Server Side Rendering (SSR) for better SEO.`
    },
    {
      category: 'Angular Basics',
      question: 'What is Safe Navigation Operator (?.)?',
      answer: `Prevents error when object is null or undefined.Like - {{ user?.name }}`
    },
    {
      category: 'Angular Basics',
      question: 'What is Angular ivy?',
      answer: `Ivy is the new engine that makes Angular apps smaller, faster, and easier to debug.`
    },
    {
      category: 'Angular Basics',
      question: 'What are Angular elements?',
      answer: `Angular Elements is a feature that allows you to convert Angular components into custom HTML
       elements (Web Components) that can be used in any application, even without Angular (plain HTML, React, Vue, etc.).`
    },
    {
      category: 'Angular Basics',
      question: 'How to integrate websocket in angular?',
      answer: `To integrate WebSocket in Angular, you usually create a WebSocket service that opens a connection to the 
      server and exposes messages as Observables.`
    },
    {
      category: 'Angular Basics',
      question: 'How to structure large angular apps?',
      answer: `Structuring a large Angular application properly is critical for maintainability, scalability, and team collaboration. 
      The best approach is to organize the app by features, not by file types.`
    },
    {
      category: 'Angular Basics',
      question: 'What are new features of Angular?',
      answer: `New Angular features focus on performance, simpler architecture with standalone components, reactive state using signals, 
      and better rendering with defer and hydration.`
    },
    {
      category: 'Angular Basics',
      question: 'What is provider in angular',
      answer: `A provider is a recipe that tells Angular how to create and supply a dependency to a
      component or service using Dependency Injection.`
    },
    {
      category: 'Angular Basics',
      question: 'What is package.json?',
      answer: `package.json contains project metadata and lists dependencies with version ranges, scripts, and project configuration.`
    },
    {
      category: 'Angular Basics',
      question: 'Why we use package.lock file?',
      answer: `package-lock.json locks the exact versions of all dependencies to ensure consistent installs, faster builds,
       and stable applications across environments.`
    },
    {
      category: 'Angular Basics',
      question: `Difference between package.json and package-lock.json?`,
      answer: `package.json defines dependency ranges, while package-lock.json stores the exact installed versions and full dependency tree.`
    },
    {
      category: 'Angular Basics',
      question: 'What is the use of force in npm install?',
      answer: `npm install --force forces npm to install packages by ignoring dependency conflicts and warnings,
      even if it may cause instability.`
    },
    {
      category: 'Angular Basics',
      question: 'What is node_modules?',
      answer: `It is the folder where all installed npm packages and their dependencies are stored.`
    },
    {
      category: 'Angular Basics',
      question: 'Difference between global and local npm packages?',
      answer: `Global (-g) → accessible system-wide, used for CLI tools.
              Local → installed in project folder, used only in that project`
    },
    {
      category: 'Angular Basics',
      question: 'What is --legacy-peer-deps?',
      answer: `It installs dependencies without enforcing peer dependency conflicts (old npm behavior).`
    },
    {
      category: 'Angular Basics',
      question: 'Difference between npm install and npm ci?',
      answer: `npm install installs dependencies normally.npm ci installs exactly from package-lock.json and is faster and used in CI/CD`
    },
    {
      category: 'Angular Basics',
      question: 'What is a peer dependency?',
      answer: `A peer dependency is a package that expects a specific version of another package to already be installed by the host project.`
    },
    {
      category: 'Angular Basics',
      question: 'What is build vs serve in Angular?',
      answer: `ng serve runs the app locally.ng build creates optimized production files`
    },
    {
      category: 'Angular Basics',
      question: 'What is yarn.lock?',
      answer: `It is similar to package-lock.json but used by Yarn to lock dependency versions.`
    },
    {
      category: 'Angular Basics',
      question: 'What is dependency conflict?',
      answer: `It occurs when two packages require different versions of the same dependency.`
    },
    {
      category: 'Angular Basics',
      question: 'What is dev dependency and dependency?',
      answer: `Dependencies are required for the application to run in production, while devDependencies
      are only needed for development and testing.`
    },
    {
      category: 'Angular Basics',
      question: 'Why use APP_INITIALIZER?',
      answer: `APP_INITIALIZER is used to execute initialization logic before Angular bootstraps the application.`
    },
    {
      category: 'Angular Basics',
      question: 'What is npm?',
      answer: `npm (Node Package Manager) is a package manager for Node.js used to install, manage, and share JavaScript libraries and dependencies.`
    },
    {
      category: 'Angular Basics',
      question: 'Why is polyfills.ts needed?',
      answer: `polyfills.ts provides missing browser features so Angular applications can run smoothly across different browsers.`
    },
    {
      category: 'Angular Basics',
      question: 'What does tsconfig.json do?',
      answer: `tsconfig.json defines how TypeScript code is compiled into JavaScript in an Angular project.`
    },
    {
      category: 'Angular Basics',
      question: 'Explain angular application flow ? what happens after compilation?',
      answer: `After compilation, Angular bootstraps the root module/component, creates components, injects services, renders templates, 
      runs lifecycle hooks, and continuously updates the UI through change detection.`
    },
    {
      category: 'Angular Basics',
      question: 'What are the symbols ^ (caret) and ~ (tilde) in package.json?',
      answer: `^ allows minor and patch updates, while ~ allows only patch updates for a dependency version.`
    },
    {
      category: 'Angular Basics',
      question: 'What is CORS?',
      answer: `CORS decides if one website is allowed to access data from another website’s server.`
    },
    {
      category: 'Angular Basics',
      question: 'What is angular.json?',
      answer: `angular.json is the Angular CLI configuration file that defines project structure, build, serve, test, and deployment options for Angular applications.`
    },
    {
      category: 'Angular Basics',
      question: 'What is app.config?',
      answer: `app.config is a custom configuration file in Angular used to store
       application-specific settings like API URLs, feature flags, and other constants.`
    },
    {
      category: 'Angular Basics',
      question: 'What is Metadata in Angular?',
      answer: `Metadata provides additional information about a class so Angular knows how to process it.`
    },
    {
      category: 'Angular Basics',
      question: 'What is Content Projection?',
      answer: `Content Projection allows a parent component to pass HTML or components into a child component using <ng-content>.`
    },
    {
      category: 'Angular Basics',
      question: 'What is NGCC (Angular Compatibility Compiler)?',
      answer: `NGCC converts Angular libraries compiled with View Engine to be compatible with Ivy compiler.`
    },
    {
      category: 'Angular Basics',
      question: 'What is Angular Material?',
      answer: `Angular Material is a UI component library for Angular that provides pre-built, responsive, and accessible components following Google’s Material Design guidelines.`
    },
    {
      category: 'Angular Basics',
      question: 'How to update angular app?',
      answer: `To update an Angular app, use ng update @angular/cli @angular/core following the Angular Update Guide, then test and apply migrations for breaking changes.`
    },
  ];

  toggleAnswer(index: number) {
    this.selectedIndex = this.selectedIndex === index ? null : index;
  }
}



