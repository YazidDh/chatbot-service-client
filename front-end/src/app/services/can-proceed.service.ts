import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanProceedService {
 loggedIn:boolean=false;

  constructor() { 
        
  }

  login(email:string) {
    // perform login logic
    this.loggedIn=true;

    this.setLoggedIn(true);
    this.setEmail(email);
  }

  logout() {
    // perform logout logic
    this.loggedIn=false;
    this.setLoggedIn(false);
    localStorage.clear()
  }

  isLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  private setLoggedIn(value: boolean) {
    localStorage.setItem('isLoggedIn', value.toString());
  }

  private setEmail(value: string) {
    localStorage.setItem('email', value);
  }
  
  geStoredEmail(){
    return localStorage.getItem('email')
  }
}
