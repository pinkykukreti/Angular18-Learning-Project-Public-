import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {

  // private apiUrl = 'https://api.example.com';

  constructor(private http: HttpClient) { }

  login(data: any) {
  return this.http.post('https://dummyjson.com/auth/login', {
    username: data.username,
    password: data.password
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
  saveUser(username: any) {
  localStorage.setItem('username', username);
}

getUser() {
  return localStorage.getItem('username');
}
  logout() {
    localStorage.clear();
  }
}
