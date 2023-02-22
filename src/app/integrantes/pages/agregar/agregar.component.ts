import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `section {
      display: flex;
      width: 100%;
      height: 100%;
    }
    section img {
      width: 0px;
      flex-grow: 1;
      object-fit: cover;
      opacity: .8;
      transition: 1s ease;
    }
    section img:hover {
      cursor: crosshair;
      width: 300px;
      opacity: 1;
      filter: contrast(120%);
    }
    `
  ]
})
export class AgregarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  regresar() {
    this.router.navigate(['/integrantes/listado']);
  }

}
