import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Auth } from 'src/app/auth/auth.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  get auth() {
    return this.authService.auth;
  }
  constructor( private router: Router,
               private authService: AuthService) { }

  
   logout() {
       this.router.navigate(['./auth'])
       }            
  ngOnInit(): void {
  }


}
