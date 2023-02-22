
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
  .back {
    background-image: url("https://9a36b41305.cbaul-cdnwnd.com/7c602863186e9d970f5b8fa272b142ea/200000021-373c9373cd/700/4.webp?ph=9a36b41305");
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    // height: 100%;
    // width: 100%;
  }
  input {
    background: grey;
    text: blue;
    cursor: pointer;
  }`
  ]
})
export class LoginComponent implements OnInit {
  userName!: string;

  constructor( private router: Router,
               private authService: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.getLogin(this.userName)
    .subscribe(resp => {
      console.log(resp)
      if (resp.length > 0){
        this.router.navigate(['./integrantes']);
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No se encontro el usuario',
          footer: '<a href="">Why do I have this issue?</a>'
        })

      }
    })
      
     
    
  }

}
