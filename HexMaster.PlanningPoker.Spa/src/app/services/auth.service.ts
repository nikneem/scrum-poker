import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

(window as any).global = window;

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class AuthService {
  auth0 = new auth0.WebAuth({
    clientID: 'Qtg56CUgysg5P1QjmDLH9pLBOOFJpgVN',
    domain: 'planning-poker.eu.auth0.com',
    responseType: 'token id_token',
    redirectUri: environment.callbackUrl,
    scope: 'openid'
  });

  constructor(public router: Router) {}

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['']);
      } else if (err) {
        this.router.navigate(['']);
        console.log(err);
      }
    });
  }

  public getAuthorizationToken(): string {
    if (this.isAuthenticated()) {
      return `Bearer ${localStorage.getItem('access_token')}`;
    } else {
      return null;
    }
  }

  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );

    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(authResult.idToken);
    debugger;
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('sub', decodedToken.sub);
    // decode id token
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('sub');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    return new Date().getTime() < expiresAt;
  }
}
