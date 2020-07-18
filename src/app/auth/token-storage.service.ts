import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';
const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private roles: Array<string> = [];
  private authorities;
  constructor() { }
  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, CryptoJS.AES.encrypt(JSON.stringify(token), 'secretkey123').toString());
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }
  isLoggedIn() {
    return this.getToken() !== null;
  }
  public saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, CryptoJS.AES.encrypt(JSON.stringify(username), 'secretkey987').toString());
  }

  public getUsername(): string {
    return sessionStorage.getItem(USERNAME_KEY);
  }

  public saveAuthorities(authorities: string[]) {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    console.log(JSON.stringify(authorities));
    this.authorities=authorities;
    window.sessionStorage.setItem(AUTHORITIES_KEY, CryptoJS.AES.encrypt(JSON.stringify(authorities), 'secretkey456').toString());
  }

  public getAuthorities(): string[] {
    this.roles = [];

    /*if (sessionStorage.getItem(TOKEN_KEY)) {
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(authority => {
        this.roles.push(authority.authority);
      });
    }*/
    const bytes = CryptoJS.AES.decrypt(sessionStorage.getItem(AUTHORITIES_KEY), 'secretkey456');
    if (bytes.toString()) {
      this.authorities= JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }
    console.log(this.authorities);
    JSON.parse(JSON.stringify(this.authorities)).forEach(authority => {
      this.roles.push(authority.authority);
    });
    window.sessionStorage.setItem(AUTHORITIES_KEY, CryptoJS.AES.encrypt(JSON.stringify(this.authorities), 'secretkey456').toString());
    console.log(this.roles);
    console.log(this.authorities);
    return this.roles;
  }
}
