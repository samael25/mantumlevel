import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CancionesService } from '../../services/canciones.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
    `.marg {
      margin: 7px 7px;
    }
    `
  ]
})
export class BuscarComponent implements OnInit {
  canciones: any[] = [];
  reproducir() {
    const audio = new Audio('assets/Hola.mp3');
    audio.play();
}
  rola: any;
  idRola!: any;

  constructor(
    private readonly cancionesService: CancionesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCanciones();
  }
  
  getCanciones(){
    this.cancionesService.getCanciones().subscribe(res => {
      this.canciones = res;
      console.log( this.canciones );
    })
  }

  getRola() {
    
      this.cancionesService.getRola(this.idRola).subscribe(res => {
        this.rola = res;
        console.log('Rola', res);
      })
    
      
    
  }

  regresar() {
    this.router.navigate(['/integrantes/listado']);
  }

}
