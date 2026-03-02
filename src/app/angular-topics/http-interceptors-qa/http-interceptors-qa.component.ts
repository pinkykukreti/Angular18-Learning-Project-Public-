import { Component } from '@angular/core';

@Component({
  selector: 'app-http-interceptors-qa',
  standalone: true,
  imports: [],
  templateUrl: './http-interceptors-qa.component.html',
  styleUrl: './http-interceptors-qa.component.css'
})
export class HttpInterceptorsQaComponent {
  selectedIndex: number | null = null;
  qaList = [
    {
      category: 'Http, Auth',
      question: 'What is an HTTP Interceptor in Angular?',
      answer: `An HTTP interceptor is a service that intercepts HTTP requests and responses before they are sent or received, allowing you to modify them (e.g., add headers, handle errors).`
    },
    {
      category: 'Http, Auth',
      question: 'Why do we use HTTP Interceptors?',
      answer: `Add authentication tokens (JWT), Log requests and responses, Handle global errors, Set default headers, Retry failed requests`
    },
    {
      category: 'Http, Auth',
      question: 'How to create an HTTP Interceptor?',
      answer: `@Injectable()
        export class AuthInterceptor implements HttpInterceptor {
          intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
            const clonedReq = req.clone({
              setHeaders: { Authorization: Bearer ${'token'} }
            });
            return next.handle(clonedReq);
          }
}
`
    },
    {
      category: 'Http, Auth',
      question: 'How to provide an interceptor?',
      answer: `@NgModule({
          providers: [
            { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
          ]
        })
        export class AppModule {}
        `
    },
    {
      category: 'Http, Auth',
      question: 'Can you have multiple interceptors?',
      answer: `Yes, interceptors are executed in the order they are provided in the module.`
    },
    {
      category: 'Http, Auth',
      question: 'What is the difference between HttpClient and HttpInterceptor?',
      answer: `HttpClient → makes HTTP requests. HttpInterceptor → intercepts requests/responses for modification or logging`
    },
    {
      category: 'Http, Auth',
      question: 'How do interceptors handle errors globally?',
      answer: `intercept(req, next) {
      return next.handle(req).pipe(
        catchError(err => {
          // handle error globally
          return throwError(() => err);
        })
      );
    }`
    },
    {
      category: 'Http, Auth',
      question: 'Can interceptors modify request and response?',
      answer: `Yes, you can clone the request, modify it, and also transform the response using RxJS operators like map or catchError.`
    },
    {
      category: 'Http, Auth',
      question: 'Can interceptors cancel requests?',
      answer: `Yes, by not calling next.handle(req) or by returning an empty observable.`
    },
    {
      category: 'Http, Auth',
      question: 'What is authentication in Angular?',
      answer: `Authentication is the process of verifying the user’s identity before allowing access to protected resources.`
    },
    {
      category: 'Http, Auth',
      question: 'How do you implement authentication in Angular?',
      answer: `Use login API to validate credentials, Store JWT/token in localStorage/sessionStorage,
              Send token with requests via HTTP Interceptors, Protect routes with AuthGuard`
    },
    {
      category: 'Http, Auth',
      question: 'What is JWT?',
      answer: `JWT (JSON Web Token) is a compact token used for authentication. It contains encoded user information and a signature to verify authenticity.`
    },
    {
      category: 'Http, Auth',
      question: 'How to store JWT in Angular?',
      answer: `LocalStorage → persists across tabs, sessionStorage → cleared on tab close, Optionally cookies → can be HTTP-only for security`
    },
    {
      category: 'Http, Auth',
      question: 'What is an Auth Guard?',
      answer: `An AuthGuard prevents unauthorized users from accessing specific routes. Implemented by CanActivate or CanLoad interfaces.`
    },
    {
      category: 'Http, Auth',
      question: 'How does HTTP Interceptor help in authentication?',
      answer: `Automatically adds JWT token to request headers, Handles 401/403 errors globally, Logs out user or refreshes token when needed`
    },
    {
      category: 'Http, Auth',
      question: 'What is token refresh?',
      answer: `Access tokens expire quickly for security.Refresh tokens are used to get a new access token without logging in again`
    },
    {
      category: 'Http, Auth',
      question: 'Difference between Authentication and Authorization?',
      answer: `Authentication - Verifies identity, Verifies identity, Who are you?. Authorization - Authorization,
      “What can you do?”, “What can you do?”`
    },
    {
      category: 'Http, Auth',
      question: 'How to handle token expiry?',
      answer: `Use refresh tokens, Auto-logout user after expiry, Interceptor can catch 401 and trigger refresh or logout`
    },

    {
      category: 'Http, Auth',
      question: 'Difference between Access Token and Refresh Token?',
      answer: `Access token is for resource access; refresh token is for renewing access token when it expires.`
    },
    {
      category: 'Http, Auth',
      question: 'Difference between Request and Response Interceptors',
      answer: `Request Interceptor: -	Modifies outgoing HTTP requests (add headers, tokens, logging)
              Response Interceptor: -	Handles or transforms incoming responses (error handling, data formatting)`
    },
    {
      category: 'Http, Auth',
      question: 'Structure of a JWT',
      answer: `Signature – used to verify token integrity (HMAC or RSA).
              JWT = Header + Payload + Signature, all Base64-encoded and dot-separated.`
    },
    {
      category: 'Http, Auth',
      question: 'How do you verify a JWT on the frontend?',
      answer: `On the frontend, verify JWT by decoding it and checking the expiry; signature verification is usually done on the backend.`
    },
    {
      category: 'Http, Auth',
      question: 'What is XSS and how does Angular prevent it?',
      answer: `Cross-Site Scripting attacks inject malicious scripts.
              Angular prevents it with automatic DOM sanitization.`
    },
    {
      category: 'Http, Auth',
      question: 'What is CSRF? How to prevent?',
      answer: `CSRF = Cross-Site Request Forgery.
              Prevent using SameSite cookies or anti-CSRF tokens`
    },
    {
      category: 'Http, Auth',
      question: 'How to sanitize HTML in Angular?',
      answer: `Use DomSanitizer service.`
    },
    {
      category: 'Http, Auth',
      question: 'How to secure API keys/secrets?',
      answer: `Never store in frontend,Keep secrets in backend and call APIs from server.`
    },
    {
      category: 'Http, Auth',
      question: 'What is OAuth 2.0?',
      answer: `Authorization framework to allow apps to access resources without sharing user credentials.`
    },
    {
      category: 'Http, Auth',
      question: 'Difference between implicit flow and authorization code flow?',
      answer: `Implicit → token directly returned to frontend (less secure).
              Authorization code → token exchanged via backend (more secure)`
    },
    {
      category: 'Http, Auth',
      question: 'How to implement Google/Facebook login?',
      answer: `Use OAuth SDKs, Obtain access token, Send token to backend for verification`
    },
    {
      category: 'Http, Auth',
      question: 'How to refresh OAuth tokens?',
      answer: `Use refresh token endpoint, Replace expired access token without login`
    },
    {
      category: 'Http, Auth',
      question: 'How to auto-logout users after inactivity?',
      answer: `Track user events (click, scroll), Reset timer on activity, Call logout function after timer expires`
    },
    {
      category: 'Http, Auth',
      question: 'How to handle multiple roles?',
      answer: `Encode roles in JWT, AuthGuard checks required role per route, Optionally hide/show UI elements`
    },
    {
      category: 'Http, Auth',
      question: 'How to prevent brute-force attacks?',
      answer: `Limit login attempts, Add CAPTCHA, Delay or block after multiple failures`
    },
    {
      category: 'Http, Auth',
      question: 'How to implement 2FA in Angular?',
      answer: `After password login, prompt for OTP, Verify OTP via backend, Only grant JWT after successful OTP`
    },
  ];

  toggleAnswer(index: number) {
    this.selectedIndex = this.selectedIndex === index ? null : index;
  }
}



